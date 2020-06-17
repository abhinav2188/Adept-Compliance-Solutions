import React, { useState } from "react";
import Layout from "./components/layout/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Service from "./containers/Service";
import "./components/UI/animations.css";
import Admin from "./containers/Admin";
import AuthContext from "./context/authContext";

function App() {
  const [token, setToken] = useState(window.sessionStorage.getItem('token'));
  const [dataChanged, setDataChanged] = useState(false);
  return (
    <Layout>
      <AuthContext.Provider value={{ token: token, setToken: setToken, dataChanged:dataChanged, setDataChanged:setDataChanged }}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/service/:serviceName" component={Service}></Route>
          <Route exact path="/admin" component={Admin}></Route>
        </Switch>
      </AuthContext.Provider>
    </Layout>
  );
}

export default App;
