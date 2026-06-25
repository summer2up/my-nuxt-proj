<template>
  <div class="music-page">
    <section
      v-for="(slide, index) in slides"
      :key="index"
      class="music-slide"
      :class="{ 'music-slide--last': isLastSlide(index) }"
    >
      <img
        v-if="slide.src"
        :src="slide.src"
        :alt="slide.alt"
        class="music-slide__img"
      >
      <div
        v-else
        class="music-slide__placeholder"
        :style="{ background: slide.gradient }"
      />
      <div class="music-slide__overlay" />

      <div
        v-if="isLastSlide(index)"
        class="music-slide__body"
      >
        <div
          v-if="slide.title"
          class="music-slide__title"
        >
          {{ slide.title }}
        </div>
        <AppFooter
          embedded
          class="music-slide__footer"
        />
      </div>

      <div
        v-else-if="slide.title"
        class="music-slide__title"
      >
        {{ slide.title }}
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default',
})

interface MusicSlide {
  alt: string
  title?: string
  src?: string
  gradient?: string
}

const slides: MusicSlide[] = [
  {
    alt: 'Music 1',
    title: 'Track One',
    gradient: 'linear-gradient(160deg, #0b0b0f 0%, #1a1a24 100%)',
  },
  {
    alt: 'Music 2',
    title: 'Track Two',
    gradient: 'linear-gradient(160deg, #16213e 0%, #0f3460 100%)',
  },
  {
    alt: 'Music 3',
    title: 'Track Three',
    gradient: 'linear-gradient(160deg, #1b262c 0%, #3282b8 100%)',
  },
]

const isLastSlide = (index: number) => index === slides.length - 1
</script>

<style lang="scss" scoped>
.music-page {
  width: 100%;
}

.music-slide {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.music-slide__img,
.music-slide__placeholder {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.music-slide__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  pointer-events: none;
  z-index: 1;
}

.music-slide__title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 600;
  letter-spacing: 0.08em;
  pointer-events: none;
  z-index: 2;
}

.music-slide--last {
  .music-slide__body {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .music-slide__title {
    position: static;
    transform: none;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .music-slide__footer {
    width: 100%;
    margin-top: auto;
  }
}
</style>
