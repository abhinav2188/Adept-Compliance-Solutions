import React from "react";

const Footer = (props) => {
    return(
        <div className="w-full py-4 bg-gray-mid">
            <div className="w-11/12 mx-auto flex items-center justify-between">
                <h6 className="">copyright© <span className="text-blue-logo">Adept Compliance Solutions</span></h6>
                <h6 className="">developed by <span className="text-orange-mid">Abhinav Rastogi</span></h6>
            </div>
        </div>
    );
}

export default Footer;