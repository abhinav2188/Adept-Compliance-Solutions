import React from "react"
import PropTypes from "prop-types"
import { CSSTransition } from "react-transition-group"
import "./animations.css"

const closeSvg = (
  <svg className="lg:w-5 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.806 409.806" fill="white">
    <path
      d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42
			c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42
			c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132
			c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42
			c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z"
    />
  </svg>
)

const Modal = props => {
  return (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="fade"
      mountOnEnter
      unmountOnExit
    >
      <div
        className="flex flex-col fixed w-screen h-screen z-40 top-0"
        style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
      >
        <button onClick={props.close} className="self-end p-2 bg-black md:m-4 m-2">
          {closeSvg}
        </button>
        <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-50">
          {props.children}
        </div>
      </div>
    </CSSTransition>
  )
}

Modal.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.func,
}

export default Modal
