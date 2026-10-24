<script setup lang="ts">
usePageSeo({
  title: 'Careers',
  description: 'Working at taohq. There are no open roles right now, but we always read notes from people who care about calm, well-made software.',
  schemaType: 'WebPage',
})
</script>

<template>
  <div>
    <PageIntro
      title="Careers"
      :crumbs="['Careers']"
      count="00 open roles"
      lead="We're a small, independent team and we grow slowly, on purpose. When we hire, the role will be listed here first."
    />

    <EditorialRow label="Open roles" index="01">
      <div class="empty">
        <p class="empty__title">Nothing open right now.</p>
        <p class="empty__text">
          We're not hiring at the moment. This page will change the day that does.
        </p>
      </div>
    </EditorialRow>

    <EditorialRow label="Say hello anyway" index="02">
      <div class="note">
        <p class="note__text">
          If you care about calm, durable software and want to work with us someday, send a short note and a link to something you've made. We read every one.
        </p>
        <EmailLink subject="Careers" />
      </div>
    </EditorialRow>

    <EditorialRow label="Meanwhile" index="03">
      <ul class="next" role="list">
        <li><AppLink to="/products" icon="arrow-right">See what we're building</AppLink></li>
        <li><AppLink to="/writing" icon="arrow-right">Read how we think</AppLink></li>
        <li><AppLink to="/about" icon="arrow-right">Our principles</AppLink></li>
      </ul>
    </EditorialRow>
  </div>
</template>

<style scoped>
.empty {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.empty__title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  line-height: 1;
}

.empty__text,
.note__text {
  max-width: 36rem;
  font-size: var(--text-small);
  line-height: 1.8;
  color: var(--text-secondary);
}

.note {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-6);
}

.next {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
</style>
