import React,{useState} from "react";
import productVector from "../assets/svgs/product-vector.svg";
import Product from "./product";
import Next from "../assets/svgs/next.svg";
import Prev from "../assets/svgs/prev.svg";
import {changeActiveElements} from "../carousel";
import Transition from "react-transition-group/Transition";

const smclass = "transform lg:translate-x-0 translate-x-16";
const productContent = [
    {
        productName:"Product1",
        productType:"Bsi Registration"
    },
    {
        productName:"Product2",
        productType:"Bsi Registration"
    },
    {
        productName:"Product3",
        productType:"Bsi Registration"
    },
    {
        productName:"Product4",
        productType:"Bsi Registration"
    },
    {
        productName:"Product5",
        productType:"Bsi Registration"
    },
    {
        productName:"Product6",
        productType:"Bsi Registration"
    },
    {
        productName:"Product7",
        productType:"Bsi Registration"
    },
    {
        productName:"Product8",
        productType:"Bsi Registration"
    },
    {
        productName:"Product9",
        productType:"Bsi Registration"
    },
    {
        productName:"Product10",
        productType:"Bsi Registration"
    },
    {
        productName:"Product11",
        productType:"Bsi Registration"
    },
    {
        productName:"Product12",
        productType:"Bsi Registration"
    },
    {
        productName:"Product13",
        productType:"Bsi Registration"
    },
];

const Products = (props) => {

    const [activeProductsIndex,setActiveProductsIndex] = useState([0,1,2,3]);
    const [activeProducts,setActiveProducts] = useState([...productContent.slice(0,4)]);
    const changeActiveProducts = (activeProductIndexArray,next) => {
        changeActiveElements(productContent,activeProductIndexArray,next,(x,y) =>{setActiveProductsIndex(x); setActiveProducts(y)});
    }

    return (
        <div className="w-full relative py-8 flex flex-col z-0 my-8">
            <img className="-z-10 absolute top-0 right-0 lg:w-1/4 md:w-2/5 w-1/2 transform lg:translate-y-0 translate-y-8" src={productVector} alt=""/>
            <h2 className="font-heading self-center font-bold xl:mt-8">Our Products</h2>
            <div className="z-0 self-start xl:mt-32 md:mt-24 mt-24 grid lg:grid-cols-4 grid-cols-2 xl:gap-8 lg:gap-6 md:gap-4 gap-2 xl:pl-32 lg:pl-24 md:pl-16 pl-4">
            {
                activeProducts.map((product,index)=>(
                    <Product key={index} productName={product.productName} productType={product.productType} className={index==2||index==3?smclass:""} />
                ))
            }
            </div>
            <div className="self-center mt-16">
                <button onClick={()=>changeActiveProducts(activeProductsIndex,false)} className="border lg:m-2 m-1 border-orange-mid rounded-full lg:p-2 p-1">
                <img className="h-4" src={Prev} alt="" />
                </button>
                <button onClick={()=>changeActiveProducts(activeProductsIndex,true)} className="border lg:m-2 m-1 border-orange-mid rounded-full lg:p-2 p-1">
                <img className="h-4" src={Next} alt="" />
                </button>
            </div>
        </div>
    );
}

export default Products;