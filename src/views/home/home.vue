<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-nav-box></home-nav-box>
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue'

import HomeNavBox from './cpns/home-nav-box.vue'
</script>

<style lang="less" scoped>
.banner {
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
