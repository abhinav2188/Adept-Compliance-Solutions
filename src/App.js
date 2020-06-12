import React from "react";
import Layout from "./components/layout/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Service from "./containers/Service";
import "./components/UI/animations.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/service/:serviceName" component={Service}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
