import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from "react-transition-group";
import "./animations.css"

const styles = {
    enter:"opacity-0",
    enterActive: "opacity-100 transition-all duration-200 ease-out",
    exit:"opacity-100",
    exitActive: "opacity-0 transition-all duration-200 ease-out"

}

const Popper = props => {
    const [show,setShow] = useState(false);
    return (
        <div className="flex flex-col relative" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            <button className="mx-2 ">
                <p>{props.name}</p>
            </button>
            <CSSTransition in={show} classNames="pop" mountOnEnter unmountOnExit timeout={200}>
                <div className="bg-gray-dark p-2 min-w-32 rounded absolute right-0 z-50">
                    {props.children}
                </div>
            </CSSTransition>
        </div>
    );
};

Popper.propTypes = {
    name : PropTypes.any,
};

export default Popper;