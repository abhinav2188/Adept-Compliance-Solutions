import React, { useContext } from "react";
import PropTypes from "prop-types";
import Auth from "../layout/auth";
import axios from "../../adminInstance";
import Button from "../UI/Button";
import withLoader from "../HOC/withLoader";
import AlertContext from "../../context/alertContext";

const DeleteProduct = (props) => {
  const alertContext = useContext(AlertContext);
  async function deleteProduct(id) {
    props.setLoading(true);
    try {
      const response = await axios.delete("products/" + id);
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
      <Button color="warning" onClick={() => deleteProduct(props.id)}>
        delete
      </Button>
    </Auth>
  );
};

DeleteProduct.propTypes = {
  id: PropTypes.string,
};

export default withLoader(DeleteProduct, "red");
