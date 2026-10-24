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
      <AppButton :href="mailtoHref('New project')" icon="arrow-right">Start a project</AppButton>
    </PageIntro>

    <EditorialRow label="Services" index="01">
      <StudioServices :services="STUDIO_SERVICES" />
    </EditorialRow>

    <EditorialRow label="Capabilities" index="02">
      <ul class="capabilities" role="list">
        <li v-for="(capability, index) in STUDIO_CAPABILITIES" :key="capability" class="capability">
          <span class="capability__no">{{ String(index + 1).padStart(2, '0') }}</span>
          {{ capability }}
        </li>
      </ul>
    </EditorialRow>

    <EditorialRow label="Start" index="03">
      <div class="start">
        <p class="start__text">Tell us what you're building and your timeline. We reply within a couple of days.</p>
        <EmailLink subject="New project" />
        <AppButton :href="mailtoHref('New project')" size="lg" icon="arrow-right">Start a project</AppButton>
      </div>
    </EditorialRow>
  </div>
</template>

<style scoped>
.capabilities {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
  column-gap: var(--space-8);
  border-top: 1px solid var(--line);
}

.capability {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  padding-block: var(--space-3);
  border-bottom: 1px solid var(--line);
  font-family: var(--font-display);
  font-size: 1.5rem;
  line-height: 1.2;
}

.capability__no {
  font-family: var(--font-body);
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  color: var(--accent);
}

.start {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-6);
}

.start__text {
  font-size: var(--text-small);
  color: var(--text-secondary);
}
</style>
