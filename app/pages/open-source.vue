<script setup lang="ts">
const { data: products, error, refresh } = await useProducts()
const projects = computed(() => products.value.filter(product => product.status === 'open-source'))

usePageSeo({
  title: 'Open source',
  description: 'Tools taohq built for its own products and shares with the community, free to use, read and improve. Including opendraw, hand-drawn diagrams for Vue, Nuxt, React and Svelte, and web-have-sounds, zero-dependency UI sounds for the web.',
  schemaType: 'CollectionPage',
})
</script>

<template>
  <div>
    <PageIntro
      title="Open source"
      :crumbs="['Open source']"
      :count="error ? undefined : `${String(projects.length).padStart(2, '0')} ${projects.length === 1 ? 'project' : 'projects'}`"
      lead="Some of what we build along the way, we give back. Free for anyone to use, read and improve."
    />

    <AppContainer v-if="error">
      <LoadError what="projects" @retry="refresh()" />
    </AppContainer>

    <EditorialRow
      v-for="(project, index) in projects"
      :key="project.path"
      :label="project.title"
      :index="String(index + 1).padStart(2, '0')"
    >
      <div class="project">
        <NuxtLink :to="project.path" class="project__name">{{ project.title }}</NuxtLink>
        <p class="project__tagline">{{ project.tagline }}</p>
        <p class="project__description">{{ project.description }}</p>
        <CopyCommand v-if="project.install" class="project__install" :command="project.install" />
        <ProductActions :product="project" :show-details="true" />
      </div>
    </EditorialRow>

    <EditorialRow label="Contribute" :index="String(projects.length + 1).padStart(2, '0')">
      <p class="note">
        Issues and pull requests are welcome on each project's GitHub. If you build something with one of them, we'd love to see it.
      </p>
    </EditorialRow>
  </div>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
}

.project__name {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  line-height: 1;
  transition: color var(--dur-hover) var(--ease-out);
}

.project__name:hover {
  color: var(--accent);
}

.project__tagline {
  font-family: var(--font-accent);
  font-style: italic;
  font-size: 1.5rem;
  line-height: 1.2;
  color: var(--accent);
}

.project__description,
.note {
  max-width: 36rem;
  font-size: var(--text-small);
  line-height: 1.8;
  color: var(--text-secondary);
}

.project__install {
  width: 100%;
  max-width: 30rem;
}
</style>
