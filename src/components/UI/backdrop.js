import React from "react";
import { CSSTransition } from "react-transition-group";
import "./animations.css";

const backdrop = (props) => (
  <CSSTransition
    in={props.show}
    classNames="fade"
    timeout={200}
    mountOnEnter
    unmountOnExit
  >
    <div
      className="z-40 bg-black w-screen h-screen fixed top-0 left-0 opacity-75"
      onClick={() => props.close()}
    ></div>
  </CSSTransition>
);

export default backdrop;
