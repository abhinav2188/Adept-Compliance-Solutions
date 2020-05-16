import React,{useEffect,createRef,useState} from "react";
import Logo from "../assets/adept logo.png";
import WorldSvg from "../assets/svgs/world-map.svg";
import CurveSvg from "../assets/svgs/curve.svg";
import tsvg from "../assets/svgs/transparency.svg";
import csvg from "../assets/svgs/cost-effective.svg";
import psvg from "../assets/svgs/proficent.svg";
import fsvg from "../assets/svgs/fast-approval.svg";
import "./display.css";

const Display = (props) => {

    const elementRef = createRef();
    const [parallax,setParallax] = useState(null);
    useEffect(()=>{
        console.log(elementRef.current);
        // new Parallax(elementRef.current,{
        //     relativeInput:true
        // });

        // return () => {
        //     parallax.disable();
        //     setParallax(null);
        // }
    },[]);

    return (
        <div className="w-full flex flex-col items-center py-8 relative" ref={elementRef}>
            <div className="z-0 absolute top-0 bg-gray-mid w-full overflow-hidden" style={{height:"36rem"}} dataDepth="0.5">
                <center className="mt-4">
                    <img src={WorldSvg} alt="" className=""/>
                </center>
                <div className="lg:h-48 lg:w-48 md:h-32 md:w-32 w-24 h-24 absolute md:top-0 bottom-0 md:translate-y-48 md:translate-x-24 translate-x-24 -translate-y-64 transform lg:translate-y-32 lg:translate-x-64 shadow-lg rounded-lg lg:px-6 lg:py-4 md:px-4 md:py-4 overflow-hidden p-2" style={{backgroundColor:"#666666"}}>
                    <h4>Cost Effective</h4>
                    <img className="-z-10 top-1/5 left-1/5 absolute" src={csvg} alt="" />
                </div>
                <div className="absolute lg:h-64 lg:w-64 md:h-48 md:w-48 w-32 h-32 bottom-0 transform lg:translate-y-8 lg:translate-x-32 md:translate-x-2 md:translate-y-0 translate-x-4 -translate-y-48 shadow-lg rounded-lg overflow-hidden lg:px-6 lg:py-4 md:pl-4 md:pr-10 md:py-4 p-2 " style={{backgroundColor:"#897979"}}>
                    <img  className="top-1/5 left-1/5 absolute -z-10" src={tsvg} alt=""/>
                    <h4>Transparency and Pre-reminders</h4>
                </div>
                <div className="lg:h-48 lg:w-48 md:w-32 md:h-32 w-24 h-24 absolute bottom-0 right-0 transform lg:-translate-y-64 md:-translate-x-16 md:-translate-y-48 -translate-x-32 -translate-y-64 lg:-translate-x-64 shadow-lg rounded-lg lg:px-6 lg:py-4 md:px-4 overflow-hidden p-2" style={{backgroundColor:"#5B7B79"}}>
                    <h4>Proficent and Skilled</h4>
                    <img  className="top-1/5 left-1/5 absolute -z-10" src={psvg} alt="" />
                </div>
                <div className="lg:h-48 lg:w-48 md:w-32 md:h-32 h-32 w-32 absolute bottom-0 right-0 transform lg:-translate-y-8 lg:-translate-x-32 md:-translate-x-4 md:-translate-y-8 -translate-x-4 -translate-y-48 shadow-lg rounded-lg lg:px-6 lg:py-4 md:p-4 p-2 overflow-hidden" style={{backgroundColor:"#868686"}}>
                    <h4>Fastest Approvals</h4>
                    <img  className="top-1/5 left-1/5 absolute -z-10" src={fsvg} alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center z-10" dataDepth="0.8">
                <img className="w-24" src={Logo} alt=""></img>
                <p className="text-blue-logo font-heading font-bold">Adept Compliance Solutions</p>
            </div>
                {/* tagline container */}
                <div className="bg-blue-tag rounded-lg lg:mt-24 md:mt-48 mt-48 relative overflow-hidden shadow-lg z-10 lg:w-1/2 md:w-3/5 w-5/6">
                    <div className="z-0 w-full bottom-0 absolute">
                        <img className="w-full opacity-50" src={CurveSvg} alt=""/>
                    </div>
                    <div className="lg:px-32 md:px-16 px-12 lg:py-16 md:py-8 py-6 flex flex-col h-full">
                        <h1 className="font-heading font-black">CERTIFY</h1>
                        <h3 className="font-heading font-black transform md:-translate-y-4 -translate-y-3">YOUR PRODUCTS</h3>
                        <p className="">Pellentesque ac nunc fringilla, iaculis justo ac, tristique odio. Pellentingilla, iaculis justo ac, tristique odio. Pellentingilla, iaculis justo ac, tristique odio. Pellentesque id fermentum nibh, at tristique enim. Mauris id eros suscipit, </p>
                        <button onClick={()=>alert('click')} className="mt-16 z-20 px-6 py-2 bg-white text-orange-mid self-center flex-end rounded uppercase font-bold">Certify</button>
                    </div>
                </div>

        </div>
        
    );
}

export default Display;