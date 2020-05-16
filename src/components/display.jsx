import React from "react";
import Logo from "../assets/adept logo.png";
import WorldSvg from "../assets/svgs/world-map.svg";
import CurveSvg from "../assets/svgs/curve.svg";
import tsvg from "../assets/svgs/transparency.svg";
import csvg from "../assets/svgs/cost-effective.svg";
import psvg from "../assets/svgs/proficent.svg";
import fsvg from "../assets/svgs/fast-approval.svg";
import "./display.css";

const Display = (props) => {


    return (
        <div className="w-full flex flex-col items-center py-8 relative" >

            {/* background container, company key values blocks*/}
            <div className="absolute top-0 bg-gray-mid w-full overflow-hidden text-gray-dark display-back">
                <center className="mt-4 -z-20">
                    <img src={WorldSvg} alt="" className=""/>
                </center>
                <div className="xl:h-48 xl:w-48 lg:w-36 lg:h-36 md:h-36 md:w-36 w-24 h-24 absolute md:top-0 bottom-0 md:translate-y-48 md:translate-x-24 lg:translate-y-48 translate-x-24 -translate-y-64 transform xl:translate-y-32 xl:translate-x-64 shadow-lg rounded-lg xl:px-6 xl:py-4 md:px-4 md:py-4 overflow-hidden p-2" style={{backgroundColor:"#666666"}}>
                    <h4>Cost Effective</h4>
                    <img className="-z-10 top-1/5 left-1/5 absolute" src={csvg} alt="" />
                </div>
                <div className="absolute xl:h-64 xl:w-64 md:h-40 md:w-40 w-32 h-32 bottom-0 transform xl:translate-y-8 xl:translate-x-32 lg:translate-y-12 md:translate-x-4 lg:translate-x-8 md:translate-y-6 translate-x-4 -translate-y-48 shadow-lg rounded-lg overflow-hidden xl:px-6 xl:py-4 md:pl-4 md:pr-10 md:py-4 p-2 " style={{backgroundColor:"#897979"}}>
                    <img  className="top-1/5 left-1/5 absolute -z-10" src={tsvg} alt=""/>
                    <h4>Transparency and Pre-reminders</h4>
                </div>
                <div className="xl:h-48 xl:w-48 lg:w-36 lg:h-36 md:w-36 md:h-36 w-24 h-24 absolute bottom-0 right-0 transform xl:-translate-y-64 lg:-translate-x-32 md:-translate-x-16 md:-translate-y-48 -translate-x-32 -translate-y-48 xl:-translate-x-64 shadow-lg rounded-lg xl:px-6 xl:py-4 md:px-4 overflow-hidden p-2" style={{backgroundColor:"#5B7B79"}}>
                    <h4>Proficent and Skilled</h4>
                    <img  className="top-1/5 left-1/5 absolute -z-10" src={psvg} alt="" />
                </div>
                <div className="xl:h-48 xl:w-48 lg:h-40 lg:w-40 md:w-36 md:h-36 h-32 w-32 absolute bottom-0 right-0 transform xl:-translate-y-8 xl:-translate-x-32 lg:-translate-x-8 lg:translate-y-4 md:-translate-x-4 md:-translate-y-4 -translate-x-4 -translate-y-32 shadow-lg rounded-lg xl:px-6 xl:py-4 md:p-4 p-2 overflow-hidden" style={{backgroundColor:"#868686"}}>
                    <h4>Fastest Approvals</h4>
                    <img  className="top-1/5 left-1/5 absolute -z-10" src={fsvg} alt="" />
                </div>
            </div>

            {/* logo container */}
            <div className="flex flex-col items-center z-0">
                <img className="lg:w-24 md:w-20 w-16" src={Logo} alt=""></img>
                <p className="text-blue-logo font-heading font-bold">Adept Compliance Solutions</p>
            </div>

            {/* tagline container */}
            <div className="bg-blue-tag rounded-lg xl:mt-24 lg:mt-24 md:mt-48 mt-48 relative overflow-hidden shadow-lg z-0 xl:w-1/2 md:w-3/5 w-5/6">
                <div className="-z-10 w-full bottom-0 absolute">
                    <img className="w-full opacity-50" src={CurveSvg} alt=""/>
                </div>
                <div className="xl:px-32 md:px-16 px-12 xl:py-16 md:py-8 py-6 flex flex-col h-full">
                    <h1 className="font-heading font-black">CERTIFY</h1>
                    <h3 className="font-heading font-black transform md:-translate-y-4 -translate-y-3">YOUR PRODUCTS</h3>
                    <p className="">Pellentesque ac nunc fringilla, iaculis justo ac, tristique odio. Pellentingilla, iaculis justo ac, tristique odio. Pellentingilla, iaculis justo ac, tristique odio. Pellentesque id fermentum nibh, at tristique enim. Mauris id eros suscipit, </p>
                    <button onClick={()=>alert('click')} className="mt-20 px-6 py-2 bg-white text-orange-mid self-center flex-end rounded uppercase font-bold">Certify</button>
                </div>
            </div>

        </div>
        
    );
}

export default Display;