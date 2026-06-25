<template>
  <FullScreenPage>
    <template #media>
      <video
        ref="videoRef"
        :src="videoSrc"
        autoplay
        loop
        muted
        playsinline
        webkit-playsinline
        preload="auto"
        @canplay="tryPlayVideo"
        @loadeddata="tryPlayVideo"
      />
    </template>

    <div class="home-text absolute top-[50%] left-[10%] pointer-events-none text-white transform-y-50%">
      <ColorfulText class="font-bold" :text="text" />
    </div>
    <div class="home-text absolute top-[50%] right-[10%] pointer-events-none text-white transform-y-50%">
       <ColorfulText class="font-bold" :text="text" />
    </div>

  </FullScreenPage>
</template>

<script setup>
import videoSrc from '~/assets/img/shipin.mp4'

definePageMeta({
  layout: 'default',
})

const videoRef = ref(null)
const text = ref('STREAM JASMINE')

function tryPlayVideo() {
  const video = videoRef.value
  if (!video) return

  video.play().catch(() => {})
}

onMounted(async () => {
  await nextTick()

  const video = videoRef.value
  if (!video) return

  tryPlayVideo()

  if (video.readyState < 2) {
    video.load()
  }
})
</script>

<style lang="scss" scoped>
</style>
