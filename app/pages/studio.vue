<script setup lang="ts">
import { STUDIO_CAPABILITIES, STUDIO_SERVICES } from '~/constants/studio'

usePageSeo({
  title: 'Studio',
  description: 'taohq builds for clients too: product design, full-stack apps and brand identity, with the same care we put into our own products.',
})
</script>

<template>
  <div>
    <PageIntro
      title="We build for you too."
      :crumbs="['Studio']"
      lead="The care we put into our own products, applied to yours. We design, engineer and ship end to end, from the first sketch to production."
    >
      <AppButton to="/contact">Start a project</AppButton>
    </PageIntro>

    <EditorialRow label="Services" index="01">
      <StudioServices :services="STUDIO_SERVICES" />
    </EditorialRow>

    <EditorialRow label="Capabilities" index="02">
      <ul class="capabilities" role="list">
        <li v-for="capability in STUDIO_CAPABILITIES" :key="capability">{{ capability }}</li>
      </ul>
    </EditorialRow>

    <EditorialRow label="Start" index="03">
      <div class="start">
        <p class="start__text">Tell us what you're building and your timeline. We reply within a couple of days.</p>
        <EmailLink email="vishnu@taohq.org" />
      </div>
    </EditorialRow>
  </div>
</template>

<style scoped>
.capabilities {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem), 1fr));
  gap: var(--space-2) var(--space-8);
  font-family: var(--font-display);
  font-size: 1.625rem;
  line-height: 1.3;
}

.start {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
}

.start__text {
  font-size: var(--text-small);
  color: var(--text-secondary);
}
</style>
