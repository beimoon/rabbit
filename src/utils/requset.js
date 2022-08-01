//请求模块
//axios实例 请求拦截器头部携带token
//response拦截器 处理不需要的数据 处理token消失？
//导出函数 调用请求 接受 异步响应！！！

import axios from 'axios'
import store from '../store/index'
import router from '../router/index'
//导出基准地址 方便其他请求
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'

const instance = axios.create({
    baseURL,
    timeout:5000,
    headers:{}
})

//拦截器
instance.interceptors.request.use(function (config){

    //请求之前的逻辑处理
    const token=store.state.user.profile.token
    console.log(token)
    if(token){
        config.headers.Mytoken=token
    }
    return config
},function (error){
    return new Promise.reject(error)
})

//响应器
instance.interceptors.response.use(res=>res.data,err=>{
    if (err.response&&err.response.status===404){
        // 1. 清空无效用户信息
        // 2. 跳转到登录页
        // 3. 跳转需要传参（当前路由地址）给登录页码???
        store.commit('user/setUser',{})
        //当前路径存在参数 需要url解析
        // const  fullPath=encodeURIComponent(router.currentRoute.value.fullPath)
        // encodeURIComponent 转换uri编码，防止解析地址(特殊字符%% &&)出问题
        router.push('/login?redirectUrl=' + fullPath)
    }
    return new Promise(err)
})
//请求函数封装

export default (url,method,submitData)=>{
    return instance({
        url,
        method,
        // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
        // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
        // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
        // method参数：get,Get,GET  转换成小写再来判断
        // 在对象，['params']:submitData ===== 'params':submitData 这样理解
        [method.toLowerCase()==='get'?'params':'data']:submitData
    })
}
