import React,{useState} from "react";
import {CSSTransition} from "react-transition-group";
import "./animations.css"

const styles = {
    enter:"opacity-0 -translate-y-8 transform ",
    enterActive:"opacity-100 transform translate-y-6 transtion-all duration-200 ease-out",
    exiting:"opacity-100 transform translate-y-6",
    exitActive:"opacity-0 -translate-y-8 transform transtion-all duration-200 ease-out"
} 



const Dropdown = (props) => {
    const [show,setShow] = useState(false);
    const icon =
    <svg className="h-3 transition duration-100 ease-out mx-1" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        {
         show?   
         <path d="M18 13.5L8.99996 4.49997L0 13.5L18 13.5Z" fill="white"/>:
         <path d="M0 4.5L9.00004 13.5L18 4.5H0Z" fill="white"/>
        }
    </svg>


    return (

        props.hoverable ? 
        <div className="flex flex-col" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            <button className="mx-2">
                <p>{props.name}</p>
            </button>
            <CSSTransition in={show} classNames="fade" mountOnEnter unmountOnExit timeout={200}>
                <div className={`flex flex-col p-2 self-end ${props.inline?"":"z-30 absolute min-w-32 bg-gray-dark rounded shadow transform "} `}>
                    {props.children}
                </div>
            </CSSTransition>
        </div>:
         <>
         <button className="mx-2 flex items-center py-2" onClick={() => setShow(prevState => !prevState)}>
             <p>{props.name}</p>
             {icon}
         </button>
         <CSSTransition in={show} classNames="fade" mountOnEnter unmountOnExit timeout={200}>
                <div className={`flex flex-col p-2 self-end ${props.right?"-translate-x-24":""} ${props.inline?"":"z-30 absolute min-w-32 bg-gray-dark rounded shadow transform "} `}>
                    {props.children}
                </div>
        </CSSTransition>
        </>
        
    );
}

export default Dropdown;