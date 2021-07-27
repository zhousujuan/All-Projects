import axios from 'axios'

const request =axios.create()

request.defaults.timeout=3000

export function fetch(url,params){//封装axios的post请求
    return new Promise((resolve,reject)=>{
        axios,post(url,params).then(response =>{
            resolve(response.data)
        }).catch(error =>{
            reject(error)
        })
    })

}

export default {//暴露mock方法，即后面页面中用到的方法
    request_mock(url,params){
        return fetch(url,params)
    }

}