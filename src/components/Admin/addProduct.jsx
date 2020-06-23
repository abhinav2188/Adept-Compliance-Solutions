import React, { useContext } from "react";
import Button from "../UI/Button";
import Auth from "../layout/auth";
import ModalContext from "../../context/modalContext";
import ProductForm from "./forms/productForm";

const AddProduct = (props) => {
  const modalContext = useContext(ModalContext);
  const form = <ProductForm serviceId={props.serviceId}/>
  const showForm = () => {
    modalContext.setContent(form, "green");
    modalContext.openModal();
  };

  return (
    <Auth>
      <Button color="primary" onClick={showForm} className="self-center">
        Add product
      </Button>
    </Auth>
  );
};

export default AddProduct;
