import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import axios from "axios";
import Form from "../UI/form";
import Auth from "../layout/auth";
import ModalContext from "../../context/modalContext";
import withLoader from "../HOC/withLoader";
import UpdateProductForm from "./updateProductForm";

const UpdateProduct = (props) => {
  const modalContext = useContext(ModalContext);
  const form = <UpdateProductForm {...props} onUpdation={modalContext.closeModal}/>;

  const showForm = () => {
    modalContext.setContent(form, "yellow");
  };

  return (
    <Auth>
      <Button
        color="secondary"
        onClick={() => {
          showForm();
          modalContext.openModal();
        }}
      >
        edit
      </Button>
    </Auth>
  );
};

export default UpdateProduct;
