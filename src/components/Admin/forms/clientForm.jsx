import React from "react";
import PropTypes from "prop-types";
import Form from "../../UI/form";
import withLoader from "../../HOC/withLoader";
import axios from "axios";

const ClientForm = ({ formData, ClientId, ...props }) => {
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
      params.append(
        "clientLogo",
        data.clientLogo,
        data.clientLogo.name
      );
    try {
      if (formData) await axios.patch("clients/" + formData._id, params);
      else await axios.post("clients/", params);
      props.setLoading(false);
      if (formData) props.onUpdation();
    } catch (err) {
      props.setLoading(false);
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
