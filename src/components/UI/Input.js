import React from "react";

const Input = (props) => {
  return (
    <label htmlFor={props.name} className="flex flex-col my-2">
      <p className="capitalize">{props.name}</p>
      <input {...props} className="bg-gray-mid" />
    </label>
  );
};

export default Input;
