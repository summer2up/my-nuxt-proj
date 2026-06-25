<template>
  <div class="kun-container min-h-screen w-screen overflow-hidden">
    <div class="home w-full h-full min-h-screen relative">

      <!-- 全屏背景视频 -->
      <video
        class="absolute inset-0 w-full h-full object-cover z-0"
        src=""
        autoplay
        loop
        muted
        playsinline
      />

      <div class="absolute inset-0 bg-black/40 z-10" />

      <div class="home-text absolute top-1/2 left-[20%]">
        <div>STREAM JASMINE</div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
@use '@/assets/styles/variable.scss';
.kun-container {
  height: calc(100vh - #{$footerHight} - #{$headerHight});
}
</style>
