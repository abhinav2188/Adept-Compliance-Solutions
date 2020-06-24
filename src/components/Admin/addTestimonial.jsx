import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import Auth from "../layout/auth";
import ModalContext from "../../context/modalContext";
import TestimonialForm from "./forms/testimonialForm";

const AddTestimonial = (props) => {
  const modalContext = useContext(ModalContext);
  const form = <TestimonialForm />;
  const showForm = () => {
    modalContext.setContent(form);
    modalContext.openModal();
  };

  return (
    <Auth>
      <Button color="primary" onClick={showForm} className="self-center">
        Add Testimonial
      </Button>
    </Auth>
  );
};

export default AddTestimonial;
