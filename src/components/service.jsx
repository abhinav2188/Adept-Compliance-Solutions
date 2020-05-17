import React from "react";

const Service = (props) => {
    return (
        <div className={`flex flex-col xl:w-64 xl:h-64 lg:w-48 lg:h-48 md:w-40 md:h-40 w-32 h-32 lg:p-4 md:p-3 p-2 bg-gray-light rounded shadow ${props.className}`}>
            <h4 className="">{props.name}</h4>
            {props.content.map((content,index)=>
                <p key={index} className="leading-none my-1">{content}</p>
            )}
        </div>
        
    );
}

export default Service;