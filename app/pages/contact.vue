<script setup lang="ts">
import { CONTACT_TOPICS, SOCIAL_LINKS } from '~/constants/site'

usePageSeo({
  title: 'Contact',
  description: 'Get in touch with taohq: new projects, product support, privacy requests, or just to say hello.',
  schemaType: 'ContactPage',
})
</script>

<template>
  <div>
    <PageIntro
      title="Say hello."
      :crumbs="['Contact']"
      lead="No forms, no ticket numbers. One inbox, read by a real person, usually answered within a couple of days."
    />

    <EditorialRow label="Email" index="01">
      <EmailLink />
    </EditorialRow>

    <EditorialRow label="Write about" index="02">
      <ContactTopics :topics="CONTACT_TOPICS" />
    </EditorialRow>

    <EditorialRow label="Elsewhere" index="03">
      <ul class="social" role="list">
        <li v-for="link in SOCIAL_LINKS" :key="link.id">
          <AppLink :to="link.href">{{ link.label }} {{ link.handle }}</AppLink>
        </li>
      </ul>
    </EditorialRow>
  </div>
</template>

<style scoped>
.social {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
}
</style>
