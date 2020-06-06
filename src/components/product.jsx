import React from "react";

const Product = (props) => {
    return (
    <div className={`flex flex-col bg-gray-light rounded shodow overflow-hidden transition-all duration-100 customClass transform ${props.className} `}>
        <div className="xl:w-48 xl:h-48 lg:w-40 lg:h-40 md:w-32 md:h-32 w-24 h-24 bg-white overflow-hidden">
            <img className="w-full h-full" src={props.productImage} alt="" />
        </div>
        <p className="py-1 self-center">{props.productName}</p>
    </div>
        );
}

export default Product;