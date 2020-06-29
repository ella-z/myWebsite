import request from '../utils/requset';

export function login(phone, pwd) {
    const data = {
        "phoneNumber": phone,
        "password": pwd
    };
    return request({
        url: '/login',
        method: 'post',
        data
    });

}