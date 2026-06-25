<template>
  <div class="grid grid-cols-4 gap-4">
    <nuxt-link class="item" to="/"> <ColorfulText class="font-bold" text="HOME" /></nuxt-link>
    <nuxt-link class="item" to="/live"> 
      <HyperText
        text="LIVE"  class="text-xl font-bold cursor-pointer"
        :duration="800"
        :animate-on-load="true" />
    </nuxt-link>
    <nuxt-link class="item" to="/origins">
       <HyperText
        text="ORIGINS"  class="text-xl font-bold cursor-pointer"
        :duration="800"
        :animate-on-load="true" />
    </nuxt-link>
    <nuxt-link class="item" to="/music">
       <HyperText
        text="VIDEOS"  class="text-xl font-bold cursor-pointer"
        :duration="800"
        :animate-on-load="true" />
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  align: {
    type: String as PropType<'vertical' | 'horizanal'>
  },
  text: {
    type: String,
    default: 'ORIGINS'
  },
  revealDelayMs: {
    type: Number,
    default: 50
  }
})

</script>

<style scoped lang="scss">
// method 1: 使用transformer
.item {
  @apply relative text-red-300 text-xl mx-2 px-8 py-2 text-xl cursor-pointer flex justify-center items-center;
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
