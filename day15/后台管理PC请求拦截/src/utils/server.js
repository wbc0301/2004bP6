import axios from 'axios';
const server  = axios.create({
    baseURL: '', // 基础的URL
    timeout: 5000, // 超时时间
})

//请求拦截器
// 回调函数是在发请求之前被调用的
server.interceptors.request.use(config => {
    // console.log('aaa')

    if(localStorage.islogin) { // 已登录
        config.headers.token = localStorage.islogin; // 给所有请求添加token
    }

    return config; // 必须要return config
})

// 响应拦截器
// 回调函数是在接收求之前被调用的
server.interceptors.response.use(res => {
    res = res.data;
    return res;
})

export default server
