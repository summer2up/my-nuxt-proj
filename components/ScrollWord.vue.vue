<template>
  <span>
    <span class="absolute opacity-30 dark:opacity-70">{{ word }}</span>
    <span :style="{opacity: computedOpacity}" class="text-black dark:text-white">{{ word }}</span>
  </span>
</template>

<script lang="ts" setup>
interface Props {
  word: string;
  progress: number;
  range: Array<number>;
}

const props = defineProps<Props>()

const computedOpacity = computed(() => {
  const [start, end] = props.range
  const progress = props.progress
  
  if (progress < start) return 0;
  if (progress > end) return 1

  return (progress - start) / (end - start)
})
</script>

<style>

</style>