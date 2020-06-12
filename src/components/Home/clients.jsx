import React from "react";
import vector3 from "../../assets/svgs/vector-3.svg";

const Client = (props) => {
  return (
      <div className="xl:px-8 lg:px-6 md:px-4 px-2 lg:min-w-1/4 md:min-w-1/3 min-w-1/2">
          <img className={`w-full rounded-sm ${props.logoSrc?"":"min-h-24 bg-white "}`} src={props.logoSrc} alt="" />
      </div>
  );
}


const Clients = (props) => {
  return (
    <div className="flex flex-col w-full py-8 z-0 relative my-8">
      <img
        className="-z-10 absolute top-0 lg:w-1/4 md:w-2/5 w-1/2 transform lg:-translate-y-64 -translate-y-32 "
        src={vector3}
        alt=""
      />

      <h2 className="font-heading self-center font-bold xl:mt-8">
        Whom we worked for?
      </h2>
      <p className="font-heading self-center font-bold">
        Join these multi national companies.
      </p>
      <div className="flex lg:w-2/3 w-3/4 py-8 overflow-x-scroll mx-auto items-center mt-16">
      <Client />
      <Client />
      <Client />
      <Client />
      <Client />
      <Client />
      </div>
      <p className="font-heading self-center font-bold lg:mt-24 mt-16">
        Want us to work for you?
      </p>
      <button className="self-center md:px-4 md:py-2 px-2 py-1 border rounded shadow border-orange-mid mt-4 text-orange-mid font-heading uppercase animation-scale">
        <h6>Let us know!</h6>
      </button>
    </div>
  );
};

export default Clients;
