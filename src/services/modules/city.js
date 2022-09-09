import HYrequest from '../request/index'

export function getCityAll() {
  return HYrequest.get({
    url: '/city/all'
  })
}
