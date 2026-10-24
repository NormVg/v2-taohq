<script setup lang="ts">
import { DMCA_POLICY } from '~/constants/legal/dmca'

usePageSeo({
  title: DMCA_POLICY.title,
  description: DMCA_POLICY.summary,
})
</script>

<template>
  <LegalDocumentView :document="DMCA_POLICY" />
</template>
