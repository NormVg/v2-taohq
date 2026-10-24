<script setup lang="ts">
import { PRINCIPLES, TEAM } from '~/constants/about'

const { data: products } = await useProducts()
const openSource = computed(() => products.value.filter(product => product.status === 'open-source'))

usePageSeo({
  title: 'About',
  description: 'taohq is an independent software studio building calm, durable software. What we believe, who we are, and what we share in the open.',
})
</script>

<template>
  <div>
    <PageIntro
      title="Software that stays useful."
      :crumbs="['About']"
      lead="taohq is an independent software studio. We design and build apps for everyday life, and we'd rather make a few things well than many things loudly."
    />

    <EditorialRow label="Why" index="01">
      <div class="why">
        <p class="why__text">
          Most software competes for your attention with notifications, complexity and growth tricks. We build the opposite: tools you can rely on every day, that do their job and get out of the way. Infrastructure before features. Longevity over trends.
        </p>
        <blockquote class="why__quote">
          <span class="why__line">The machine must be cold,</span>
          <span class="why__line">so the human can be warm.</span>
        </blockquote>
      </div>
    </EditorialRow>

    <EditorialRow label="Principles" index="02" sticky>
      <PrincipleList :principles="PRINCIPLES" />
    </EditorialRow>

    <EditorialRow label="Team" index="03">
      <TeamMember v-for="member in TEAM" :key="member.name" :member="member" />
    </EditorialRow>

    <EditorialRow v-if="openSource.length" label="Open source" index="04">
      <ul class="oss" role="list">
        <li v-for="product in openSource" :key="product.path" class="oss__item">
          <NuxtLink :to="product.path" class="oss__name">{{ product.title }}</NuxtLink>
          <p class="oss__description">{{ product.description }}</p>
          <ProductActions :product="product" :max="2" size="sm" />
        </li>
      </ul>
    </EditorialRow>
  </div>
</template>

<style scoped>
.why {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

.why__text {
  max-width: 40rem;
  font-size: var(--text-lead);
  line-height: 1.7;
}

.why__line {
  display: block;
}

.why__quote {
  font-family: var(--font-accent);
  font-style: italic;
  font-size: clamp(2rem, 1.6rem + 1.8vw, 3.25rem);
  line-height: 1;
  color: var(--accent);
}

.oss__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
}

.oss__name {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  line-height: 1;
}

.oss__name:hover {
  color: var(--accent);
}

.oss__description {
  max-width: 32rem;
  font-size: var(--text-small);
  color: var(--text-secondary);
}
</style>
