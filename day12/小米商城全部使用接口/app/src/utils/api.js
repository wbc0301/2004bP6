import axios from 'axios';

const server = axios.create({
    baseURL: ''
})

server.interceptors.request.use(config => {
    config.headers.Authorization = 'djlafoiu23oi4re90u32reu90ji'
    return config;
})
server.interceptors.response.use(res => {
    return res.data;
})

export default server