import axios from "axios"

export function getAllProjectData() {
    let url = 'http://zhangzqcloud.cn/api/projects';
    return new Promise((resolve, reject) => {
        axios({ url, method: 'get' }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}