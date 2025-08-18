<template>
  <div class="min-h-screen w-screen overflow-hidden">
    <div class="home w-full h-full min-h-screen relative">
      <div 
      class="home-buttons lg:block hidden absolute left-0 p-5 h-full w-[100px]" 
      >
      <div class="home-buttons-container flex flex-col items-center justify-between h-full">
         <transition name="fade">
          <div v-show="!isLgScreen" class="logo-container">
            <img 
              src="~assets/img/logo.png" 
              alt="" 
              class="my-1 bg-red-500"
            >
          </div>    
        </transition>
        <div class="home-icons">
          <transition-group name="fade">
            <div 
              v-for="item in menuList" 
              :key="item.icon" 
              class="icon-wrapper"
            >
              <Icon 
                :name="`uil:${item.icon}`"
                class="color-black text-[20px] mx-3 mt-5"
              />
            </div>
          </transition-group>
          </div>
        </div>
      </div>
      <div class="home-text absolute top-1/2 left-[20%]">
        <el-button>STREAM JASMINE</el-button>
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
  isLgScreen: false,
   menuList: [
    { code: 'name="uil:github" ', icon: 'github' },
    { code: 'name="uil:instagram" ', icon: 'instagram' },
    { code: 'name="uil:youtube" ', icon: 'youtube' },
    { code: 'name="uil:discord" ', icon: 'discord' },
    { code: 'name="uil:twitter" ', icon: 'twitter'},
    { code: 'name="uil:x" ', icon: 'x' },
  ]
})

const { menuList, isLgScreen } = toRefs(state)

</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.home-icons .icon-wrapper {
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.home-icons .icon-wrapper:nth-child(1) { animation-delay: 0.1s; }
.home-icons .icon-wrapper:nth-child(2) { animation-delay: 0.2s; }
.home-icons .icon-wrapper:nth-child(3) { animation-delay: 0.3s; }
</style>
