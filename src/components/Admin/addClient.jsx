import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import Auth from "../layout/auth";
import ModalContext from "../../context/modalContext";
import ClientForm from "./forms/clientForm";

const AddClient = (props) => {
  const modalContext = useContext(ModalContext);
  const form = <ClientForm />;
  const showForm = () => {
    modalContext.setContent(form);
    modalContext.openModal();
  };

  return (
    <Auth>
      <Button color="primary" onClick={showForm} className="self-center">
        Add Client
      </Button>
    </Auth>
  );
};

export default AddClient;
