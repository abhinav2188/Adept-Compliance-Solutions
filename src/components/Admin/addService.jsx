import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import Auth from "../layout/auth";
import ModalContext from "../../context/modalContext";
import ServiceForm from "./forms/serviceForm";

const UpdateService = (props) => {
  const modalContext = useContext(ModalContext);
  const form = <ServiceForm />;
  const showForm = () => {
    modalContext.setContent(form);
    modalContext.openModal();
  };

  return (
    <Auth>
      <Button color="primary" onClick={showForm} className="self-center">
        Add Service
      </Button>
    </Auth>
  );
};

export default UpdateService;
