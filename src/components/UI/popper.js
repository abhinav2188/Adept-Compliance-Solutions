import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from "react-transition-group";
import "./animations.css"

const Popper = props => {
    const [show,setShow] = useState(false);
    return (
        <div className="flex flex-col relative" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            <button className="mx-2 ">
                {props.name}
            </button>
            <CSSTransition in={show} classNames="pop" mountOnEnter unmountOnExit timeout={200}>
                <div className="bg-gray-dark p-2 flex flex-col rounded absolute right-0 z-50 min-w-32">
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