import React,{useContext} from "react";
import PropTypes from "prop-types";
import Auth from "../layout/auth";
import axios from "axios";
import Button from "../UI/Button";
import withLoader from "../HOC/withLoader";

import AlertContext from "../../context/alertContext";

const DeleteClient = (props) => {
  const alertContext = useContext(AlertContext);
  async function deleteClient(id) {
    props.setLoading(true);
    try {
      const response = await axios.delete("clients/" + id);
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
