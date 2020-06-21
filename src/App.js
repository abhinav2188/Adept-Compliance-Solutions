import React, { useState } from "react";
import Layout from "./components/layout/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Service from "./containers/Service";
import "./components/UI/animations.css";
import Admin from "./containers/Admin";
import AuthContext from "./context/authContext";
import ModalContext from "./context/modalContext";

function App() {
  const [token, setToken] = useState(window.sessionStorage.getItem('token'));
  const [dataChanged, setDataChanged] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent , setModalContent] = useState("");
  return (
    <AuthContext.Provider value={{ token: token, setToken: setToken, dataChanged:dataChanged, setDataChanged:setDataChanged }}>
    <ModalContext.Provider value={{showModal:showModal ,openModal:()=>setShowModal(true) , closeModal:()=>setShowModal(false), content:modalContent, setContent:setModalContent }}>
    <Layout>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/service/:serviceName" component={Service}></Route>
            <Route exact path="/admin" component={Admin}></Route>
        </Switch>
    </Layout>
    </ModalContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
