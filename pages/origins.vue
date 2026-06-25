<template>
  <div class="origin flex flex-col justify-center items-center">
    <div ref="splitTextRef" class="split flex justify-center items-center text-center w-[50%]">
      <EncryptedText
        :text="text"
        encrypted-class="text-neutral-500"
        revealed-class="dark:text-white text-black"
        :reveal-delay-ms="revealDelayMs"
      />
    </div>
    <button ref="replayBtn" class="mt-10 mb-8" >Replay</button>
    <div v-motion-pop class="flex justify-center items-center text-center w-[50%] h-[50px]">
       <Icon
        v-for="item in menuList" 
        :key="item.icon" 
        :name="`uil:${item.icon}`"
        class="color-black text-[20px] mx-3 mt-10"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  text?: string;
  revealDelayMs?: number;
}
const { text = "I am a f****ing great developer !", revealDelayMs = 50 } = defineProps<Props>();
const state = reactive({
  menuList: [
    { code: 'name="uil:github" ', icon: 'github' },
    { code: 'name="uil:instagram" ', icon: 'instagram' },
    { code: 'name="uil:youtube" ', icon: 'youtube' },
    { code: 'name="uil:discord" ', icon: 'discord' },
  ]
})

const {menuList} = toRefs(state)
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variable.scss';

.origin {
  height: calc(100vh - #{$footerHight} - #{$headerHight});
}
.split {
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  line-height: 1.15;
  font-weight: 500;
  color: #0e100f;
}
button {
  padding: 14px 34px;
  border: 4px solid #0e100f;
  background: transparent;
  color: #0e100f;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #0e100f;
  color: white;
}
</style>