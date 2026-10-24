<script setup lang="ts">
/** 404 and unexpected errors, inside the normal site shell so navigation still works. */
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const notFound = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: () => (notFound.value ? 'Page not found' : 'Something went wrong'),
  robots: 'noindex',
})
</script>

<template>
  <NuxtLayout>
    <PageIntro
      :title="notFound ? 'Nothing here.' : 'Something broke.'"
      :crumbs="[`Error ${error.statusCode}`]"
      :lead="notFound
        ? 'This page doesn\'t exist, or it moved when we rebuilt the site. Everything we make is one click away.'
        : 'An unexpected error stopped this page from loading. Please try again in a moment.'"
    >
      <AppButton @click="clearError({ redirect: '/' })">Back to home</AppButton>
      <AppButton variant="outline" @click="clearError({ redirect: '/products' })">See our products</AppButton>
    </PageIntro>
    <AppContainer class="art">
      <DitherImage name="not-found" alt="Figures peering down into a dark pit" priority />
    </AppContainer>
  </NuxtLayout>
</template>

<style scoped>
.art {
  max-width: 28rem;
  padding-bottom: var(--space-16);
}
</style>
