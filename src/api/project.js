import axios from 'axios';

const baseUrl = 'http://zhangzqcloud.cn/api';

export function getAllProjectData() {
    //获取所有的project
    let url = `${baseUrl}/allProjects`;
    return new Promise((resolve, reject) => {
        axios({ url, method: 'get' }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

export function getProjectsData(type) {
    //获取指定类型的project
    let url = `${baseUrl}/projects`;
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