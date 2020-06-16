import React, { useState } from "react";
import PropTypes from "prop-types";
import productSvg from "../../assets/svgs/product.svg";
import { CSSTransition } from "react-transition-group";
import "../UI/animations.css";

const Product = (props) => {
  const [detailView, setDetailView] = useState(false);
  return (
    <div
      className={`flex flex-col p-1 transition-all duration-200 rounded ${detailView?"bg-gray-light":""}`}
      onClick={() => setDetailView((prevState) => !prevState)}
    >
      <div className="flex">
        <img
          className="bg-gray-100 mr-4 rounded w-12 h-12"
          src={props.productImageUrl ? props.productImageUrl : productSvg}
          alt=""
        />
        <div className="flex flex-col">
          <h4 className="leading-none">{props.productName}</h4>
          <p className="tracking-wide">{props.productISN}</p>
        </div>
      </div>
      <CSSTransition
        in={detailView}
        unmountOnExit
        mountOnEnter
        classNames="scale-fade"
        timeout={200}
      >
        <p>{props.productDetails}</p>
      </CSSTransition>
    </div>
  );
};

Product.propTypes = {
  productName: PropTypes.string,
  productImageUrl: PropTypes.string,
  productISN: PropTypes.string,
  productDetails: PropTypes.string,
};

export default Product;
