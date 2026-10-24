<script setup lang="ts">
import { CONTACT_CHANNELS, SOCIAL_LINKS } from '~/constants/site'

usePageSeo({
  title: 'Contact',
  description: 'Get in touch with taohq: general questions, studio projects, product support and privacy requests.',
})
</script>

<template>
  <div>
    <PageIntro
      title="Say hello."
      :crumbs="['Contact']"
      lead="No forms, no ticket numbers. Email the right inbox and a real person will reply, usually within a couple of days."
    />

    <EditorialRow
      v-for="(channel, index) in CONTACT_CHANNELS"
      :key="channel.id"
      :label="channel.label"
      :index="String(index + 1).padStart(2, '0')"
    >
      <div class="channel">
        <p class="channel__description">{{ channel.description }}</p>
        <EmailLink :email="channel.email" />
      </div>
    </EditorialRow>

    <EditorialRow label="Elsewhere" :index="String(CONTACT_CHANNELS.length + 1).padStart(2, '0')">
      <ul class="social" role="list">
        <li v-for="link in SOCIAL_LINKS" :key="link.id">
          <AppLink :to="link.href">{{ link.label }} {{ link.handle }}</AppLink>
        </li>
      </ul>
    </EditorialRow>
  </div>
</template>

<style scoped>
.channel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
}

.channel__description {
  font-size: var(--text-small);
  color: var(--text-secondary);
}

.social {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
}
</style>
