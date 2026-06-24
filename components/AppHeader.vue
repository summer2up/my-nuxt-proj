<template>
  <div class="home-container bg-white">
    <el-row class="header-common align-center relative hidden-sm-and-down shadow-md">
      <el-col :span="6">
        <img src="~assets/img/logo.png" alt="" class="ml-5 my-1 bg-red-500" >
      </el-col>
      <el-col :span="12" class="flex justify-center">
          <MenuList/>
      </el-col>
    </el-row>
    <div/>
    <div/>
  </div>
    
</template>

<script lang="ts" setup>

</script >
<style lang="scss" scoped>
@use "@/assets/styles/variable.scss";
.header-common {
  height: $headerHight
}
</style>
