/**
 * Singleton WebGL dither renderer.
 * 
 * Uses ONE persistent WebGL context shared across all DitherImage instances.
 * Images are queued and processed sequentially, with the result copied to each
 * component's 2D canvas. This completely eliminates the mobile WebGL context
 * limit problem (typically 8-16 contexts on iOS/Android).
 * 
 * Architecture:
 *   1. Single offscreen WebGL canvas + compiled shader program (created once)
 *   2. Each DitherImage calls `enqueueDither(...)` which adds to a FIFO queue
 *   3. Queue is drained one-at-a-time: resize offscreen canvas → upload texture → render → readPixels → copy to target 2D canvas → next
 *   4. Zero WebGL contexts are held by any component
 */

// ─── Types ───────────────────────────────────────────────────────────────────

interface DitherJob {
  img: HTMLImageElement
  targetCanvas: HTMLCanvasElement
  colorDark: string
  colorLight: string
  pixelSize: number
  resolve: () => void
  reject: (err: Error) => void
}

interface DitherRenderer {
  gl: WebGLRenderingContext
  program: WebGLProgram
  offscreen: HTMLCanvasElement
  uniforms: {
    uResolution: WebGLUniformLocation
    uPixelSize: WebGLUniformLocation
    uColorDark: WebGLUniformLocation
    uColorLight: WebGLUniformLocation
    uImage: WebGLUniformLocation
  }
}

// ─── Singleton State ─────────────────────────────────────────────────────────

let renderer: DitherRenderer | null = null
const queue: DitherJob[] = []
let processing = false

// ─── Helpers ─────────────────────────────────────────────────────────────────

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ]
    : [0, 0, 0]
}

// ─── Shader Sources ──────────────────────────────────────────────────────────

const VERTEX_SHADER = `
  attribute vec2 aPosition;
  attribute vec2 aUv;
  varying vec2 vUv;
  void main() {
    vUv = aUv;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`

const FRAGMENT_SHADER = `
  precision mediump float;
  varying vec2 vUv;
  uniform sampler2D uImage;
  uniform vec2 uResolution;
  uniform vec3 uColorDark;
  uniform vec3 uColorLight;
  uniform float uPixelSize;

  float bayer4x4(vec2 p) {
    vec2 p0 = floor(mod(p, 4.0));
    float b = 0.0;
    if (p0.y == 0.0) {
      if (p0.x == 0.0) b = 0.0;
      else if (p0.x == 1.0) b = 8.0;
      else if (p0.x == 2.0) b = 2.0;
      else b = 10.0;
    } else if (p0.y == 1.0) {
      if (p0.x == 0.0) b = 12.0;
      else if (p0.x == 1.0) b = 4.0;
      else if (p0.x == 2.0) b = 14.0;
      else b = 6.0;
    } else if (p0.y == 2.0) {
      if (p0.x == 0.0) b = 3.0;
      else if (p0.x == 1.0) b = 11.0;
      else if (p0.x == 2.0) b = 1.0;
      else b = 9.0;
    } else {
      if (p0.x == 0.0) b = 15.0;
      else if (p0.x == 1.0) b = 7.0;
      else if (p0.x == 2.0) b = 13.0;
      else b = 5.0;
    }
    return b / 16.0;
  }

  void main() {
    vec2 pUv = floor(vUv * (uResolution / uPixelSize)) / (uResolution / uPixelSize);
    vec4 texColor = texture2D(uImage, pUv);
    float gray = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
    vec2 pxCoord = floor(vUv * uResolution / uPixelSize);
    gray = clamp((gray - 0.5) * 1.5 + 0.5, 0.0, 1.0);
    float threshold = bayer4x4(pxCoord);
    float finalValue = step(threshold + 0.001, gray);
    vec3 finalColor = mix(uColorDark, uColorLight, finalValue);
    if (texColor.a < 0.5) {
      discard;
    }
    gl_FragColor = vec4(finalColor, texColor.a);
  }
`

// ─── Renderer Init (lazy, once) ──────────────────────────────────────────────

