<template>
  <div class="dither-container" ref="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  // Default to our dark color
  colorDark: {
    type: String,
    default: '#151515'
  },
  // Default to our light color
  colorLight: {
    type: String,
    default: '#c4b5e3'
  },
  // Scale of the "pixels" (e.g. 3.0 makes it 3x chunkier)
  pixelSize: {
    type: Number,
    default: 3.0
  }
})

const container = ref(null)
const canvas = ref(null)

// Helper to convert hex to RGB 0-1
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255
  ] : [0, 0, 0];
}

onMounted(() => {
  const gl = canvas.value.getContext('webgl') || canvas.value.getContext('experimental-webgl')
  if (!gl) {
    console.error('WebGL not supported')
    return
  }

  // Vertex Shader
  const vsSource = `
    attribute vec2 aPosition;
    attribute vec2 aUv;
    varying vec2 vUv;
    void main() {
      vUv = aUv;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `

  // Fragment Shader for Bayer 4x4 Dithering
  const fsSource = `
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
        // Chunk UV for blocky image sampling
        vec2 pUv = floor(vUv * (uResolution / uPixelSize)) / (uResolution / uPixelSize);
        vec4 texColor = texture2D(uImage, pUv);
        
        // Convert to grayscale using luminance weights
        float gray = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
        
        // Pixel coordinates scaled down for the bayer matrix
        vec2 pxCoord = floor(vUv * uResolution / uPixelSize);
        
        // Apply some contrast boost
        gray = clamp((gray - 0.5) * 1.5 + 0.5, 0.0, 1.0);
        
        float threshold = bayer4x4(pxCoord);
        
        // Add a tiny offset so step(0, 0) evaluates to 0 instead of 1
        float finalValue = step(threshold + 0.001, gray);
        vec3 finalColor = mix(uColorDark, uColorLight, finalValue);
        
        // If pixel is transparent, discard it entirely
        if (texColor.a < 0.5) {
            discard;
        }
        
        gl_FragColor = vec4(finalColor, texColor.a);
    }
  `

  function createShader(type, source) {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader))
      gl.deleteShader(shader)
      return null
    }
    return shader
  }

  const vertexShader = createShader(gl.VERTEX_SHADER, vsSource)
  const fragmentShader = createShader(gl.FRAGMENT_SHADER, fsSource)

  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program))
    return
  }

  gl.useProgram(program)

  // Quad geometry
  const positions = new Float32Array([
    -1.0, -1.0,
     1.0, -1.0,
    -1.0,  1.0,
    -1.0,  1.0,
     1.0, -1.0,
     1.0,  1.0,
  ])
  const uvs = new Float32Array([
    0.0, 1.0,
    1.0, 1.0,
    0.0, 0.0,
    0.0, 0.0,
    1.0, 1.0,
    1.0, 0.0,
  ])

  const posBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)
  const aPosition = gl.getAttribLocation(program, 'aPosition')
  gl.enableVertexAttribArray(aPosition)
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)

  const uvBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW)
  const aUv = gl.getAttribLocation(program, 'aUv')
  gl.enableVertexAttribArray(aUv)
  gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, 0, 0)

  const uResolution = gl.getUniformLocation(program, 'uResolution')
  const uPixelSize = gl.getUniformLocation(program, 'uPixelSize')
  const uColorDark = gl.getUniformLocation(program, 'uColorDark')
  const uColorLight = gl.getUniformLocation(program, 'uColorLight')
  const uImage = gl.getUniformLocation(program, 'uImage')

  // Set colors
  const cDark = hexToRgb(props.colorDark)
  const cLight = hexToRgb(props.colorLight)
  gl.uniform3f(uColorDark, cDark[0], cDark[1], cDark[2])
  gl.uniform3f(uColorLight, cLight[0], cLight[1], cLight[2])

  // Load Image
  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = props.src
  img.onload = () => {
    // Render at intrinsic size (capped for performance)
    let w = img.width
    let h = img.height
    const maxDim = 1200
    if (w > maxDim || h > maxDim) {
      const ratio = Math.min(maxDim / w, maxDim / h)
      w = Math.floor(w * ratio)
      h = Math.floor(h * ratio)
    }
    
    canvas.value.width = w
    canvas.value.height = h
    gl.viewport(0, 0, w, h)
    gl.uniform2f(uResolution, w, h)
    gl.uniform1f(uPixelSize, props.pixelSize)

    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
    
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)
    
    gl.activeTexture(gl.TEXTURE0)
    gl.uniform1i(uImage, 0)
    
    gl.drawArrays(gl.TRIANGLES, 0, 6)
  }
})
</script>

<style scoped>
.dither-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
canvas {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
