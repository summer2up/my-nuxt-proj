<template>
  <div class="min-h-screen w-screen overflow-hidden">
    <div class="home w-full h-full min-h-screen relative">
      <div class="home-buttons absolute left-0 p-5 h-full w-[100px]">
        <div class="flex flex-col items-center justify-between h-full">
          <div class="home-link mt-2">
            <img src="~assets/img/logo.png" alt="" class="my-1 bg-red-500" >
          </div>
          <div class="home-icons">
              <Icon 
                v-for="item in menuList" 
                :key="item.icon" 
                :name="`uil:${item.icon}`"
                class="color-black text-[20px] mx-3 mt-5"
              />
          </div>
        </div>
      </div>
      <div class="home-text absolute top-1/2 left-[20%]">
        <el-button/>
      </div>
    </div>
    <div class="scroll-page absolute right-0 top-0 h-full w-[10%] text-center flex items-center justify-center">scroll</div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'home',
})

const state = reactive({
   menuList: [
    { code: 'name="uil:github" ', icon: 'github' },
    { code: 'name="uil:instagram" ', icon: 'instagram' },
    { code: 'name="uil:youtube" ', icon: 'youtube' },
    { code: 'name="uil:discord" ', icon: 'discord' },
    { code: 'name="uil:twitter" ', icon: 'twitter'},
    { code: 'name="uil:x" ', icon: 'x' },
  ]
})

const { menuList } = toRefs(state)
</script>

<style lang="scss">

</style>
