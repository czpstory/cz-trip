<template>
  <div class="city top-page">
    <div class="top">
      <van-search
        v-model="searchValue"
        show-action
        shape="round"
        placeholder="城市/区域/位置"
        @cancel="cancelClick"
      />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="index">
          <van-tab :title="value.title" :name="key"> </van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="index">
        <cityGroupItem
          v-show="tabActive === key"
          :groupData="value"
        ></cityGroupItem>
      </template>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import useCityStore from '@/stores/modules/city.js'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

import cityGroupItem from './cpns/city-group-item.vue'

const router = useRouter()
const searchValue = ref()
const cancelClick = () => {
  router.back()
}

const tabActive = ref()

// 从store中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)
onMounted(() => {
  console.log(allCities)
})

// 获取选中标签后的值
const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<style lang="less" scoped>
// :deep().van-tabs--line {
//   --van-tabs-line-height: 36px !important;
// }
.city {
  --van-tabs-line-height: 30px !important;
  .top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .content {
    margin-top: 89px;
    // height: calc(100vh-89px);
    overflow-y: auto;
  }
  // .content {
  //   height: calc(100vh-89px);
  //   overflow-y: auto;
  // }
}
</style>
