<script setup lang="ts">
import { TERMS_OF_USE } from '~/constants/legal/terms'

usePageSeo({
  title: TERMS_OF_USE.title,
  description: TERMS_OF_USE.summary,
})
</script>

<template>
  <LegalDocumentView :document="TERMS_OF_USE" />
</template>
