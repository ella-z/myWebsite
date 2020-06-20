import axios from 'axios';

export function getData() {
    return new Promise((resolve, reject) => {
        axios.get('http://47.106.70.95:3000/api/users').then(res => {
            resolve(res.data);
        }).catch(err=>{
            reject(err.data);
        })
    })
}