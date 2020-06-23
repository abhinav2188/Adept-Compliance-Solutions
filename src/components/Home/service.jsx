import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Service = (props) => {

  return (
    <div
      className={`flex flex-col relative z-0 md:w-64 md:h-64 w-40 h-40 lg:p-4 md:p-3 p-2 bg-gray-light rounded shadow ${props.className}`}
    >
      <img
        className="w-4/5 h-4/5 -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-25"
        src={props.imgSrc}
        alt=""
      />
      <h4 className="">{props.name}</h4>
      <p className="leading-none my-1 flex-grow">{props.content}</p>
      <Link
        to={`service/${props.name}`}
        className="mt-2 border rounded-sm self-center px-1 capitalize font-heading hover:scale-110 transition transform duration-75"
      >
        <h6>Read More</h6>
      </Link>
    </div>
  );
};

export default Service;
