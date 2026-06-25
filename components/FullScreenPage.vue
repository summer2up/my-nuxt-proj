<template>
  <div class="fullscreen-page">
    <div class="fullscreen-page__media">
      <slot name="media">
        <div class="fullscreen-page__fallback" />
      </slot>
    </div>

    <div
      v-if="dimmed"
      class="fullscreen-page__overlay"
    />

    <div class="fullscreen-page__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  dimmed: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lang="scss" scoped>
.fullscreen-page {
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.fullscreen-page__media,
.fullscreen-page__fallback {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.fullscreen-page__fallback {
  background: linear-gradient(160deg, #0b0b0f 0%, #1a1a24 50%, #0f172a 100%);
}

.fullscreen-page__media :deep(video),
.fullscreen-page__media :deep(img) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.fullscreen-page__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
  z-index: 1;
}

.fullscreen-page__content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
}
</style>
