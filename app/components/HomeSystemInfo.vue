<template>
  <BrutalistCard inverted dashed class="system-section" padding="0">
    <!-- Massive Scrolling Manifesto Header -->
    <div class="marquee-header">
      <div class="marquee">
        <span class="m-text">"WE BELIEVE SOFTWARE SHOULD FEEL UNDERSTANDABLE, DURABLE, AND CALM." /// </span>
        <span class="m-text">"WE BELIEVE SOFTWARE SHOULD FEEL UNDERSTANDABLE, DURABLE, AND CALM." /// </span>
        <span class="m-text">"WE BELIEVE SOFTWARE SHOULD FEEL UNDERSTANDABLE, DURABLE, AND CALM." /// </span>
        <span class="m-text">"WE BELIEVE SOFTWARE SHOULD FEEL UNDERSTANDABLE, DURABLE, AND CALM." /// </span>
      </div>
    </div>

    <!-- Massive Interactive Directory -->
    <div class="directory-list">
      <a href="mailto:hello@taohq.org" class="dir-row group" v-sound.hover="'tick'">
        <div class="dir-bg-wipe"></div>
        <div class="hover-dither-bg">
          <DitherImage :src="img1" class="tiled-img align-center" />
        </div>
        <div class="dir-content">
          <div class="dir-col-left">
            <span class="dir-num">[01]</span>
            <span class="dir-title">E-MAIL TRANSMISSION</span>
          </div>
          <div class="dir-col-right">
            <span class="dir-value">HELLO@TAOHQ.ORG</span>
            <span class="dir-arrow">-></span>
          </div>
        </div>
      </a>

      <a href="https://x.com/TheNormVg" target="_blank" class="dir-row group" v-sound.hover="'tick'">
        <div class="dir-bg-wipe"></div>
        <div class="hover-dither-bg">
          <DitherImage :src="img2" class="tiled-img" />
        </div>
        <div class="dir-content">
          <div class="dir-col-left">
            <span class="dir-num">[02]</span>
            <span class="dir-title">GLOBAL BROADCAST (X)</span>
          </div>
          <div class="dir-col-right">
            <span class="dir-value">@THENORMVG</span>
            <span class="dir-arrow">-></span>
          </div>
        </div>
      </a>

      <a href="https://github.com/TheAlphaOnes/" target="_blank" class="dir-row group" v-sound.hover="'tick'">
        <div class="dir-bg-wipe"></div>
        <div class="hover-dither-bg">
          <DitherImage :src="img3" class="tiled-img" />
        </div>
        <div class="dir-content">
          <div class="dir-col-left">
            <span class="dir-num">[03]</span>
            <span class="dir-title">OPEN SOURCE REPOSITORY</span>
          </div>
          <div class="dir-col-right">
            <span class="dir-value">GITHUB.COM/THEALPHAONES</span>
            <span class="dir-arrow">-></span>
          </div>
        </div>
      </a>
    </div>
  </BrutalistCard>
</template>

<script setup>
import img1 from '~/assets/rose-demon.png'
import img2 from '~/assets/flower-skull.png'
import img3 from '~/assets/skull-book.png'
</script>

<style scoped>
/* Ensure root container has a flex layout */
.system-section {
  display: flex;
  flex-direction: column;
}

/* Marquee Header */
.marquee-header {
  border-bottom: 4px solid var(--bg-color);
  background-color: var(--bg-color);
  color: var(--fg-color);
  overflow: hidden;
  padding: 1.5rem 0;
}

.marquee {
  display: flex;
  white-space: nowrap;
  width: max-content;
  animation: scroll-left 15s linear infinite;
}

.m-text {
  display: inline-block;
  padding-right: 2rem;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  flex-shrink: 0;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Directory List */
.directory-list {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.dir-row {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  text-decoration: none;
  color: var(--bg-color);
  border-bottom: 4px solid var(--bg-color);
  overflow: hidden;
  cursor: crosshair;
}

.dir-row:last-child {
  border-bottom: none;
}

/* Aggressive brutalist hover wipe */
.dir-bg-wipe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-color);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
}

.hover-dither-bg {
  position: absolute;
  top: 50%;
  right: 0;
  width: 55%;
  height: 600px;
  margin-top: -300px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  transform: scale(0.98) translateY(20px);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 35%);
  mask-image: linear-gradient(to right, transparent 0%, black 35%);
}

.tiled-img {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.tiled-img :deep(canvas) {
  object-position: right center;
}

.tiled-img.align-center :deep(canvas) {
  object-position: center center;
}

.dir-row:hover .dir-bg-wipe {
  transform: scaleX(1);
  transform-origin: left;
}

.dir-row:hover .hover-dither-bg {
  opacity: 0.15;
  transform: scale(1) translateY(0);
}

.dir-content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 4rem 4rem 3.5rem 4rem;
  transition: all 0.3s ease;
}

.dir-row:hover .dir-content {
  color: var(--fg-color);
}

.dir-col-left {
  display: flex;
  align-items: baseline;
  gap: 2rem;
}

.dir-num {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  opacity: 0.7;
}

.dir-title {
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: -1px;
}

.dir-col-right {
  display: flex;
  align-items: baseline;
  gap: 2rem;
}

.dir-value {
  font-family: 'VT323', monospace;
  font-size: 2.5rem;
}

.dir-arrow {
  font-size: 3.5rem;
  font-family: 'VT323', monospace;
  font-weight: bold;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  line-height: 0.8;
}

.dir-row:hover .dir-arrow {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 1024px) {
  .dir-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 2rem;
  }
  .dir-title {
    font-size: 2rem;
  }
  .dir-value {
    font-size: 1.5rem;
  }
  .dir-arrow {
    display: none;
  }
}
</style>
