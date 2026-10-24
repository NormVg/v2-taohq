/**
 * Singleton WebGL dither renderer.
 *
 * One WebGL context is shared by every DitherImage on the page (mobile
 * browsers cap live contexts at ~8-16). Jobs are queued and drained one per
 * animation frame so rendering never blocks scrolling.
 *
 * A job uploads its image once and renders it at several pixel sizes,
 * returning one 2D canvas per size. DitherImage plays those frames coarse →
 * fine to "develop" the image as it enters the viewport.
 */

export interface DitherOptions {
  colorDark: string
  colorLight: string
  /** Pixel sizes to render, in order. The last one is the final image. */
  pixelSizes: number[]
  /** Make dark cells transparent, leaving a light-only cut-out. */
  knockout?: boolean
}

interface DitherJob {
  img: HTMLImageElement
  options: DitherOptions
  resolve: (frames: HTMLCanvasElement[]) => void
  reject: (error: Error) => void
}

interface Renderer {
  gl: WebGLRenderingContext
  canvas: HTMLCanvasElement
  uniforms: Record<'resolution' | 'pixelSize' | 'colorDark' | 'colorLight' | 'image' | 'knockout', WebGLUniformLocation | null>
}

/** GPU memory cap for mobile; dither cells are larger than this resolution anyway. */
const MAX_DIMENSION = 800

const VERTEX_SHADER = `
  attribute vec2 aPosition;
  attribute vec2 aUv;
  varying vec2 vUv;
  void main() {
    vUv = aUv;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`

// 4x4 Bayer ordered dither, two-tone.
const FRAGMENT_SHADER = `
  precision mediump float;
  varying vec2 vUv;
  uniform sampler2D uImage;
  uniform vec2 uResolution;
  uniform vec3 uColorDark;
  uniform vec3 uColorLight;
  uniform float uPixelSize;
  uniform float uKnockout;

  float bayer4x4(vec2 p) {
    vec2 q = floor(mod(p, 4.0));
    int i = int(q.x + q.y * 4.0);
    float m[16];
    m[0]=0.0; m[1]=8.0; m[2]=2.0; m[3]=10.0;
    m[4]=12.0; m[5]=4.0; m[6]=14.0; m[7]=6.0;
    m[8]=3.0; m[9]=11.0; m[10]=1.0; m[11]=9.0;
    m[12]=15.0; m[13]=7.0; m[14]=13.0; m[15]=5.0;
    for (int k = 0; k < 16; k++) { if (k == i) return m[k] / 16.0; }
    return 0.0;
  }

  void main() {
    vec2 cells = uResolution / uPixelSize;
    vec2 cell = floor(vUv * cells);
    vec4 tex = texture2D(uImage, cell / cells);
    if (tex.a < 0.5) discard;
    float gray = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    gray = clamp((gray - 0.5) * 1.5 + 0.5, 0.0, 1.0);
    float lit = step(bayer4x4(cell) + 0.001, gray);
    float alpha = tex.a * mix(1.0 - uKnockout, 1.0, lit);
    gl_FragColor = vec4(mix(uColorDark, uColorLight, lit) * alpha, alpha);
  }
`

let renderer: Renderer | null = null
const queue: DitherJob[] = []
let draining = false

function hexToRgb(hex: string): [number, number, number] {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim())
  if (!match) return [0, 0, 0]
  return [1, 2, 3].map(i => Number.parseInt(match[i]!, 16) / 255) as [number, number, number]
}

function compile(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type)
  if (!shader) throw new Error('Unable to create shader')
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader)
    gl.deleteShader(shader)
    throw new Error(`Shader compile failed: ${log}`)
  }
  return shader
}

function bindQuadAttribute(gl: WebGLRenderingContext, program: WebGLProgram, name: string, data: number[]) {
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
  const location = gl.getAttribLocation(program, name)
  gl.enableVertexAttribArray(location)
  gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0)
}

function getRenderer(): Renderer {
  if (renderer) return renderer

  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl', { preserveDrawingBuffer: true })
  if (!gl) throw new Error('WebGL is not available')

  const program = gl.createProgram()
  if (!program) throw new Error('Unable to create WebGL program')
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER))
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER))
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(`Program link failed: ${gl.getProgramInfoLog(program)}`)
  }
  gl.useProgram(program)

  bindQuadAttribute(gl, program, 'aPosition', [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1])
  bindQuadAttribute(gl, program, 'aUv', [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0])

  renderer = {
    gl,
    canvas,
    uniforms: {
      resolution: gl.getUniformLocation(program, 'uResolution'),
      pixelSize: gl.getUniformLocation(program, 'uPixelSize'),
      colorDark: gl.getUniformLocation(program, 'uColorDark'),
      colorLight: gl.getUniformLocation(program, 'uColorLight'),
      image: gl.getUniformLocation(program, 'uImage'),
      knockout: gl.getUniformLocation(program, 'uKnockout'),
    },
  }
  return renderer
}

function fitWithin(width: number, height: number): [number, number] {
  const ratio = Math.min(1, MAX_DIMENSION / Math.max(width, height))
  return [Math.round(width * ratio), Math.round(height * ratio)]
}

function render({ img, options }: DitherJob): HTMLCanvasElement[] {
  const { gl, canvas, uniforms } = getRenderer()
  const [width, height] = fitWithin(img.naturalWidth, img.naturalHeight)

  canvas.width = width
  canvas.height = height
  gl.viewport(0, 0, width, height)
  gl.uniform2f(uniforms.resolution, width, height)
  gl.uniform3f(uniforms.colorDark, ...hexToRgb(options.colorDark))
  gl.uniform3f(uniforms.colorLight, ...hexToRgb(options.colorLight))
  gl.uniform1f(uniforms.knockout, options.knockout ? 1 : 0)

  const texture = gl.createTexture()
  gl.activeTexture(gl.TEXTURE0)
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)
  gl.uniform1i(uniforms.image, 0)

  const frames = options.pixelSizes.map((pixelSize) => {
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.uniform1f(uniforms.pixelSize, pixelSize)
    gl.drawArrays(gl.TRIANGLES, 0, 6)

    const frame = document.createElement('canvas')
    frame.width = width
    frame.height = height
    frame.getContext('2d')?.drawImage(canvas, 0, 0)
    return frame
  })

  gl.deleteTexture(texture)
  return frames
}

async function drain() {
  if (draining) return
  draining = true
  while (queue.length) {
    const job = queue.shift()!
    try {
      job.resolve(render(job))
    }
    catch (error) {
      job.reject(error instanceof Error ? error : new Error(String(error)))
    }
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
  }
  draining = false
}

export function renderDitherFrames(img: HTMLImageElement, options: DitherOptions): Promise<HTMLCanvasElement[]> {
  return new Promise((resolve, reject) => {
    queue.push({ img, options, resolve, reject })
    void drain()
  })
}
