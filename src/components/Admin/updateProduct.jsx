import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import Auth from "../layout/auth";
import ModalContext from "../../context/modalContext";
import ProductForm from "./forms/productForm";

const UpdateProduct = (props) => {
  const modalContext = useContext(ModalContext);
  const form = (
    <ProductForm
      formData={props.formData}
      onUpdation={modalContext.closeModal}
      serviceId={props.serviceId}
    />
  );
  const showForm = () => {
    modalContext.setContent(form, "yellow");
    modalContext.openModal();
  };

  return (
    <Auth>
      <Button color="secondary" onClick={showForm}>
        edit
      </Button>
    </Auth>
  );
};


export default UpdateProduct;
