<template>
  <main class="page-container">
    
    <!-- Section 1 -->
    <BrutalistCard inverted dashed class="section-1">
      <div class="watermark-bg">CAVIX</div>
      <div class="top-text">
        <p class="small-caps">Every pixel tells a story.<br/>/////////////////////////</p>
      </div>
      <div class="center-content">
        <h1 class="logo-text-huge">CAVIX</h1>
      </div>
      <div class="bottom-text">
        <p class="small-caps">Every pixel tells a story.<br/>/////////////////////////</p>
      </div>
    </BrutalistCard>

    <!-- Section 2 -->
    <BrutalistCard dashed class="section-2">
      <div class="split-layout align-center">
        <div class="left-col blocky-shape"></div>
        <div class="right-col stats-box-container">
          <div class="stats-box">
            <div class="stats-header">
              <span>ON</span>
              <span class="highlight">CREATIVE PLAYGROUND</span>
              <span>@DN25</span>
            </div>
            <p class="ascii-text">
              //TOOLS<br/>
              BLENDER          xxxx<br/>
              ADOBE ILLUSTRATORxxxx<br/>
              ADOBE PHOTOSHOP  xxxx<br/>
              CUSTOM ASCII CODE
            </p>
            <div class="stats-footer">
              <span>CREATED WITH PASSION</span>
              <span>©2026</span>
            </div>
            <div class="dither-label mt-4">
              <span class="highlight-dark">DITHER X ASCII<br/>///</span>
            </div>
            <p class="bucket-seats">BUCKET SEATS</p>
          </div>
        </div>
      </div>
    </BrutalistCard>

    <!-- Section 3 -->
    <BrutalistCard inverted dashed class="section-3">
      <div class="split-layout align-center">
        <div class="left-col flex-center">
          <div class="huge-date-box">
            <h2 class="huge-date">20<br/>26</h2>
          </div>
        </div>
        <div class="right-col info-content">
          <h3>CAVIX</h3>
          <p class="body-text">
            At CAVIX, we design and develop immersive gaming experiences that bring ideas to life. Our team focuses on creative gameplay, engaging worlds, and innovative design to build games that players truly enjoy. From early concepts to polished releases, we combine creativity, technology, and passion to craft interactive worlds where imagination becomes playable.
          </p>
          <p class="hr-line">////////////////////////////////////////</p>
        </div>
      </div>
    </BrutalistCard>

    <!-- Section 4 (Projects) -->
    <BrutalistCard dashed class="section-4" padding="0">
      <div class="horizontal-scroll-container">
        <div class="scroll-wrapper">
          <div class="scroll-item">
            <DitherImage src="https://picsum.photos/600/900?random=1" />
          </div>
          <div class="scroll-item">
            <DitherImage src="https://picsum.photos/600/900?random=2" />
          </div>
          <div class="scroll-item">
            <DitherImage src="https://picsum.photos/600/900?random=3" />
          </div>
          <div class="scroll-item">
            <DitherImage src="https://picsum.photos/600/900?random=4" />
          </div>
          <div class="scroll-item">
            <DitherImage src="https://picsum.photos/600/900?random=5" />
          </div>
        </div>
      </div>
      <div class="bottom-slashes">
        <p class="hr-line text-right">/////////////////////////</p>
      </div>
    </BrutalistCard>

    <!-- Section 5 -->
    <BrutalistCard inverted dashed class="section-5">
      <div class="split-layout align-center relative-container">
        
        <div class="studio-info z-10">
          <div class="striped-graphic"></div>
          <div class="status-info">
            <p>STUDIO ID: CAVIX-01</p>
            <p>DIVISION: CREATIVE DEV'T</p>
            <p>STATUS: ACTIVE</p>
            <p>CLEARANCE: INTERNAL</p>
            <p>ROLE: GAME DESIGN & WORLD BUILDING</p>
            <p>LOCATION: DIGITAL REALMS</p>
          </div>
          <p class="hr-line mt-4">////////////////////////////////////////</p>
        </div>

        <div class="center-graphic absolute-center">
          <div class="skull-shape">
            <DitherImage src="https://images.unsplash.com/photo-1620336655055-088d06e36bf0?auto=format&fit=crop&q=80&w=600" />
          </div>
        </div>

      </div>
    </BrutalistCard>

    <!-- Section 6 -->
    <BrutalistCard dashed class="section-6">
      <div class="full-height-flex">
        <div class="top-line">
          <p class="hr-line">////////////////////////////////////////////////////////////////////////////////</p>
          <p class="small-caps text-center mt-2">Every pixel tells a story.</p>
        </div>
        
        <div class="center-banner">
          <div class="banner-inner">
            <div class="logo-icon"></div>
            <h1 class="logo-text-large">CAVIX</h1>
          </div>
        </div>
        
        <div class="bottom-line">
          <p class="text-right small-caps">Create. Play. Repeat.</p>
          <p class="hr-line text-right">////////////////////////////////////////////////////////////////////////////////</p>
        </div>
      </div>
    </BrutalistCard>

  </main>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  background-color: var(--fg-color);
}

