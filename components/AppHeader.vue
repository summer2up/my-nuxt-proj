<template>
  <header
    class="home-container w-full pointer-events-auto"
    :class="{ 'home-container--overlay': overlay }"
  >
    <div class="header-common hidden-sm-and-down">
      <MenuList />
    </div>
  </header>
</template>

<script lang="ts" setup>
defineProps({
  overlay: {
    type: Boolean,
    default: false,
  },
})
</script>
<style lang="scss" scoped>
@use "@/assets/styles/variable.scss";
.header-common {
  height: $headerHight
}

.home-container--overlay {
  background: transparent;
}
</style>
