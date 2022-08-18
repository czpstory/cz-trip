<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="item.text">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img
              v-if="index !== currentIndex"
              :src="getAssetURL(item.image)"
              alt=""
            />
            <img v-else :src="getAssetURL(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js'
import { getAssetURL } from '@/utils/load_assets.js'
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
let currentIndex = ref(0)
// const router = useRouter()
// const togCurrent = (index, path) => {
//   router.push(path)
//   return (currentIndex.value = index)
// }
</script>

<style lang="less" scoped>
.tab-bar {
  //局部定义一个变量 只针对 .tab-bar子元素生效
  // --van-tabbar-item-icon-size: 60px !important;
  //deep穿透
  // :deep(.子组件类){}
  img {
    height: 26px;
  }
}
.active {
  color: gold;
}
</style>
