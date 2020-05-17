import React,{useEffect,useState} from "react";

const Product = (props) => {
    return (
        <div className={`flex flex-col bg-gray-light rounded shodow overflow-hidden transition-all duration-100 customClass ${props.className}`}>
            <div className="xl:w-48 xl:h-48 lg:w-40 lg:h-40 md:w-32 md:h-32 w-24 h-24 bg-white overflow-hidden">

            </div>
            <div className="text-center py-2">
                <p className="">{props.productName}</p>
                <h6 className="uppercase">{props.productType}</h6>
           </div>
        </div>
        
    );
}

export default Product;