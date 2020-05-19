import React,{useEffect} from "react";
import "./clients.css";
import Client from "./client";
import vector3 from "../assets/svgs/vector-3.svg";

const Clients = (props) => {
    const logosRef = React.createRef();
    useEffect(()=>{
        console.log(logosRef.current);
    },[]);
    return (
        <div className="flex flex-col w-full py-8 z-0 relative">
            <img className="-z-10 absolute top-0 lg:w-1/4 md:w-2/5 w-1/2 transform lg:-translate-y-64 -translate-y-32 " src={vector3} alt=""/>

            <h2 className="font-heading self-center font-bold xl:mt-8">Whom we worked for?</h2>
            <p className="font-heading self-center font-bold">Join these multi national companies.</p>
            <div className="flex lg:w-2/3 w-3/4 py-8 overflow-x-scroll mx-auto items-center mt-16" ref={logosRef}>
                <Client logoSrc="https://picsum.photos/200"/>
                <Client />
                <Client />
                <Client />
                <Client />
                <Client />
            </div>
            <p className="font-heading self-center font-bold mt-16">Want us to work for you?</p>
            <button className="self-center md:px-4 md:py-2 px-2 py-1 border rounded shadow border-orange-mid mt-4 text-orange-mid font-heading uppercase animation-scale">
                <h6>Let us know!</h6>
            </button>


        </div>
        
    );
}

export default Clients;