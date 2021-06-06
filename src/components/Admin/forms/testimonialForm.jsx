import React, { useContext } from "react";
import PropTypes from "prop-types";
import Form from "../../UI/form";
import withLoader from "../../HOC/withLoader";
import axios from "../../../adminInstance";
import AlertContext from "../../../context/alertContext";

const TestimonialForm = ({ formData, testimonialId, ...props }) => {
  const alertContext = useContext(AlertContext);

  const formAttributes = {
    testimonialName: {
      type: "text",
      value: formData ? formData.name : "",
    },
    testimonialFeedback: {
      type: "text",
      value: formData ? formData.feedback : "",
    },
    testimonialAvatar: {
      type: "file",
      accpet: "images/*",
      value: "",
    },
  };

  async function onSubmit(data) {
    props.setLoading(true);
    const params = new FormData();
    params.append("testimonialName", data.testimonialName);
    params.append("testimonialFeedback", data.testimonialFeedback);
    if (data.testimonialAvatar)
      params.append(
        "testimonialAvatar",
        data.testimonialAvatar,
        data.testimonialAvatar.name
      );
    try {
      var response;
      if (formData)
        response = await axios.patch("testimonials/" + formData._id, params);
      else response = await axios.post("testimonials/", params);
      props.setLoading(false);
      if (formData) props.onUpdation();
      const { data, statusText } = response;
      alertContext.addMessage({
        type: "success",
        message: statusText + " : " + data,
      });
    } catch (err) {
      props.setLoading(false);
      console.log(err);
      
      const { data, statusText } = err.response;
      alertContext.addMessage({
        type: "failure",
        message: statusText + " : " + data,
      });
    }
  }

  return (
    <div className="md:w-128 w-80">
      <Form
        formAttributes={formAttributes}
        formTitle={formData ? "Update Testimonial" : "Add new Testimonial"}
        actionString={formData ? "Update" : "Add"}
        onSubmitHandler={onSubmit}
      ></Form>
    </div>
  );
};

TestimonialForm.propTypes = {
  formData: PropTypes.object,
  testimonialId: PropTypes.string,
};

export default withLoader(TestimonialForm, "green");
