import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  return (
    <div
      className={`flex flex-col relative z-0 md:w-64 md:h-64 w-40 h-40 lg:p-4 md:p-3 p-2 bg-gray-mid rounded shadow ${props.className}`}
    >
      <img className="md:w-12 w-8 mb-1 bg-white rounded-sm" src={props.imgSrc} alt="" />
      <h4 className="">{props.name}</h4>
      <p className="leading-none my-1 flex-grow">
        {props.content.slice(0, 100)}...
      </p>
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
