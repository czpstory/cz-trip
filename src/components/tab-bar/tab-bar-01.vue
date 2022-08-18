<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="item.text">
      <div
        class="tab-item"
        @click="togCurrent(index, item.path)"
        :class="{ active: currentIndex == index }"
      >
        <img
          v-if="index !== currentIndex"
          :src="getAssetURL(item.image)"
          alt=""
        />
        <img v-else :src="getAssetURL(item.imageActive)" alt="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js'
import { getAssetURL } from '@/utils/load_assets.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let currentIndex = ref(0)
const router = useRouter()
const togCurrent = (index, path) => {
  router.push(path)
  return (currentIndex.value = index)
}
</script>

<style lang="less" scoped>
.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 50px;
  border-top: 1px solid #eee;
  .tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      margin-bottom: 3px;
    }
  }
}
.active {
  color: gold;
}
</style>
