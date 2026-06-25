<template>
  <div
    class="layout-default relative w-full"
    :class="isMusic ? 'min-h-screen' : 'h-screen'"
  >
    <AppHeader
      class="fixed top-0 left-0 w-full z-[1000] pointer-events-auto"
      overlay
    />

    <main
      class="layout-main"
      :class="isMusic ? 'music-main' : 'fullscreen-main overflow-hidden'"
    >
      <NuxtPage />
    </main>

    <Teleport to="body">
      <AppFooter
        v-show="showLayoutFooter"
        fixed
        class="pointer-events-auto"
      />
    </Teleport>
  </div>
</template>

<script setup>
const route = useRoute()
const isMusic = computed(() => route.path.startsWith('/music'))
const showLayoutFooter = computed(() => !isMusic.value)

function setPageScrollLock(shouldLock) {
  if (!import.meta.client) return

  const method = shouldLock ? 'add' : 'remove'
  document.documentElement.classList[method]('page-no-scroll')
  document.body.classList[method]('page-no-scroll')
}

function resetScrollPosition() {
  if (!import.meta.client) return

  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

watch(
  () => route.path,
  (path) => {
    const musicPage = path.startsWith('/music')
    setPageScrollLock(!musicPage)

    if (!musicPage) {
      resetScrollPosition()
    }
  },
  { immediate: true },
)

onUnmounted(() => {
  setPageScrollLock(false)
})
</script>

<style lang="scss">
html.page-no-scroll,
body.page-no-scroll {
  overflow: hidden;
  height: 100%;
  overscroll-behavior: none;
  touch-action: none;
}
</style>
