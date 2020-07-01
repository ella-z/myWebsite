import request from '../utils/requset';

export function login(phone, pwd) {
    //登录验证
    const data = {
        phoneNumber: phone,
        password: pwd
    };
    return request({
        url: '/login',
        method: 'post',
        data
    });
}

export function register(userInfo){
    const data = userInfo;
    return request({
        url:'/register',
        method:'post',
        data
    })
}

export function getaVCode(phoneNumber){
    const data = {
        phoneNumber:phoneNumber
    };
    return request({
        url:'/getVCode',
        method:'post',
        data
    })
}