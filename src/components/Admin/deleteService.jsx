import React from "react";
import PropTypes from "prop-types";
import Auth from "../layout/auth";
import axios from "axios";
import Button from "../UI/Button";
import withLoader from "../HOC/withLoader";

const DeleteService = (props) => {
  async function deleteService(id) {
    props.setLoading(true);
    try {
      const response = await axios.delete("service/" + id);
      console.log(response);
      props.setLoading(false);
    } catch (error) {
      props.setLoading(false);
    }
  }

  return (
    <Auth>
      <Button color="warning" onClick={() => deleteService(props.id)}>
        delete
      </Button>
    </Auth>
  );
};

DeleteService.propTypes = {
  id: PropTypes.string,
};

export default withLoader(DeleteService, "red");
