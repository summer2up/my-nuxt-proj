<template>
  <div class="home-container w-full z-9999">
    <div class="header-common  hidden-sm-and-down">
      <MenuList/>
    </div>
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
