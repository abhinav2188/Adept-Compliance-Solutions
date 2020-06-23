import React, { useContext } from "react";
import axios from "axios";
import AlertContext from "../../context/alertContext";
import AuthContext from "../../context/authContext";

axios.defaults.baseURL = "http://192.168.43.171:3001/api/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.headers.patch["Content-Type"] = "multipart/form-data";
axios.interceptors.request.use(
    request => {
        console.log("request from auth",request.method,request.baseURL+request.url);
        return request;
    },
    error => {
        return Promise.reject(error);
    }
)

const Auth = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    axios.defaults.headers.common["auth-token"] = authContext.token;

    axios.interceptors.response.use(
        response => {
            console.log("response from auth", response.status);
            // alertContext.addMessage(mapResponseToAlert(response.status,response.data));
            alertContext.addMessage({type:"success",message:response.statusText})
            return response;
        },
        error => {
            console.log(error.response);
            // if(error.response){
            //     alertContext.addMessage(mapResponseToAlert(error.response.status,error.response.data));
            // }
            alertContext.addMessage({type:"failure",message:error.response.data});
            return Promise.reject(error);
        }
    )
    return authContext.token?props.children:null;
};

export default Auth;
