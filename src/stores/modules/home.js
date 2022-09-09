import { defineStore } from 'pinia'
import { getHotCityList } from '@/services/modules/home'
const useHomeStore = defineStore('home', {
  state() {
    return {
      hotSuggests: []
    }
  },
  actions: {
    async getHotSuggests() {
      const hotResult = await getHotCityList()
      this.hotSuggests = hotResult.data
    }
  }
})

export default useHomeStore
