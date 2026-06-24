<template>
  <div :class="['flex', { 'flex-col': align === 'vertical' }]">
    <nuxt-link class="item" to="/">home</nuxt-link>
    <nuxt-link class="item" to="/live">live</nuxt-link>
    <nuxt-link class="item" to="/origins">origins</nuxt-link>
    <nuxt-link class="item" to="/music">music</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  align: {
    type: String as PropType<'vertical' | 'horizanal'>
  }
})
</script>

<style scoped lang="scss">
// method 1: 使用transformer
.item {
  @apply relative text-red-300 text-sm mx-2 px-8 py-2 text-xs cursor-pointer flex justify-center items-center;
  &:hover {
    @apply text-red-500;
    &:after {
      // content: '';
      @apply content-none absolute bg-gray-100 w-8 h-[1px] bottom-0 left-[calc(50%-1rem)];
      // left: calc(50% - 1rem);
    }
  }
}
</style>
