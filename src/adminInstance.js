import axios from "axios";

const base = "http://192.168.43.171:3001/api/";

const instance = axios.create({
    baseURL : base,
    headers : { "auth-token" : window.sessionStorage.getItem('token')}
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
        return response;
    },
    error => {
        console.log(error.response.status);
        return Promise.reject(error);
    }
)
export default instance;