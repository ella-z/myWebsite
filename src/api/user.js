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

export function getVCode(phoneNumber){
    const data = {
        phoneNumber
    };
    return request({
        url:'/getVCode',
        method:'post',
        data
    })
}

export function userDetails(userId){
    const data ={
        userId
    };
    return request({
        url:'/userDetails',
        method:'post',
        data
    })
}