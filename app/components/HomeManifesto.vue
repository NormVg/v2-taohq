<template>
  <BrutalistCard inverted dashed class="section-3">
    <div class="split-layout align-center">
      <div class="left-col flex-center">
        <div class="huge-date-box">
          <h2 class="huge-date">20<br/>26</h2>
        </div>
      </div>
      <div class="right-col info-content">
        <h3>THE ALPHA ONES</h3>
        <p class="body-text">
          We build durable tools. No hype, no gamification, no endless scaling. Just software that respects your attention, works quietly, and is engineered to outlive its creators. From minimalist file managers to immutable ledgers, we design constrained systems for deep work.
        </p>
        <AnimatedSlashes :count="40" class="mt-4" />
      </div>
    </div>
  </BrutalistCard>
</template>

<style scoped>
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
</style>
