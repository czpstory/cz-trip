import { defineStore } from 'pinia'
import { getCityAll } from '../../services/modules/city'

const useCityStore = defineStore('city', {
  state() {
    return {
      allCities: {},
      currentCity: {
        cityName: '重庆'
      }
    }
  },
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore
