import React from "react";
import PropTypes from "prop-types";
import Carousel from "./UI/carousel";

const ProductsCard = (props) => {
  return (
    <div className={`flex flex-col overflow-x-hidden xl:w-48 lg:w-40 md:w-32 w-24 items-center ${props.className}`}>
      <Carousel
        elements={props.productList}
        activeIndex={[0]}
        automate
      />
      <p className="font-heading font-bold mt-2 text-center">{props.serviceName}</p>
    </div>
  );
};

ProductsCard.propTypes = {
  serviceName : PropTypes.string,
  productList: PropTypes.array,
  className: PropTypes.string
};

export default ProductsCard;
