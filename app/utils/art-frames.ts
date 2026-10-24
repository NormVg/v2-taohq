/**
 * Shared loader for dither frames: each frame URL is fetched and decoded once
 * per page, however many DitherImage instances (or hover replays) ask for it.
 */
const frameCache = new Map<string, Promise<void>>()

export function preloadFrame(src: string): Promise<void> {
  let pending = frameCache.get(src)
  if (!pending) {
    const image = new Image()
    image.src = src
    pending = image.decode()
    // A failed load shouldn't poison the cache: allow a retry next time.
    pending.catch(() => frameCache.delete(src))
    frameCache.set(src, pending)
  }
  return pending
}
