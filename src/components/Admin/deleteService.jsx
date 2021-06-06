import React, { useContext } from "react";
import PropTypes from "prop-types";
import Auth from "../layout/auth";
import axios from "../../adminInstance";
import Button from "../UI/Button";
import withLoader from "../HOC/withLoader";
import AlertContext from "../../context/alertContext";

const DeleteService = (props) => {
  const alertContext = useContext(AlertContext);

  async function deleteService(id) {
    props.setLoading(true);
    try {
      const response = await axios.delete("service/" + id);
      console.log(response);
      props.setLoading(false);
      const {data,statusText} = response;
      alertContext.addMessage({
        type:"success",
        message:statusText+" : "+data
      })

    } catch (err) {
      props.setLoading(false);
      const {data,statusText} = err.response;
      alertContext.addMessage({
        type:"failure",
        message:statusText+" : "+data
      })
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
