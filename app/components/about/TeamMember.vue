<script setup lang="ts">
/** One person: dithered portrait beside name, role, bio and links. */
import type { TeamMember } from '~/constants/about'

defineProps<{ member: TeamMember }>()
</script>

<template>
  <article class="member">
    <DitherImage class="member__photo" :name="member.photo" :alt="member.photoAlt" />
    <div class="member__text">
      <AppLabel>{{ member.role }}</AppLabel>
      <h3 class="member__name">{{ member.name }}</h3>
      <p class="member__bio">{{ member.bio }}</p>
      <ul class="member__links" role="list">
        <li v-for="link in member.links" :key="link.href">
          <AppLink :to="link.href">{{ link.label }}</AppLink>
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
.member {
  display: grid;
  gap: var(--space-6);
}

.member__photo {
  max-width: 14rem;
}

.member__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.member__name {
  font-size: var(--text-h2);
}

.member__bio {
  max-width: 32rem;
  font-size: var(--text-small);
  color: var(--text-secondary);
}

.member__links {
  display: flex;
  gap: var(--space-6);
  font-size: var(--text-small);
}

@media (min-width: 640px) {
  .member {
    grid-template-columns: 14rem 1fr;
    align-items: end;
    gap: var(--space-8);
  }
}
</style>
