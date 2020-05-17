import React,{useEffect} from "react";
// import "./clients.css";
import Client from "./client";

const Clients = (props) => {
    const slideRef = React.createRef();
    useEffect(()=>{
        // console.log(slideRef.current.innerWidth);
    },[]);
    return (
        <div className="flex flex-col w-full py-8">
            <h2 className="font-heading self-center font-bold xl:mt-8">Whom we worked for?</h2>
            <p className="font-heading self-center font-bold xl:mt-8 transform xl:-translate-y-8">Join these mult national companies.</p>


        </div>
        
    );
}

export default Clients;