import axios from "axios";

const base = "http://192.168.43.171:3001/api/";

const instance = axios.create({
    baseURL : base,
})

instance.interceptors.request.use(
    request => {
        console.log("request",request.method,request.baseURL+request.url);
        console.log(request.headers);
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