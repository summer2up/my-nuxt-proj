<template>
  <div class="container"/>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variable.scss';
.container {
  height: calc(100vh - #{$footerHight} - #{$headerHight});
}
</style>