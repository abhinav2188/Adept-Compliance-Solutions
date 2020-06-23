import React from 'react';
import "./spinner.css";

const spinner = (props) => {
    return (
        <div className="w-6 h-6 border-4 rounded-full border-gray-mid shadow-sm spin"
        style={{borderTopColor:props.color?props.color:"blue"}}></div>
    );
}

export default spinner;