import axios from "axios"

const baseUrl = 'http://zhangzqcloud.cn/api';

export function getNavData(name) {
    //获取导航栏数据
    let url = `${baseUrl}/nav`;
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                name: name
            }
        }).then(res => {
            resolve(res.data.result.data);
        }).catch(err => {
            reject(err.data);
        })

    })
}
