import axios from 'axios';

const baseUrl = 'http://zhangzqcloud.cn/api';

export function getTypeEssayData(type) {
    //根据文章的类型获取文件
    let url = `${baseUrl}/typeEssays`;
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                type
            }
        }).then(res => {
            resolve(res.data.result);
        }).catch(err => {
            reject(err.data);
        })
    })
}

export function getTagEssayData(type, tag) {
    //根据文章的类型与标签来获取文件
    let url = `${baseUrl}/tagEssays`;
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                type, tag
            }
        }).then(res => {
            resolve(res.data.result);
        }).catch(err => {
            reject(err.data);
        })
    })
}

export function getEssayDetails(id) {
    //根据文章的id获取文章的详情
    let url = `${baseUrl}/essay/details`
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                id
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

export function getEssayComments(essayId) {
    //根据文章的id获取文章的评论
    let url = `${baseUrl}/essay/getEssayComment`;
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                essayId
            }
        }).then(res => {
            resolve(res.data.result.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

export function addEssayComment(commentData) {
    let data = {
        userInfo: commentData.userInfo,
        time: commentData.time,
        commentContent: commentData.commentContent,
        essayId:commentData.essayId
    };
    let url = `${baseUrl}/essay/addEssayComment`;
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

export function deleteEssayComment(id) {
    let data = {
        id
    };
    let url = `${baseUrl}/essay/removeEssayComment`;
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}