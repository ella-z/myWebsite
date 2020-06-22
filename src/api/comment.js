import axios from 'axios';

const baseUrl = 'http://zhangzqcloud.cn/api'

export function addBoardComment(commentData) {
    let params = {
        "userInfo": commentData.userInfo,
        "time": commentData.time,
        "commentContent": commentData.commentContent
    };
    let url = `${baseUrl}/addBoardComment`;
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(params)
        }).then(res => {
            resolve(res.data.result);
        }).catch(err => {
            reject(err.data);
        })
    })
}

export function getBoardComment() {
    let url = `${baseUrl}/getBoardComment`;
    return new Promise((resolve, reject) => {
        axios({ url, method: 'get' }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}