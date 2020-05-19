import React from "react";

const Client = (props) => {
    return (
        <div className="xl:px-8 lg:px-6 md:px-4 px-2 lg:min-w-1/4 md:min-w-1/3 min-w-1/2">
            <img className={`w-full rounded-sm ${props.logoSrc?"":"min-h-24 bg-white "}`} src={props.logoSrc} alt="" />
        </div>
        
    );
}

export default Client;