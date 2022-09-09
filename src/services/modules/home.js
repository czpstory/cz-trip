import HYrequest from '@/services/request/index'

export function getHotCityList() {
  return HYrequest.get({
    url: '/home/hotSuggests'
  })
}
