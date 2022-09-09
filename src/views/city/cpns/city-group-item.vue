<template>
  <div class="city-group-item">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor
        >热门
        <div class="hotCities">
          <template v-for="(city, index) in groupData.hotCities" :key="index">
            <div class="list" @click="selectCity(city)">
              {{ city.cityName }}
            </div>
          </template>
        </div>
      </van-index-anchor>

      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="selectCity(city)" />
        </template>
      </template>
    </van-index-bar>

    <!-- <template v-for="(group, indey) in groupData.cities" :key="indey">
      <div class="group-item">
        <h2 class="title">标题:{{ group.group }}</h2>
        <div class="list">
          <template v-for="(city, indey) in group.cities" :key="indey">
            <div class="city">{{ city.cityName }}</div>
          </template>
        </div>
      </div>
    </template> -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city.js'
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})
const router = useRouter()
const cityStore = useCityStore()

// 在右边的英文标签添加“#”
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group)
  return list
})
indexList.value.unshift('#')

// 点击城市回显 在pinia存储点击的城市
const selectCity = (city) => {
  // console.log(city)
  cityStore.currentCity = city
  // 回退
  router.back()
}
</script>

<style lang="less" scoped>
.hotCities {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .list {
    height: 28px;
    width: 50px;
    font-size: 14px;
    color: #123122;
    text-align: center;
    line-height: 28px;
    margin-right: 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: aqua;
  }
}
</style>
