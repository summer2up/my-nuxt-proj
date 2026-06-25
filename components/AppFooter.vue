<template>
  <footer class="grid grid-cols-3 gap-3 bg-neutral-950 text-white">
    <!-- <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <a
          v-for="item in menuList"
          :key="item.code"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-menu-item group flex flex-col items-center gap-3 hover:text-primary-400 transition-colors"
        >
          <Icon 
            :name="item.icon" 
            class="w-8 h-8 transition-transform group-hover:scale-110" 
          />
          <p class="footer-menu-item-title">
            {{ item.name }}
          </p>
        </a>
      </div>
    </div> -->
    <div class="text-container flex items-center justify-center h-full">
      <span class="text-xs">
        © 2026 KUN Studio. All Rights Reserved. Privacy Policy
      </span>
    </div>
    <!-- 备案信息 -->
    <div class="border-t border-neutral-800 py-8 text-center text-xs text-neutral-400">
      <div class="max-w-7xl mx-auto px-6 space-y-2">
        <a 
          href="https://beian.miit.gov.cn/" 
          target="_blank"
          class="hover:text-white transition-colors"
        >
          © 2025 KUN Studio. All Rights Reserved.
        </a>
        
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44049102496724"
          target="_blank"
          class="flex items-center justify-center gap-1.5 hover:text-white transition-colors"
        >
          <img 
            src="~assets/img/beian.png" 
            alt="公安备案" 
            class="h-4 w-auto"
          >
          粤公网安备 44049102496724号 粤ICP备2021144735号-1
        </a>
      </div>
    </div>
    <div class="home-buttons-container flex items-center justify-center h-full">
    <div class="home-icons flex">
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
  </footer>
</template>

<script setup lang="ts">

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

const { menuList } = toRefs(state)
// const menuList = [
//   {
//     code: 'weibo',
//     icon: 'i-ri-weibo-line',
//     name: 'Weibo',
//     href: 'https://weibo.com/u/7889436828',
//   },
//   {
//     code: 'douyin',
//     icon: 'i-ri-tiktok-line',
//     name: 'Douyin',
//     href: 'https://www.douyin.com/user/MS4wLjABAAAAS3mSpMMENk6pCwripDINo9NZSGVtqdaIsL_tDE5kVro?from_tab_name=main',
//   },
//   {
//     code: 'weixin',
//     icon: 'i-ri-wechat-line',
//     name: 'WeChat',
//     href: 'https://www.weixin.qq.com/',
//   },
//   {
//     code: 'bilibili',
//     icon: 'i-ri-bilibili-line',
//     name: 'Bilibili',
//     href: 'https://www.bilibili.com/',
//   },
// ]
</script>

<style scoped>
.footer-menu-item-title {
  font-family: 'Montserrat', system-ui, sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
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
/* 移动端优化 */
@media (max-width: 768px) {
  .footer-menu-item-title {
    font-size: 14px;
  }
}
</style>