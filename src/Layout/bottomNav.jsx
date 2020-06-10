import React from "react";
import fullLogo from "../assets/full-logo.png";
import {NavLink} from "react-router-dom";

const cred = {
    phone:"+91-9999-39-2077",
    email:"info@adeptcs.in",
    address:"69, Goyla Khurd Village, South West Delhi, Delhi, 110071"
}
const mainNavlinks = [
    {
        link:"/",
        name:"Home"
    },
    {
        link:"/about",
        name:"About"
    },
    {
        link:"/downloads",
        name:"Downloads"
    },
    {
        link:"/clients",
        name:"clients"
    },
    {
        link:"/updates",
        name:"updates"
    },

];
const serviceLinks = [
    {
        link:"/services/service1",
        name:"service1"
    },
    {
        link:"/services/service2",
        name:"service3"
    },
    {
        link:"/services/service3",
        name:"service3"
    },
    {
        link:"/services/service4",
        name:"service4"
    },
    {
        link:"/services/service5",
        name:"service5 BSI Registration"
    },
];


const BottomNav = (props) => {
    return (
        <>
        <hr className="my-8 w-5/6 mx-auto border-t-1 border-gray-light opacity-50"/>
        <div className="flex md:w-5/6 w-3/4 mx-auto py-8 my-8">
            <div className="flex flex-col md:items-start items-center max-w-1/4 lg:mr-4 md:mr-3 mr-2">
                <div className="px-8 py-2 bg-white lg:w-48 md:w-36 w-24 mb-2">
                    <img className="w-full" src={fullLogo} alt="" />
                </div>
                <p className="my-1">Adept Compliance Solutions</p>
                <p className="my-1">{cred.address}</p>
                <p className="my-1">{cred.phone}</p>
                <p className="my-1">{cred.email}</p>
            </div>
            <div className="flex flex-col max-w-1/4 lg:mr-4 md:mr-3 mr-2">
                <p className="uppercase mb-2 font-heading font-bold">Services</p>
            </div>
            <div className="flex flex-col max-w-1/4 lg:mr-4 md:mr-3 mr-2">
                <p className="uppercase mb-2 font-heading font-bold">COMPANY</p>
                <p>
                <NavLink exact to="/about">About</NavLink> 
                </p>
            </div>
            <form className="flex flex-col text-left bg-gray-mid p-4 rounded flex-grow">
                <p className="uppercase mb-2 font-heading font-bold">Query?</p>
                <p className="flex flex-col my-1">
                    Name
                    <input className="focus:outline-none px-1 bg-gray-light rounded-sm" name="name"/>
                </p>
                <p className="flex flex-col my-1">
                    Email
                    <input className="focus:outline-none px-1 bg-gray-light rounded-sm" name="email"/>
                </p>
                <p className="flex flex-col my-1">
                    Query Message
                    <textarea className="focus:outline-none bg-gray-light rounded-sm resize-none px-1" name="query"/>
                </p>
                <button type="submit" className="px-2 rounded-sm border my-2 self-center">
                <p>submit</p></button>
            </form>
        </div>
      </>  
    );
}

export default BottomNav;