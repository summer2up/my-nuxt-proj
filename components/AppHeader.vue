<template>
  <div class="home-container bg-white">
    <el-row class="header-common align-center relative hidden-sm-and-down h-[70px] shadow-md">
      <el-col :span="6">
        <img src="~assets/img/logo.png" alt="" class="ml-5 my-1 bg-red-500" >
      </el-col>
      <el-col :span="12">
        <div class="menu-container h-[70px] flex items-center justify-center">
          <ul class="menu-ul flex relative" :style="{'--active': currentActive}">
            <li 
            v-for="(item,index) in menuList" 
            :key="index" 
            class="menu-item mx-[20px] font-semibold text-[16px] h-full text-center justify-center align-center cursor-pointer :hover:text-[#0054A7]">
              <nuxt-link
                :to="gotoPage(item)"
                class="text-no-underline w-100 h-100 text-reset d-flex justify-content-center align-items-center"
              >
                <span>{{ item.name }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <div/>
    <div/>
  </div>
</template>

<script lang="ts" setup>
interface Menu {
  name: string
  path: string
}
const state = reactive({
  currentActive: 0,
  menuList: [{name: 'home', path: '/'}, {name: 'live', path: '/live'}, {name: 'origins', path: '/origins'}, {name: 'music', path: '/music'}]
})

const { currentActive, menuList } = toRefs(state)

function gotoPage(item: Menu) {
  return item.path
}
</script>

<style lang="scss">
.home-container {
  // @apply active:fixed top-0 w-full z-50;
}
.menu-container {
  .menu-ul {
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 50px;
      height: 1PX;
      left: 19px;
      bottom: 0;
      background: blue;
      transition: all .4s;
      transform: translateX(calc(90px * var(--active)));
    }
    .menu-item {
      font-family: 'Syne,sans-serif';
      text-transform: uppercase;
    }
  }
}
</style>
