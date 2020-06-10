import React from "react";
import PropTypes from "prop-types";

const data = ["value1 akhdfk kasjdfm dkff", "valudkjfkdjf kjsfdkksjdfkjsdf e2", "vdfk kajfdk dfalue3", "value4"];

const HorizontalStepper = (props) => {
  return (
    <div className="w-full my-8 grid grid-cols-4">
      {data.map((d, index) => (
        <div className="flex items-center relative justify-center">
            <hr className="flex-grow border-orange-mid" />
          <h6 className="w-6 h-6 font-heading font-bold rounded-full flex justify-center items-center border border-orange-mid text-orange-mid">
            {index + 1}
          </h6>
            <hr className="flex-grow border-orange-mid" />
          <p className="absolute left-1/2 transform translate-y-8 -translate-x-1/2 text-center self-start">{d}</p>
        </div>
      ))}
    </div>
  );
};

HorizontalStepper.propTypes = {};

export default HorizontalStepper;
