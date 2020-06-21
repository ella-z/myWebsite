import axios from 'axios';

const baseUrl = 'http://zhangzqcloud.cn/api';

export function getData() {
    return new Promise((resolve, reject) => {
        axios.get('http://47.106.70.95:3000/api/users').then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

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