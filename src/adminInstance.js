import axios from "axios";

const base = "http://localhost:3001/api/";

const instance = axios.create({
    baseURL : base,
    timeout:1000,
})

instance.interceptors.request.use(
    request => {
        console.log("request",request.method,request.baseURL+request.url);
        return request;
    },
    error => {
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    response => {
        console.log("response", response.status);
        response.baseURL = base;
        return response;
    },
    error => {
        return Promise.reject(error);
    }
)
export default instance;