<template>
  <footer
    class="app-footer text-white"
    :class="{
      'app-footer--embedded': embedded,
      'app-footer--fixed': fixed,
    }"
  >
    <div class="app-footer__inner">
      <p class="app-footer__copyright text-xs text-white/80">
        © 2026 KUN Studio. All Rights Reserved
      </p>

      <div class="flex flex-col items-center text-center gap-[6px] text-xs text-white/70">
        <nuxt-link
          to="/"
          class="hover:text-white transition-colors"
        >
          <img src="~/assets/img/logo.png">
        </nuxt-link>
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44049102496724"
          target="_blank"
          class="app-footer__beian-gov hover:text-white transition-colors"
        >
          <img
            src="~assets/img/beian.png"
            alt="公安备案"
            class="h-4 w-auto"
          >
          粤公网安备 44049102496724号
        </a>
      </div>

      <div class="app-footer__icons">
      <a
        v-for="(item, index) in menuList"
        :key="item.icon"
        :href="item.href"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
      >
        <Icon
          :name="item.icon"
          class="icon-wrapper text-white text-[20px]"
          :style="{ animationDelay: `${index * 0.1 + 0.1}s` }"
        />
      </a>
    </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps({
  embedded: {
    type: Boolean,
    default: false,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
})

const state = reactive({
  menuList: [
    { icon: 'i-ri-github-line', name: 'Github', href: 'https://github.com/summer2up' },
    { icon: 'i-ri-tiktok-line', name: 'Tiktok', href: 'https://www.douyin.com/user/MS4wLjABAAAAS3mSpMMENk6pCwripDINo9NZSGVtqdaIsL_tDE5kVro?from_tab_name=main' },
    { icon: 'i-ri-weibo-line', name: 'Weibo', href: 'https://weibo.com/u/7889436828'},
    { icon: 'i-ri-bilibili-line', name: 'Bilibili', href: 'https://bilibili.com'},
    { icon: 'i-ri-twitter-line', name: 'Twitter', href: 'https://x.com'},
    { icon: 'i-ri-wechat-line', name: 'Wechat', href: 'https://wechat.qq.com'},
    { icon: 'i-ri-qq-line', name: 'QQ', href: 'https://www.qq.com'},
  ],
})

const { menuList } = toRefs(state)
</script>

<style scoped lang="scss">
@use '@/assets/styles/variable.scss';

.app-footer {
  min-height: $footerHight;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.18) 55%,
    transparent 100%
  );
  pointer-events: none;
}

.app-footer--embedded {
  position: relative;
  min-height: auto;
}

.app-footer--fixed {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}

.app-footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px 24px;
  min-height: $footerHight;
  padding: 16px 32px 24px;
  pointer-events: auto;
}
.app-footer__inner .icon-wrapper {
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
.app-footer__beian-gov {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.app-footer__icons {
  display: flex;
  align-items: center;
  gap: 20px;
}

@media (max-width: 768px) {
  .app-footer__inner {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px 16px 28px;
  }

  .app-footer__icons {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
}
</style>
