import React, { useState } from "react";
import PropTypes from "prop-types";
import productSvg from "../../assets/svgs/product.svg";
// import { CSSTransition } from "react-transition-group";
import "../UI/animations.css";
import Button from "../UI/Button";

const Product = (props) => {
  const [detailView, setDetailView] = useState(false);
  return (
    <div
      className={`flex p-2 transition-all duration-200 rounded bg-gray-light hover:bg-gray-mid`}
      onClick={() => setDetailView((prevState) => !prevState)}
    >
      <img
        className="bg-gray-100 mr-4 rounded md:w-12 md:h-12 h-10 w-10"
        src={props.productImageUrl ? props.productImageUrl : productSvg}
        alt=""
      />
      <div className="flex flex-col">
        <p className="lowercase font-heading">{props.productName}</p>
        <div className="flex tracking-wide uppercase items-center">
          <p>{props.productISN}</p>
          <hr className="md:h-5 h-4 border-l border-white mx-2"/>
          <p>{props.dataOfImplementation}</p>
        </div>
        {/* <CSSTransition
          in={detailView}
          unmountOnExit
          mountOnEnter
          classNames="scale-fade"
          timeout={200}
        >
          <p>{props.productDetails}</p>
        </CSSTransition> */}
      </div>
    </div>
  );
};

Product.propTypes = {
  productName: PropTypes.string,
  productImageUrl: PropTypes.string,
  productISN: PropTypes.string,
  productDetails: PropTypes.string,
  dataOfImplementation: PropTypes.string
};

export default Product;
