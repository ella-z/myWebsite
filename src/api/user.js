import axios from 'axios';



export function login(phone, pwd) {
    return new Promise((resolve, reject) => {
        const url = 'http://zhangzqcloud.cn/api/login';
        const params = {
            "phoneNumber": phone,
            "password": pwd
        };
        axios({
            url,
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data:JSON.stringify(params)
        }).then(res => {
            resolve(res.data.result);
        }).catch(err => {
            reject(err.data);
        })
    })
}