/* Typography Utilities */
.small-caps {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.hr-line {
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 2px;
  font-size: 1rem;
}
.mt-2 { margin-top: 0.5rem; }
.mt-4 { margin-top: 1.5rem; }
.text-center { text-align: center; }
.text-right { text-align: right; }

.split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  height: 100%;
}
.align-center {
  align-items: center;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.relative-container {
  position: relative;
  height: 100%;
}
.z-10 { z-index: 10; }

/* Section 1 */
.section-1 {
  position: relative;
}
.watermark-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25vw;
  font-weight: bold;
  color: rgba(21, 21, 21, 0.05); /* very faint */
  z-index: 0;
  pointer-events: none;
}
.brutalist-section.inverted .watermark-bg {
  color: rgba(196, 181, 227, 0.05);
}
.top-text {
  position: absolute;
  top: 4rem;
  right: 4rem;
  text-align: right;
  z-index: 1;
}
.bottom-text {
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  z-index: 1;
}
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  z-index: 2;
}
.logo-text-huge {
  font-size: 18vw;
  margin: 0;
  letter-spacing: -10px;
  line-height: 1;
}

/* Section 2 */
.blocky-shape {
  width: 100%;
  height: 60vh;
  background-color: #8B7355; /* A muddy color like in the reference */
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 40% 100%, 40% 80%, 0 80%, 0 20%, 40% 20%);
}
.stats-box-container {
  display: flex;
  justify-content: center;
}
.stats-box {
  border: 2px solid var(--fg-color);
  padding: 1.5rem;
  width: 100%;
  max-width: 450px;
}
.stats-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--fg-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
.highlight {
  background-color: var(--fg-color);
  color: var(--bg-color);
  padding: 0 0.5rem;
}
.highlight-dark {
  background-color: #8B7355;
  color: var(--bg-color);
  padding: 0.5rem;
  display: inline-block;
}
.ascii-text {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}
.stats-footer {
  display: flex;
  justify-content: space-between;
  border-top: 2px dashed var(--fg-color);
  padding-top: 0.5rem;
  font-size: 1rem;
}
.bucket-seats {
  margin-top: 1.5rem;
  font-size: 1.2rem;
}

/* Section 3 */
.huge-date-box {
  background-color: var(--fg-color);
  color: var(--bg-color);
  padding: 4rem;
}
.huge-date {
  font-size: 12vw;
  line-height: 0.8;
  margin: 0;
}
.info-content h3 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.body-text {
  font-size: 1.4rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  max-width: 80%;
}

/* Section 4 */
.horizontal-scroll-container {
  width: 100%;
  flex-grow: 1;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 2rem 0;
  /* hide scrollbar for sleekness */
  scrollbar-width: none; /* Firefox */
}
.horizontal-scroll-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.scroll-wrapper {
  display: flex;
  height: 70vh;
  gap: 2rem;
  width: max-content;
  padding: 0 4rem;
}
.scroll-item {
  height: 100%;
  aspect-ratio: 10/16;
  flex-shrink: 0;
  /* Add border since the container is borderless inside */
  border: 2px solid var(--bg-color);
}
.brutalist-section:not(.inverted) .scroll-item {
  border-color: var(--fg-color);
}
.bottom-slashes {
  padding: 1rem 4rem 2rem 4rem;
}

/* Section 5 */
.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.skull-shape {
  width: 40vw;
  height: 50vw;
  border: 4px solid var(--bg-color);
  padding: 1rem;
  /* creating a cut-out border effect */
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
}
.studio-info {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.striped-graphic {
  width: 100px;
  height: 150px;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 4px,
    var(--bg-color) 4px,
    var(--bg-color) 8px
  );
}
.status-info p {
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.6;
}

/* Section 6 */
.full-height-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.center-banner {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-inner {
  display: flex;
  align-items: center;
  background-color: var(--fg-color);
  color: var(--bg-color);
  padding: 2rem 4rem;
  width: 100%;
  border-top: 4px solid var(--fg-color);
  border-bottom: 4px solid var(--fg-color);
}
.logo-icon {
  width: 100px;
  height: 100px;
  background-color: var(--bg-color);
  margin-right: 4rem;
  clip-path: polygon(0 0, 100% 0, 100% 40%, 60% 40%, 60% 100%, 0 100%);
}
.logo-text-large {
  font-size: 12vw;
  margin: 0;
  letter-spacing: -5px;
}

@media (max-width: 1024px) {
  .split-layout {
    grid-template-columns: 1fr;
  }
  .image-gallery {
    grid-template-columns: 1fr;
  }
  .relative-container {
    display: flex;
    flex-direction: column;
  }
  .absolute-center {
    position: relative;
    transform: none;
    top: auto;
    left: auto;
    margin-top: 2rem;
  }
}
</style>
