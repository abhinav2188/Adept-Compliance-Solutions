import React from "react";
import productVector from "../../assets/svgs/product-vector.svg";
import CarouselCard from "../UI/carouselCard";

const Product = (props) => {
  return (
    <div
      className={`flex flex-col bg-gray-light hover:bg-gray-mid rounded shodow overflow-hidden transition-all duration-100 customClass transform ${props.className} `}
    >
      <div className="xl:w-48 xl:h-48 lg:w-40 lg:h-40 md:w-32 md:h-32 w-24 h-24 bg-white overflow-hidden">
        <img className="w-full h-full" src={props.productImage} alt="" />
      </div>
      <p className="py-1 self-center">{props.productName}</p>
    </div>
  );
};

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
    productName: "Product1",
    productType: "Bsi Registration",
  },
  {
    productName: "Product2",
    productType: "Bsi Registration",
  },
  {
    productName: "Product3",
    productType: "Bsi Registration",
  },
  {
    productName: "Product4",
    productType: "Bsi Registration",
  },
  {
    productName: "Product5",
    productType: "Bsi Registration",
  },
  {
    productName: "Product6",
    productType: "Bsi Registration",
  },
  {
    productName: "Product7",
    productType: "Bsi Registration",
  },
  {
    productName: "Product8",
    productType: "Bsi Registration",
  },
  {
    productName: "Product9",
    productType: "Bsi Registration",
  },
  {
    productName: "Product10",
    productType: "Bsi Registration",
  },
  {
    productName: "Product11",
    productType: "Bsi Registration",
  },
  {
    productName: "Product12",
    productType: "Bsi Registration",
  },
  {
    productName: "Product13",
    productType: "Bsi Registration",
  },
];

const productList = productContent.map((product) => (
  <Product
    productName={product.productName}
    productType={product.productType}
  />
));

const Products = (props) => {
  return (
    <div className="w-full relative py-8 flex flex-col z-0 my-8">
      <img
        className="-z-10 absolute top-0 right-0 lg:w-1/3 md:w-1/2 w-1/2 transform lg:-translate-y-32 -translate-y-12"
        src={productVector}
        alt=""
      />
      <h2 className="font-heading self-center font-bold xl:mt-8">
        Our Products
      </h2>
      <div class="self-start lg:ml-48 ml-12 grid lg:grid-cols-3 lg:gap-8 md:gap-4 grid-cols-2 gap-2 mt-16">
        <CarouselCard
          elementList={productList}
          className={childClasses[0]}
          staticTitle="WPC Approval"
        />
        <CarouselCard
          elementList={productList}
          className={childClasses[1]}
          staticTitle="BSI Registration"
        />
        <CarouselCard
          elementList={productList}
          className={childClasses[2]}
          staticTitle="TPR Approval"
        />
        <CarouselCard
          elementList={productList}
          className={childClasses[3]}
          staticTitle="Toy Registration"
        />
        <CarouselCard
          elementList={productList}
          className={childClasses[4]}
          staticTitle="ISI Marking"
        />
        <CarouselCard
          elementList={productList}
          className={childClasses[5]}
          staticTitle="ABX Registry"
        />
      </div>
    </div>
  );
};

export default Products;
