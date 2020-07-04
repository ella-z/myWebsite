import request from '../utils/requset'

export function getMyInformation () {
  // 获取关于我的信息
  return request({
    url: '/aboutMe',
    method: 'get'
  })
}
