import React, { useState } from "react";
import PropTypes from "prop-types";
import productSvg from "../../assets/svgs/product.svg";
// import { CSSTransition } from "react-transition-group";
import "../UI/animations.css";

const Product = (props) => {
  const [detailView, setDetailView] = useState(false);
  return (
    <div
      className="flex transition-all duration-200 rounded border-2 border-gray-mid items-center"
      onClick={() => setDetailView((prevState) => !prevState)}
    >
      <div className="h-full bg-gray-mid mr-4 border-r-2 border-gray-mid">
        <img
          className="md:w-12 md:h-12 h-10 w-10 rounded-l bg-gray-mid "
          src={props.productImageUrl ? props.productImageUrl : productSvg}
          alt=""
        />
      </div>
      <div className="flex flex-col h-full justify-center leading-none">
        <p className="">{props.productName}</p>
        <div className="flex tracking-wide items-center mt-1">
          <p>{props.productISN}</p>
          {props.dataOfImplementation ? (
            <>
              <hr className="md:h-4 h-3 border-l border-white mx-2" />
              <p>{props.dataOfImplementation}</p>
            </>
          ) : (
            ""
          )}
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
  dataOfImplementation: PropTypes.string,
};

export default Product;
