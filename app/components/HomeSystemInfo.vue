<template>
  <BrutalistCard inverted dashed class="system-section">
    <div class="split-layout align-center">
      
      <!-- Left Column: Technical Readout -->
      <div class="data-column">
        <div class="system-header">
          <h2 class="header-title">SYSTEM_CORE</h2>
          <AnimatedSlashes :count="20" class="header-slashes" />
        </div>
        
        <div class="data-grid">
          <div class="data-row">
            <span class="label">ID_LABEL</span>
            <span class="value">TAO-01</span>
          </div>
          <div class="data-row">
            <span class="label">DIVISION</span>
            <span class="value">ENGINEERING</span>
          </div>
          <div class="data-row">
            <span class="label">STATUS</span>
            <span class="value highlight-status">[ ACTIVE ]</span>
          </div>
          <div class="data-row">
            <span class="label">CLEARANCE</span>
            <span class="value">PUBLIC</span>
          </div>
          <div class="data-row">
            <span class="label">ROLE</span>
            <span class="value">SOFTWARE ARCHITECTURE</span>
          </div>
          <div class="data-row">
            <span class="label">LOCATION</span>
            <span class="value">GLOBAL GRID</span>
          </div>
        </div>

        <div class="terminal-block mt-4">
          <p>> INITIALIZING DURABLE PROTOCOLS...</p>
          <p>> ESTABLISHING CONSTRAINT PARAMETERS...</p>
          <p class="blink">> AWAITING INPUT_</p>
        </div>
      </div>

      <!-- Right Column: Visual -->
      <div class="visual-column">
        <div class="framed-image">
          <div class="corner-bracket top-left"></div>
          <div class="corner-bracket top-right"></div>
          <div class="corner-bracket bottom-left"></div>
          <div class="corner-bracket bottom-right"></div>
          <DitherImage src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" />
        </div>
      </div>

    </div>
  </BrutalistCard>
</template>

<style scoped>
.system-section {
  padding: 4rem 0;
}

/* Left Column Styles */
.data-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.system-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 4px solid var(--bg-color);
  padding-bottom: 1rem;
}

.header-title {
  font-size: 2.5rem;
  margin: 0;
  line-height: 1;
}

.header-slashes {
  flex-grow: 1;
  font-size: 1.5rem;
}

.data-grid {
  display: flex;
  flex-direction: column;
  border: 2px solid var(--bg-color);
  background-color: rgba(196, 181, 227, 0.05);
}

.data-row {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 2px solid var(--bg-color);
  font-size: 1.2rem;
}

.data-row:last-child {
  border-bottom: none;
}

.label {
  opacity: 0.7;
}

.value {
  font-weight: bold;
  text-align: right;
}

.highlight-status {
  background-color: var(--bg-color);
  color: var(--fg-color);
  padding: 0 0.5rem;
}

.terminal-block {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  line-height: 1.5;
  opacity: 0.8;
}

.blink {
  animation: blinker 1s step-start infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

/* Right Column Styles */
.visual-column {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.framed-image {
  position: relative;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 4/3;
  padding: 1.5rem;
  border: 2px dashed var(--bg-color);
}

/* Decorative Brutalist Brackets */
.corner-bracket {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 6px solid var(--bg-color);
  z-index: 10;
}

.top-left {
  top: -2px;
  left: -2px;
  border-right: none;
  border-bottom: none;
}

.top-right {
  top: -2px;
  right: -2px;
  border-left: none;
  border-bottom: none;
}

.bottom-left {
  bottom: -2px;
  left: -2px;
  border-right: none;
  border-top: none;
}

.bottom-right {
  bottom: -2px;
  right: -2px;
  border-left: none;
  border-top: none;
}

/* Ensure DitherImage fits within the frame */
:deep(.dither-image) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 1024px) {
  .system-section {
    padding: 2rem 0;
  }
  .visual-column {
    margin-top: 2rem;
  }
}
</style>
