import React from "react";
import Layout from "./Layout/layout";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./containers/Home";
import Service from "./containers/Service";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./components/UI/animations.css";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="scale-fade" timeout={200}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/service/:serviceName" component={Service}></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}

export default App;
