import axios from 'axios';

const baseUrl = 'http://zhangzqcloud.cn/api';

export function getMyInformation() {
    //获取关于我的信息
    let url = `${baseUrl}/aboutMe`
    return new Promise((resolve, reject) => {
        axios({ url, method: "get" }).then(res => {
            resolve(res.data.result.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}