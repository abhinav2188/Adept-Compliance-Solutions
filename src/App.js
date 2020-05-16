import React from 'react';
import Layout from "./Layout/layout";
import {Switch,Route} from "react-router-dom";
import Home from "./containers/Home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
