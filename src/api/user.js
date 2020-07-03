import request from '../utils/requset';

export function login(phoneNumber, password) {
    //登录验证
    const data = {
        phoneNumber,
        password
    };
    return request({
        url: '/login',
        method: 'post',
        data
    });
}

export function register(userInfo) {
    //注册
    const data = userInfo;
    return request({
        url: '/register',
        method: 'post',
        data
    })
}

export function getVCode(phoneNumber) {
    //获取验证码
    const data = {
        phoneNumber
    };
    return request({
        url: '/getVCode',
        method: 'post',
        data
    })
}

export function userDetails(token) {
    //用户详细信息
    const data = {
        token
    };
    return request({
        url: '/userDetails',
        method: 'post',
        data
    })
}

export function updateUserAvatar(userId, filename) {
    // 修改用户头像
    const data = {
        userId,
        filename
    };
    return request({
        url: '/updateUserAvatar',
        method: 'post',
        data
    })
}

export function changePassword(phoneNumber, password,vCode) {
    //修改密码
    const data = {
        phoneNumber, password,vCode
    };
    return request({
        url: '/changePassword',
        method: 'post',
        data
    })
}