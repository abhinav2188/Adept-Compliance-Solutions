import React, { useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/authContext";

axios.defaults.baseURL = "http://192.168.43.171:3001/api/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.headers.patch["Content-Type"] = "multipart/form-data";
axios.interceptors.request.use(
  (request) => {
    console.log(
      "request from auth",
      request.method,
      request.baseURL + request.url
    );
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Auth = (props) => {
    const authContext = useContext(AuthContext);
    axios.defaults.headers.common["auth-token"] = authContext.token;

    return authContext.token ? props.children : null;
};

export default Auth;
