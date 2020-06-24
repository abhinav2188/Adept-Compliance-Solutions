import React from "react";
import PropTypes from "prop-types";
import Auth from "../layout/auth";
import axios from "axios";
import Button from "../UI/Button";
import withLoader from "../HOC/withLoader";

const DeleteClient = (props) => {
  async function deleteClient(id) {
    props.setLoading(true);
    try {
      const response = await axios.delete("clients/" + id);
      props.setLoading(false);
    } catch (error) {
      props.setLoading(false);
    }
  }

  return (
    <Auth>
      <Button color="warning" onClick={() => deleteClient(props.id)}>
        delete
      </Button>
    </Auth>
  );
};

DeleteClient.propTypes = {
  id: PropTypes.string,
};

export default withLoader(DeleteClient, "red");
