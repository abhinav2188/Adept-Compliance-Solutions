import React, { useState, useContext } from "react";
import axiosInstance from "../adminInstance";
import AuthContext from "../context/authContext";
import { useHistory } from "react-router-dom";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

const Admin = () => {
  const history = useHistory();
  const [adminUser, setAdminUser] = useState({});
  const authContext = useContext(AuthContext);
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAdminUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    params.append("username", adminUser.username);
    params.append("password", adminUser.password);
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

  return (
    <div className="flex flex-col items-center my-8 py-8">
      {!authContext.token ? (
        <form
          className="w-72 border border-gray-light rounded p-4"
          onSubmit={handleSubmit}
        >
          <h4 className="font-heading">Admin Login</h4>
          <hr className="border-gray-light border-t-1 mb-4" />
          <Input
            name="username"
            type="text"
            value={adminUser.username}
            onChange={onChangeHandler}
          />
          <Input
            name="password"
            type="password"
            value={adminUser.password}
            onChange={onChangeHandler}
          />
          <Button type="submit">Login</Button>
        </form>
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
