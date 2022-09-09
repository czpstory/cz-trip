<template>
  <div class="nav-box">
    <div class="location">
      <div class="city" @click="handleCity">{{ currentCity.cityName }}</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="selection" @click="showCalendar = true">
      <div class="start">
        <div class="checkIn range">入住</div>
        <div class="startDate">{{ startDate }}</div>
      </div>
      <div class="total">共{{ stayCount }}晚</div>
      <div class="end">
        <div class="leave range">离店</div>
        <div class="leaveDate">{{ endDate }}</div>
      </div>
    </div>

    <!-- 日历 -->
    <van-calendar
      v-model:show="showCalendar"
      type="range"
      @confirm="onConfirm"
    />

    <!-- 人数关键字 -->
    <div class="item">
      <div class="price">价格不限</div>
      <div class="people">人数不限</div>
    </div>
    <div class="bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门城市 -->
    <div class="hotCity">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="hotCityList"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city.js'
import useHomeStore from '@/stores/modules/home.js'
import { storeToRefs } from 'pinia'

import { formatMonthDay, getDiffDays } from '@/utils/format_date.js'
const router = useRouter()
const handleCity = () => {
  router.push('/city')
}

// 回显城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 时间处理范围
const nowDate = new Date()
const newDate = new Date()
newDate.setDate(nowDate.getDate() + 1)
const startDate = ref(formatMonthDay(nowDate))
const endDate = ref(formatMonthDay(newDate))
const stayCount = ref(getDiffDays(nowDate, newDate))

// 日历
const showCalendar = ref(false)
const onConfirm = (value) => {
  const startShowDate = value[0]
  const endShowDate = value[1]
  startDate.value = formatMonthDay(startShowDate)
  endDate.value = formatMonthDay(endShowDate)
  stayCount.value = getDiffDays(startShowDate, endShowDate)
  showCalendar.value = false
}

// 热门城市
const useHotCity = useHomeStore()
useHotCity.getHotSuggests()
const { hotSuggests } = storeToRefs(useHotCity)
// console.log(hotSuggests)
</script>

<style lang="less" scoped>
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  padding: 0 15px;
}

.position {
  display: flex;
  align-items: center;
  .text {
    position: relative;
    top: 1px;
  }
  img {
    width: 18px;
    height: 18px;
  }
}

.selection {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
}

.range {
  margin-bottom: 5px;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(30, 7, 203, 0.992);
  padding: 0 15px;
  margin-bottom: 10px;
}
.bottom-gray-line {
  padding: 0 15px;
  border-bottom: 1px solid #eee;
}

.hotCity {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  // margin: 5px 15px;
  border-bottom: 1px solid #f1f3f5;
  .hotCityList {
    height: 30px;
    line-height: 30px;
    // background-color: pink;
    border-radius: 10px;
    margin: 5px 15px;
  }
}
</style>
