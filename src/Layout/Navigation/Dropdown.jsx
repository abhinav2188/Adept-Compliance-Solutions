import React,{useState} from "react";
import Transition from "react-transition-group/Transition";
import { prettyDOM } from "@testing-library/react";

const styles = {
    entering:"opacity-0 -translate-y-8",
    entered:"opacity-100 translate-y-6",
    exiting:"opacity-100 translate-y-6",
    exited:"opacity-0 -translate-y-8"
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

    const dropdownContent = 
    <Transition in={show} timeout={200} mountOnEnter unmountOnExit>
        { state => 
            <div className={`flex flex-col p-2 ${styles[state]} transition-all duration-200 ease-out ${props.right?"-translate-x-24":""} ${props.inline?"":"z-30 absolute min-w-32 bg-gray-dark rounded shadow transform "} `}>
                {props.children}
            </div>
        }
    </Transition>

    return (

        props.hoverable ? 
        <div className="flex flex-col" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            <button className="mx-2">
                <p>{props.name}</p>
            </button>
            {dropdownContent}
        </div>:
         <>
         <button className="mx-2 flex items-center py-2" onClick={() => setShow(prevState => !prevState)}>
             <p>{props.name}</p>
             {icon}
         </button>
         {dropdownContent}
         </>
        
    );
}

export default Dropdown;