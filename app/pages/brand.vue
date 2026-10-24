<script setup lang="ts">
import { BRAND_ASSETS, BRAND_RULES } from '~/constants/brand'
import { PALETTE } from '~/constants/design'

usePageSeo({
  title: 'Brand assets',
  description: 'The taohq logo, colours and naming rules, with downloadable SVG files for press and partners.',
  schemaType: 'WebPage',
})
</script>

<template>
  <div>
    <PageIntro
      title="Brand assets"
      :crumbs="['Brand']"
      lead="Everything you need to write about or link to taohq: the mark, the colours, and a few simple rules."
    />

    <EditorialRow label="Mark" index="01">
      <div class="tiles">
        <MarkTile tone="ink" caption="Lavender on ink" />
        <MarkTile tone="lavender" caption="Ink on lavender" />
      </div>
    </EditorialRow>

    <EditorialRow label="Downloads" index="02">
      <ul class="downloads" role="list">
        <li v-for="asset in BRAND_ASSETS" :key="asset.href" class="download">
          <a v-sound :href="asset.href" :download="asset.href.split('/').pop()" class="download__link">
            <span class="download__label">{{ asset.label }}</span>
            <span class="download__description">{{ asset.description }}</span>
            <AppIcon name="arrow-right" :size="18" class="download__icon" />
          </a>
        </li>
      </ul>
    </EditorialRow>

    <EditorialRow label="Colour" index="03">
      <PaletteSwatches :swatches="PALETTE" />
    </EditorialRow>

    <EditorialRow label="Rules" index="04">
      <ol class="rules" role="list">
        <li v-for="(rule, index) in BRAND_RULES" :key="rule.title" class="rule">
          <span class="rule__no">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3 class="rule__title">{{ rule.title }}</h3>
          <p class="rule__body">{{ rule.body }}</p>
        </li>
      </ol>
    </EditorialRow>

    <EditorialRow label="Press" index="05">
      <div class="press">
        <p class="press__text">Writing about us, or need something that isn't here? Email us and we'll help.</p>
        <EmailLink subject="Press" />
      </div>
    </EditorialRow>
  </div>
</template>

<style scoped>
.tiles {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 18rem));
  gap: var(--space-3);
}

.downloads {
  border-top: 1px solid var(--line);
}

.download__link {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-1) var(--space-6);
  padding-block: var(--space-4);
  border-bottom: 1px solid var(--line);
}

.download__label {
  font-family: var(--font-display);
  font-size: 1.75rem;
  line-height: 1;
  transition: color var(--dur-hover) var(--ease-out);
}

.download__description {
  grid-column: 1;
  font-size: var(--text-small);
  color: var(--text-secondary);
}

.download__icon {
  grid-row: 1 / span 2;
  grid-column: 2;
  align-self: center;
  color: var(--accent);
  transform: rotate(90deg);
  transition: transform var(--dur-state) var(--ease-spring);
}

@media (hover: hover) {
  .download__link:hover .download__label {
    color: var(--accent);
  }

  .download__link:hover .download__icon {
    transform: rotate(90deg) translateX(3px);
  }
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

.press {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
}

.press__text {
  font-size: var(--text-small);
  color: var(--text-secondary);
}
</style>
