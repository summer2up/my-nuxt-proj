<template>
  <FullScreenPage>
    <div class="origin flex flex-col justify-center items-center">
      <div ref="splitTextRef" class="split flex justify-center items-center text-center w-[50%]">
        <EncryptedText
          :text="text"
          encrypted-class="text-neutral-500"
          revealed-class="text-white"
          :reveal-delay-ms="revealDelayMs"
        />
      </div>
      <div class="flex w-full items-center justify-center p-4">
      <InteractiveHoverButton :text="buttonText"/>
      </div>
    </div>
  </FullScreenPage>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default',
})

interface Props {
  text?: string
  revealDelayMs?: number
}

const { text = 'I am a f****ing great developer !', revealDelayMs = 50 } = defineProps<Props>()
const buttonText = ref('Click me')
</script>

<style lang="scss" scoped>
.origin {
  height: 100%;
}

.split {
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  line-height: 1.15;
  font-weight: 500;
  color: #fff;
}

button {
  padding: 14px 34px;
  border: 4px solid #fff;
  background: transparent;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #fff;
  color: #0e100f;
}
</style>
