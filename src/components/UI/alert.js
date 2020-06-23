import React,{useContext} from "react";
import PropTypes from "prop-types";
import { CSSTransition,TransitionGroup } from "react-transition-group";
import AlertContext from "../../context/alertContext";

import "./animations.css";

const closeSvg = (
    <svg className="w-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.806 409.806" fill="white">
      <path
        d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42
              c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42
              c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132
              c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42
              c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z"
      />
    </svg>
  )

const Alert = (props) => {

  const alertContext = useContext(AlertContext);
  return (
    <TransitionGroup className="flex flex-col fixed top-0 left-1/2 transform -translate-x-1/2 items-center z-50" component="div">
    {
      alertContext.messages.map(msg =>
      <CSSTransition key={msg.id} timeout={200} unmountOnExit mountOnEnter classNames="fade">
        <div className={`flex my-2 flex-col w-80 bg-gray-mid border-t-4 rounded-sm shadow ${msg.type==="success"?"border-green-500":msg.type==="failure"?"border-red-500":"border-gray-light"} `}>
          <button className="self-end bg-gray-light p-1 rounded-b" onClick={()=>alertContext.removeMessage(msg.id)}>{closeSvg}</button>
          <h6 className="m-2 font-heading">{msg.message}</h6>
        </div>
      </CSSTransition>)
    }
    </TransitionGroup>
);
};

Alert.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string
};

export default Alert;
