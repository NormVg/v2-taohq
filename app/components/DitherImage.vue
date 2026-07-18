<template>
  <div class="dither-container" ref="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { enqueueDither } from '~/utils/dither-renderer'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  colorDark: {
    type: String,
    default: '#151515'
  },
  colorLight: {
    type: String,
    default: '#c4b5e3'
  },
  pixelSize: {
    type: Number,
    default: 3.0
  }
})

const container = ref(null)
const canvas = ref(null)

onMounted(() => {
  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = props.src

  img.onload = () => {
    if (!canvas.value) return

    enqueueDither(
      img,
      canvas.value,
      props.colorDark,
      props.colorLight,
      props.pixelSize
    ).catch((err) => {
      console.error('[DitherImage] Render failed:', err)
    })
  }

  img.onerror = () => {
    console.error('[DitherImage] Failed to load image:', props.src)
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
