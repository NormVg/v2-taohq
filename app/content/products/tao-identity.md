---
title: "TAO-IDENTITY"
description: "Zero-trust edge authentication middleware."
status: "ONLINE"
---

## ARCHITECTURE
TAO-IDENTITY is a managed edge identity provider deployed across Cloudflare Workers. It intercepts requests globally, validating JWTs within milliseconds before they ever reach our origin servers.

## PHILOSOPHY
Authentication should not be a product feature; it is an infrastructure guarantee. By pushing identity verification to the edge, we ensure that our origin servers never waste compute cycles validating untrusted requests.

## INTEGRATION
```typescript
import { verifyRequest } from '@taohq/identity'

export default defineEventHandler(async (event) => {
  const session = await verifyRequest(event)
  if (!session) throw createError({ statusCode: 401 })
  
  return { data: 'SECURED_PAYLOAD' }
})
```
