import React from "react";
import staticContent from "../../assets/staticContent";
import logo from "../../assets/adept logo.png"

const about = () => {
  return (
    <div className="my-8 py-8 lg:w-2/3 md:w-3/4 w-5/6 bg-gray-mid px-8 flex flex-col mx-auto rounded-lg relative z-0">
    <img src={logo} alt="" className="-z-10 absolute lg:w-64 md:w-72 w-1/2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-25"/>
       <h2 className="font-heading self-center font-bold mb-8">{staticContent.about.title}</h2>
      {
          staticContent.about.content.map( c => <p className="mb-2 tracking-wide">{c}</p>)
      }
      <button className="self-center md:px-4 md:py-2 px-2 py-1 border rounded shadow border-orange-mid mt-4 text-orange-mid font-heading uppercase animation-scale">
        <h6>read more</h6>
      </button>
      
    </div>
  );
};

export default about;
