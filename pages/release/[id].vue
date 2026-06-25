<template>
  <FullScreenPage>
    <div class="release-content">
      <h1>Release {{ id }}</h1>
    </div>
  </FullScreenPage>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default',
})

const route = useRoute()
const id = computed(() => route.params.id)
</script>

<style lang="scss" scoped>
.release-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;

  h1 {
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-weight: 600;
  }
}
</style>
