import request from '../utils/requset'

export function addBoardComment (commentData) {
  const data = {
    userInfo: commentData.userInfo,
    time: commentData.time,
    commentContent: commentData.commentContent
  }
  return request({
    url: '/addBoardComment',
    method: 'post',
    data
  })
}

export function deleteBoardComment (id) {
  const data = {
    id
  }
  return request({
    url: '/deleteBoardComment',
    method: 'post',
    data
  })
}

export function getBoardComment () {
  return request({
    url: '/getBoardComment',
    method: 'get'
  })
}
