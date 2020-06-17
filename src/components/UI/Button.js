import React from "react";

const Button = ({ className, color, ...rest }) => {
  return (
    <button
      {...rest}
      className={`px-2 py-1 font-heading shadow rounded ${
        color === "primary"
          ? "bg-green-500 hover:bg-green-800"
          : color === "warning"
          ? "bg-red-500 hover:bg-red-800"
          : color === "secondary"
          ? "bg-yellow-500 hover:bg-yellow-800"
          : "bg-gray-light hover:bg-gray-mid"
      } mt-4 font-bold mx-1 ${className}`}
    >
      <h6>{rest.children}</h6>
    </button>
  );
};

export default Button;
