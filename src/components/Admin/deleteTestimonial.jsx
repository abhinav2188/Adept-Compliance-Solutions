import React,{useContext} from "react";
import PropTypes from "prop-types";
import Auth from "../layout/auth";
import axios from "axios";
import Button from "../UI/Button";
import withLoader from "../HOC/withLoader";
import AlertContext from "../../context/alertContext";

const DeleteTestimonial = (props) => {
  const alertContext = useContext(AlertContext);
  async function deleteTestimonial(id) {
    props.setLoading(true);
    try {
      const response = await axios.delete("testimonials/" + id);
      props.setLoading(false);
      const { data, statusText } = response;
      alertContext.addMessage({
        type: "success",
        message: statusText + " : " + data,
      });
    } catch (err) {
      props.setLoading(false);
      const { data, statusText } = err.response;
      alertContext.addMessage({
        type: "failure",
        message: statusText + " : " + data,
      });
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
