import React from "react";

const Testimonial = (props) => {
    return (
        <div className="lg:w-80 lg:h-40 md:w-72 md:h-40 w-64 h-36 bg-gray-light flex flex-col lg:p-4 md:p-3 p-2 rounded shadow">
            <div className="flex lg:mb-4 md:mb-3 mb-2 items-center">
                <img className="w-6 h-6 rounded-full bg-white mr-4" src="https://picsum.photos/200" alt=""/>
                <p className="uppercase">{props.name}</p>
            </div>
            <p className="leading-none">{props.comment}</p>
        </div>
        
    );
}

export default Testimonial;