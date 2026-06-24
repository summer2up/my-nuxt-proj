<template>
  <footer class="bg-neutral-950 text-white">
    <!-- 分割线 -->
    <el-divider class="opacity-30" />

    <!-- 社交菜单 -->
    <div class="max-w-7xl mx-auto px-6 py-12">
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
  </footer>
</template>

<script setup lang="ts">
const menuList = [
  {
    code: 'weibo',
    icon: 'i-ri-weibo-line',           // 使用 Remix Icon 或 Heroicons
    name: 'Weibo',
    href: 'https://weibo.com/u/7889436828',
  },
  {
    code: 'douyin',
    icon: 'i-ri-tiktok-line',
    name: 'Douyin',
    href: 'https://www.douyin.com/user/MS4wLjABAAAAS3mSpMMENk6pCwripDINo9NZSGVtqdaIsL_tDE5kVro?from_tab_name=main',
  },
  {
    code: 'weixin',
    icon: 'i-ri-wechat-line',
    name: 'WeChat',
    href: 'https://www.weixin.qq.com/',
  },
  {
    code: 'bilibili',
    icon: 'i-ri-bilibili-line',
    name: 'Bilibili',
    href: 'https://www.bilibili.com/',
  },
]
</script>

<style scoped>
.footer-menu-item-title {
  font-family: 'Montserrat', system-ui, sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* 移动端优化 */
@media (max-width: 768px) {
  .footer-menu-item-title {
    font-size: 14px;
  }
}
</style>