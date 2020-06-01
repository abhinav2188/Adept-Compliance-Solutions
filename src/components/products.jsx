import React,{useState} from "react";
import productVector from "../assets/svgs/product-vector.svg";
import Product from "./product";
import Carousel from "./UI/carousel";

const childClasses = [
    "",
    "",
    "transform lg:translate-x-0 translate-x-20",
    "transform lg:translate-x-24 translate-x-20",
    "transform lg:translate-x-24 translate-x-0",
    "transform lg:translate-x-24 translate-x-0",
];

const productContent = [
    {
        productName:"Product1",
        productType:"Bsi Registration",  
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

const productList = [];
productContent.map( product => (
    productList.push(
        <Product productName={product.productName} productType={product.productType} />
    )
));

const Products = (props) => {

    return (
        <div className="w-full relative py-8 flex flex-col z-0 my-8">
            <img className="-z-10 absolute top-0 right-0 lg:w-1/3 md:w-1/2 w-1/2 transform lg:-translate-y-32 -translate-y-12" src={productVector} alt=""/>
            <h2 className="font-heading self-center font-bold xl:mt-8">Our Products</h2>
            <Carousel elements={productList} activeIndex={[0,1,2,3,4,5]} parentClass="self-start lg:ml-48 ml-12 grid lg:grid-cols-3 lg:gap-8 md:gap-4 grid-cols-2 gap-2 mt-16" childClasses={childClasses} fade/> 

        </div>
    );
}

export default Products;