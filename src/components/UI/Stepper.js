import React, { useState } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./animations.css"

const Step = props => {
    const [show,setShow]  = useState(false);
    return (
        <div className="flex w-full">
          <div className="flex flex-col items-center min-h-full mr-4">
            <h6 className="w-6 h-6 font-heading font-bold rounded-full flex justify-center items-center border border-orange-mid text-orange-mid">
              {props.label}
            </h6>
            <hr className="border-l border-t-0 border-orange-mid flex-grow"></hr>
          </div>
          <div className="flex flex-col mb-8 items-start">
            <button onClick={() => setShow(prevState => !prevState)} className="text-left">
              <p className="font-heading tracking-tight">{props.title}</p>
            </button>
            <CSSTransition in={show} unmountOnExit mountOnEnter timeout={200} classNames="scale-fade">
              <p className="md:px-4 md:py-2 px-2 py-1 bg-gray-mid rounded-sm shadow-sm my-1">{props.detail}</p>
            </CSSTransition>
          </div>
        </div>
    );

}
const Stepper = (props) => {
  return (
    <div className="flex flex-col my-8 w-full">
      {props.data.map((t, index) => (
          <Step label={index+1} title={t.title} detail={t.detail} />
      ))}
    </div>
  );
};

Stepper.propTypes = {
  data: PropTypes.array,
};

export default Stepper;
