import request from '../utils/requset';

export function addBoardComment(commentData) {
    let data = {
        userInfo: commentData.userInfo,
        time: commentData.time,
        commentContent: commentData.commentContent
    };
    return request({
        url: '/addBoardComment',
        method: 'post',
        data
    });
}

export function deleteBoardComment(id) {
    let data = {
        id
    };
    return request({
        url: '/deleteBoardComment',
        method: 'post',
        data
    });
}

export function getBoardComment() {
    return request({
        url: '/getBoardComment',
        method: 'get'
      });
}