<script setup>
</script>

<template>
  <BrutalistCard inverted dashed class="section-1">
    <div class="watermark-bg">TheAlphaOnes</div>
    
    <div class="top-text">
      <p class="small-caps">Every pixel tells a story.</p>
      <AnimatedSlashes :count="25" right class="mt-2" />
    </div>
    <div class="center-content">
      <div class="hero-logo-container">
        <h1 class="italiano-font logo-main">TheAlphaOnes</h1>
      </div>
    </div>

    <div class="bottom-nav">
      <div class="nav-links-row">
        <NuxtLink to="/products" class="nav-link-brutal">PRODUCTS</NuxtLink>
        <span class="slash-separator">///</span>
        <NuxtLink to="/organization/about" class="nav-link-brutal">ORGANIZATION</NuxtLink>
        <span class="slash-separator">///</span>
        <NuxtLink to="/writing" class="nav-link-brutal">WRITING</NuxtLink>
        <span class="slash-separator">///</span>
        <NuxtLink to="/careers" class="nav-link-brutal">CAREERS</NuxtLink>
        <span class="slash-separator">///</span>
        <NuxtLink to="/contact" class="nav-link-brutal">CONTACT</NuxtLink>
      </div>
      <AnimatedSlashes :count="50" class="mt-2" />
    </div>
  </BrutalistCard>
</template>

<style scoped>
.section-1 {
  position: relative;
  overflow: hidden;
}
.watermark-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15vw;
  font-weight: bold;
  color: rgba(196, 181, 227, 0.05); /* var(--bg-color) inverted faint */
  z-index: 0;
  pointer-events: none;
  white-space: nowrap;
}
.top-text {
  position: absolute;
  top: 4rem;
  right: 4rem;
  text-align: right;
  z-index: 10;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  z-index: 2;
}
.hero-logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 2rem;
  z-index: 10;
}

.logo-main {
  font-size: 15vw;
  margin: 0;
  line-height: 0.8;
  font-weight: 400;
}


.bottom-nav {
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
}

.nav-links-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'VT323', monospace;
  font-size: 1rem;
  letter-spacing: 1px;
}

.nav-link-brutal {
  color: var(--bg-color);
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.nav-link-brutal:hover {
  opacity: 1;
}

.slash-separator {
  opacity: 0.5;
}
</style>
