<script setup lang="ts">
import { PRIVACY_POLICY } from '~/constants/legal/privacy-policy'

usePageSeo({
  title: PRIVACY_POLICY.title,
  description: PRIVACY_POLICY.summary,
})
</script>

<template>
  <LegalDocumentView :document="PRIVACY_POLICY" />
</template>
