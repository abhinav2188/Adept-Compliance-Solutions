import React from "react";
import PropTypes from "prop-types";
import Carousel from "./carousel";

const CarouselCard = (props) => {
  return (
    <div className={`flex flex-col overflow-x-hidden xl:w-48 lg:w-40 md:w-32 w-24 items-center ${props.className}`}>
      <Carousel
        elements={props.elementList}
        activeIndex={[0]}
        automate
      />
      <p className="font-heading font-bold mt-2 text-center">{props.staticTitle}</p>
    </div>
  );
};

CarouselCard.propTypes = {
  staticTitle : PropTypes.string,
  elementList: PropTypes.array,
  className: PropTypes.string
};

export default CarouselCard;
