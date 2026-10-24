<script setup lang="ts">
import { MOTION_RULES, PALETTE, TYPEFACES } from '~/constants/design'

usePageSeo({
  title: 'Design',
  description: 'The taohq visual language: ink and lavender, pixel type, dithered art that develops, and motion that moves in segments.',
  schemaType: 'WebPage',
})
</script>

<template>
  <div>
    <PageIntro
      title="Design"
      :crumbs="['Design']"
      lead="How taohq looks and moves. Two colours, three typefaces, dithered art, and a few rules we don't break."
    />

    <EditorialRow label="Colour" index="01">
      <PaletteSwatches :swatches="PALETTE" />
    </EditorialRow>

    <EditorialRow label="Type" index="02">
      <TypeSpecimens :faces="TYPEFACES" />
    </EditorialRow>

    <EditorialRow label="Dither" index="03">
      <div class="block">
        <p class="text">
          Every image on the site is printed in two tones with an ordered 4×4 Bayer dither, one file pixel per cell. Art never just appears: it develops through these passes, coarse to fine.
        </p>
        <DitherSteps name="fold" alt="A skeleton reading a book in a field of roses" />
      </div>
    </EditorialRow>

    <EditorialRow label="Motion" index="04">
      <ol class="rules" role="list">
        <li v-for="(rule, index) in MOTION_RULES" :key="rule.title" class="rule">
          <span class="rule__no">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3 class="rule__title">{{ rule.title }}</h3>
          <p class="rule__body">{{ rule.body }}</p>
        </li>
      </ol>
    </EditorialRow>

    <EditorialRow label="Buttons" index="05">
      <div class="block">
        <p class="text">Pixel corners over a dithered print. Hover lifts the face; pressing sinks it in.</p>
        <div class="buttons">
          <AppButton to="/products" icon="arrow-right">Primary</AppButton>
          <AppButton to="/products" variant="outline">Outline</AppButton>
          <AppButton to="/products" variant="ghost" icon="arrow-right">Ghost</AppButton>
        </div>
      </div>
    </EditorialRow>

    <EditorialRow label="Brand" index="06">
      <div class="block">
        <p class="text">Logo files, naming and usage rules live on their own page.</p>
        <AppLink to="/brand" icon="arrow-right">Brand assets</AppLink>
      </div>
    </EditorialRow>
  </div>
</template>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.text {
  max-width: 36rem;
  font-size: var(--text-small);
  line-height: 1.8;
  color: var(--text-secondary);
}

.rules {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: var(--space-8) var(--space-12);
}

.rule {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: var(--space-1) var(--space-3);
}

.rule__no {
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  line-height: 2.2;
  color: var(--accent);
}

.rule__title {
  font-size: 1.75rem;
}

.rule__body {
  grid-column: 2;
  font-size: var(--text-small);
  color: var(--text-secondary);
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-6);
}
</style>
