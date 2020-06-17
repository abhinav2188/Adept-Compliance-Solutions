import React, { useState, useContext } from "react";
import axiosInstance from "../adminInstance";
import AuthContext from "../context/authContext";
import { useHistory } from "react-router-dom";
import Button from "../components/UI/Button";
import Form from "../components/UI/form";

const Admin = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  
  const adminLogin = (data) => {
    const params = new URLSearchParams();
    params.append("username", data.username);
    params.append("password", data.password);
    axiosInstance
      .post("/login", params)
      .then((response) => response.data.token)
      .then((token) => {
        authContext.setToken(token);
        window.sessionStorage.token = token;
      })
      .then(() => {
        alert("admin logged in");
        history.push("/");
      })
      .catch((error) => alert(error));
  };

  const formAttributes = {
      username:{
          value:"",
          type:"text"
      },
      password:{
          value:"",
          type:"password"
      }
  };

  return (

    <div className="flex flex-col items-center my-8 py-8">
      {!authContext.token ? (
        <Form formTitle="Admin Login" actionString="Login" formAttributes={formAttributes} onSubmitHandler={adminLogin} />
      ) : (
        <div className="flex flex-col">
          <h3>Already logged in</h3>
          <Button onClick={() => {authContext.setToken(""); window.sessionStorage.removeItem('token')}}>Logout</Button>
        </div>
      )}
    </div>
  );
};

export default Admin;
