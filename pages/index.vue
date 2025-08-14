<template>
  <div class="min-h-screen w-screen overflow-hidden">
    <div class="home w-full h-full min-h-screen relative">
      <div class="home-buttons h-[700px] w-[50px] flex flex-col justify-between p-5">
        <div class="home-link mt-10">home</div>
        <div class="home-music">
          <ul>
            <li>music</li>
            <li>music</li>
            <li>music</li>
            <li>music</li>
            <li>music</li>
            <li>music</li>
          </ul>
        </div>
      </div>
      <div class="home-text absolute top-1/2 left-[20%]">文本们</div>
    </div>
    <div class="scroll-page absolute right-0 top-0 h-full w-[10%] text-center flex items-center justify-center">scroll</div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'home',
})
</script>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>