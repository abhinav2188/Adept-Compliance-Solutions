import React from "react";
import fullLogo from "../../assets/full-logo.png";
import {NavLink} from "react-router-dom";
import staticContent from "../../assets/staticContent";


const BottomNav = (props) => {
    return (
        <>
        <hr className="my-8 w-5/6 mx-auto border-t-1 border-gray-light opacity-50"/>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-4 gap-2 md:w-5/6 w-3/4 mx-auto py-8 my-8">
            <div id="contact" className="flex flex-col md:items-start items-center">
                <div className="px-8 py-2 bg-white w-48 mb-2">
                    <img className="w-full" src={fullLogo} alt="" />
                </div>
                <p className="my-1">{staticContent.companyData.name}</p>
                <p className="my-1">{staticContent.companyData.address}</p>
                <p className="my-1">{staticContent.companyData.phone}</p>
                <p className="my-1">{staticContent.companyData.email}</p>
            </div>
            <div className="flex flex-col">
                <p className="uppercase mb-2 font-heading font-bold">Services</p>
            </div>
            <div className="flex flex-col">
                <p className="uppercase mb-2 font-heading font-bold">COMPANY</p>
                <p>
                <NavLink exact to="/about">About</NavLink> 
                </p>
            </div>
            <form className="flex flex-col text-left bg-gray-mid p-4 rounded">
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