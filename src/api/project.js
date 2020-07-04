import request from '../utils/requset'

export function getAllProjectData () {
  // 获取所有的project
  return request({
    url: '/allProjects',
    method: 'get'
  })
}

export function getProjectsData (type) {
  // 获取指定类型的project
  return request({
    url: '/projects',
    method: 'get',
    params: {
      type
    }
  })
}
