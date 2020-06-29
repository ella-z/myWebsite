import request from '../utils/requset';


export function getNavData(name) {
    //获取导航栏数据
    return request({
        url: '/nav',
        method: 'get',
        params:{
            name
        }
      });
}

