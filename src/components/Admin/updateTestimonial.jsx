import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import Auth from "../layout/auth";
import ModalContext from "../../context/modalContext";
import TestimonialForm from "./forms/testimonialForm";

const UpdateTestimonial = (props) => {
  const modalContext = useContext(ModalContext);
  const form = (
    <TestimonialForm
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
      <Button color="secondary" onClick={showForm} className="self-center">
        edit
      </Button>
    </Auth>
  );
};

export default UpdateTestimonial;
