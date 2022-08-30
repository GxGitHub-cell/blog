import axios from "axios";

const server = axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000
})

server.interceptors.request.use(
    config=>{
        return config
    },
    err=>{
        return Promise.reject(err)
    }
)
server.interceptors.response.use(
    res=>{
        return res.data
    },
    err=>{
        return Promise.reject(err)
    }
)
export default server