function initRenderer(): DitherRenderer | null {
  if (renderer) return renderer

  const offscreen = document.createElement('canvas')
  const gl = offscreen.getContext('webgl', { preserveDrawingBuffer: true })
    || offscreen.getContext('experimental-webgl', { preserveDrawingBuffer: true })

  if (!gl) {
    console.error('[DitherRenderer] WebGL not supported')
    return null
  }

  function createShader(type: number, source: string): WebGLShader | null {
    const shader = gl!.createShader(type)
    if (!shader) return null
    gl!.shaderSource(shader, source)
    gl!.compileShader(shader)
    if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
      console.error(gl!.getShaderInfoLog(shader))
      gl!.deleteShader(shader)
      return null
    }
    return shader
  }

  const vs = createShader(gl.VERTEX_SHADER, VERTEX_SHADER)
  const fs = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
  if (!vs || !fs) return null

  const program = gl.createProgram()!
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program))
    return null
  }

  gl.useProgram(program)

  // Quad geometry (set once, reused for every render)
  const positions = new Float32Array([
    -1, -1,  1, -1,  -1, 1,
    -1,  1,  1, -1,   1, 1,
  ])
  const uvs = new Float32Array([
    0, 1,  1, 1,  0, 0,
    0, 0,  1, 1,  1, 0,
  ])

  const posBuf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuf)
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)
  const aPos = gl.getAttribLocation(program, 'aPosition')
  gl.enableVertexAttribArray(aPos)
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

  const uvBuf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf)
  gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW)
  const aUv = gl.getAttribLocation(program, 'aUv')
  gl.enableVertexAttribArray(aUv)
  gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, 0, 0)

  const uniforms = {
    uResolution: gl.getUniformLocation(program, 'uResolution')!,
    uPixelSize: gl.getUniformLocation(program, 'uPixelSize')!,
    uColorDark: gl.getUniformLocation(program, 'uColorDark')!,
    uColorLight: gl.getUniformLocation(program, 'uColorLight')!,
    uImage: gl.getUniformLocation(program, 'uImage')!,
  }

  renderer = { gl: gl as WebGLRenderingContext, program, offscreen, uniforms }
  return renderer
}

// ─── Process a single job ────────────────────────────────────────────────────

function processJob(job: DitherJob): void {
  const r = initRenderer()
  if (!r) {
    job.reject(new Error('WebGL init failed'))
    return
  }

  const { gl, offscreen, uniforms } = r
  const { img, targetCanvas, colorDark, colorLight, pixelSize } = job

  // Cap dimensions for mobile GPU memory
  let w = img.width
  let h = img.height
  const maxDim = 800 // lower cap for mobile perf
  if (w > maxDim || h > maxDim) {
    const ratio = Math.min(maxDim / w, maxDim / h)
    w = Math.floor(w * ratio)
    h = Math.floor(h * ratio)
  }

  // Resize offscreen canvas
  offscreen.width = w
  offscreen.height = h
  gl.viewport(0, 0, w, h)

  // Set per-image uniforms
  gl.uniform2f(uniforms.uResolution, w, h)
  gl.uniform1f(uniforms.uPixelSize, pixelSize)

  const cDark = hexToRgb(colorDark)
  const cLight = hexToRgb(colorLight)
  gl.uniform3f(uniforms.uColorDark, cDark[0], cDark[1], cDark[2])
  gl.uniform3f(uniforms.uColorLight, cLight[0], cLight[1], cLight[2])

  // Upload texture
  const texture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)

  gl.activeTexture(gl.TEXTURE0)
  gl.uniform1i(uniforms.uImage, 0)

  // Render
  gl.drawArrays(gl.TRIANGLES, 0, 6)

  // Copy result to the component's visible 2D canvas
  targetCanvas.width = w
  targetCanvas.height = h
  const ctx = targetCanvas.getContext('2d')
  if (ctx) {
    ctx.drawImage(offscreen, 0, 0)
  }

  // Cleanup the texture (the program/context persists for reuse)
  gl.deleteTexture(texture)

  job.resolve()
}

// ─── Queue Drain ─────────────────────────────────────────────────────────────

async function drainQueue(): Promise<void> {
  if (processing) return
  processing = true

  while (queue.length > 0) {
    const job = queue.shift()!
    try {
      processJob(job)
    } catch (err) {
      job.reject(err instanceof Error ? err : new Error(String(err)))
    }
    // Yield to the browser between jobs to prevent jank
    await new Promise<void>((r) => requestAnimationFrame(() => r()))
  }

  processing = false
}

// ─── Public API ──────────────────────────────────────────────────────────────

export function enqueueDither(
  img: HTMLImageElement,
  targetCanvas: HTMLCanvasElement,
  colorDark: string,
  colorLight: string,
  pixelSize: number
): Promise<void> {
  return new Promise((resolve, reject) => {
    queue.push({ img, targetCanvas, colorDark, colorLight, pixelSize, resolve, reject })
    drainQueue()
  })
}
