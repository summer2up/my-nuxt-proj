<template>
  <div>
    <nuxt-link to="/about" class="about">About</nuxt-link>
  </div>
</template>
<script lang="ts" setup>

</script>

<style lang="scss">
@use '@/assets/styles/variable.scss';

.about {
  color: $color;
  font-size: $font-size;
}
</style>