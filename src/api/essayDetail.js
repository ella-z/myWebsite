import axios from 'axios';

export function getData() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000').then(res => {
            resolve(res.data);
        }).catch(err=>{
            reject(err.data);
        })
    })
}