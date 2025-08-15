<template>
  <div class="origin-container flex flex-col justify-center items-center">
    <div class="flex justify-center items-center text-center w-[50%]">
			KUN is an artist who pushes the boundaries of music and performance. KUN creates high-concept, audio and visual experiences that strive to bridge genres, cultures, and artistic conventions, connecting with audiences worldwide.	
    </div>
    <div class="flex justify-center items-center text-center w-[50%] h-[50px]">
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