import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import Auth from "../layout/auth";
import ModalContext from "../../context/modalContext";
import ServiceForm from "./forms/serviceForm";

const UpdateService = (props) => {
  const modalContext = useContext(ModalContext);
  const form = (
    <ServiceForm
      formData={props.formData}
      onUpdation={modalContext.closeModal}
    />
  );
  const showForm = () => {
    modalContext.setContent(form);
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

export default UpdateService;
