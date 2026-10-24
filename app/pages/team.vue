<script setup lang="ts">
import { TEAM } from '~/constants/about'
import { SITE } from '~/constants/site'

// Explicit @id per person: without it the schema module treats a Person as
// the site's own identity and merges the two.
useSchemaOrg(TEAM.map(member => definePerson({
  '@id': `${SITE.url}/team#${member.name.toLowerCase()}`,
  name: member.name,
  jobTitle: member.role,
  description: member.bio,
  sameAs: member.links.map(link => link.href).filter(href => href.startsWith('http')),
})))

usePageSeo({
  title: 'Team',
  description: 'The people behind taohq: a small, independent team building calm, durable software.',
  schemaType: 'AboutPage',
})
</script>

<template>
  <div>
    <PageIntro
      title="Team"
      :crumbs="['Team']"
      :count="`${String(TEAM.length).padStart(2, '0')} ${TEAM.length === 1 ? 'person' : 'people'}`"
      lead="A small, independent team. Small on purpose: fewer people, fewer meetings, more care in every detail."
    />

    <EditorialRow
      v-for="(member, index) in TEAM"
      :key="member.name"
      :label="member.role"
      :index="String(index + 1).padStart(2, '0')"
    >
      <TeamMember :member="member" />
    </EditorialRow>

    <EditorialRow label="Join us" :index="String(TEAM.length + 1).padStart(2, '0')">
      <div class="join">
        <p class="join__text">We're not hiring right now, but we always read notes from people who care about well-made software.</p>
        <AppLink to="/careers" icon="arrow-right">Careers</AppLink>
      </div>
    </EditorialRow>
  </div>
</template>

<style scoped>
.join {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
}

.join__text {
  max-width: 36rem;
  font-size: var(--text-small);
  line-height: 1.8;
  color: var(--text-secondary);
}
</style>
