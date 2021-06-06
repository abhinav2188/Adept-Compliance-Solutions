import React, { useContext } from "react";
import PropTypes from "prop-types";
import Form from "../../UI/form";
import withLoader from "../../HOC/withLoader";
import axios from "../../../adminInstance";
import AlertContext from "../../../context/alertContext";

const ClientForm = ({ formData, ClientId, ...props }) => {
  const alertContext = useContext(AlertContext);

  const formAttributes = {
    clientName: {
      type: "text",
      value: formData ? formData.name : "",
    },
    clientLogo: {
      type: "file",
      accpet: "images/*",
      value: "",
    },
  };

  async function onSubmit(data) {
    props.setLoading(true);
    const params = new FormData();
    params.append("clientName", data.clientName);
    if (data.clientLogo)
      params.append("clientLogo", data.clientLogo, data.clientLogo.name);

    try {
      var response;
      if (formData)
        response = await axios.patch("clients/" + formData._id, params);
      else response = await axios.post("clients/", params);
      props.setLoading(false);
      if (formData) props.onUpdation();
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
    <div className="md:w-128 w-80">
      <Form
        formAttributes={formAttributes}
        formTitle={formData ? "Update Client" : "Add new Client"}
        actionString={formData ? "Update" : "Add"}
        onSubmitHandler={onSubmit}
      ></Form>
    </div>
  );
};

ClientForm.propTypes = {
  formData: PropTypes.object,
  ClientId: PropTypes.string,
};

export default withLoader(ClientForm, "green");
