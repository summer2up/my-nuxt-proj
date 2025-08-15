<template>
  <div class="footer-container h-[200px] bg-black text-white">
    <el-divider/>
    <el-row class="footer-menu flex justify-center items-center h-[100px] p-[64px 21% 22px]">
        <el-col
          v-for="(item,index) in menuList"
            :key="index"
            :xs="24"
            :sm="24"
            :md="12"
            :lg="4"
            :xl="4"
            class="footer-menu-item flex justify-center items-center"
          >
            <Icon name="uil:github" class="me-1" />
            <p class="footer-menu-item-title">
              {{ item.name }}
            </p>
          </el-col>
    </el-row>
    <el-row class="my-[10px] text-[12px]">
       <el-col class="flex flex-col justify-flex-end items-center px-10">
        <a class="ms-1" href="https://beian.miit.gov.cn/" target="_blank">© 2025 KUN Studio. All Rights Reserved. Privacy Policy</a>
        <a
         class="ms-1 flex items-center"
         href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44049102496724"
         target="_blank"
         >
         <img src="~assets/img/beian.png" alt="" class="me-1">
         粤公网安备44049102496724号 粤ICP备2021144735号-1
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
const state = reactive({
  menuList: [
    {
      code: 'weibo',
      icon: 'icon-weibo',
      name: 'weibo',
      href: 'https://weibo.com/',
    },
    {
      code: 'douyin',
      icon: 'icon-douyin',
      name: 'douyin',
      href: 'https://www.douyin.com/',
    },
    {
      code: 'weixin',
      icon: 'icon-weixin',
      name: 'weChat',
      href: 'https://www.weixin.qq.com/',
    },
    {
      code: 'bilibili',
      icon: 'icon-bilibili',
      name: 'bilibili',
      href: 'https://www.bilibili.com/',
    },
  ]
})

const {menuList} = toRefs(state)
</script>

<style lang="scss" scoped>
.footer-menu {
  .footer-menu-item-title {
    font-family: 'Montserrat,sans-serif';
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.7em;
  }
}
</style>
