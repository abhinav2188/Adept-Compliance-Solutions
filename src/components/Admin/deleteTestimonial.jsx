import React from "react";
import PropTypes from "prop-types";
import Auth from "../layout/auth";
import axios from "axios";
import Button from "../UI/Button";
import withLoader from "../HOC/withLoader";

const DeleteTestimonial = (props) => {
  async function deleteTestimonial(id) {
    props.setLoading(true);
    try {
      const response = await axios.delete("testimonials/" + id);
      props.setLoading(false);
    } catch (error) {
      props.setLoading(false);
    }
  }

  return (
    <Auth>
      <Button color="warning" onClick={() => deleteTestimonial(props.id)}>
        delete
      </Button>
    </Auth>
  );
};

DeleteTestimonial.propTypes = {
  id: PropTypes.string,
};

export default withLoader(DeleteTestimonial, "red");
