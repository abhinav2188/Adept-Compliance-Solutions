import React, { useState, useContext } from "react";
import axios from "axios";
import Form from "../UI/form";
import Auth from "../layout/auth";
import withLoader from "../HOC/withLoader";

const AddService = (props) => {
  async function addService(data) {
    props.setLoading(true);
    const params = new FormData();
    params.append("serviceName", data.serviceName);
    params.append("serviceHeadline", data.serviceHeadline);
    if (data.serviceLogo)
      params.append("serviceLogo", data.serviceLogo, data.serviceLogo.name);
    axios
      .post("service/", params)
      .then(() => props.setLoading(false))
      .catch((error) => props.setLoading(false));
  }

  const formAttributes = {
    serviceName: {
      value: "",
      type: "text",
    },
    serviceHeadline: {
      value: "",
      type: "text",
    },
    serviceLogo: {
      value: "",
      type: "file",
      accept: "image/*",
    },
  };

  return (
    <Auth>
      <div className="md:w-136 w-80">
        <Form
          formTitle="Add new service"
          actionString="Add"
          formAttributes={formAttributes}
          onSubmitHandler={addService}
        />
      </div>
    </Auth>
  );
};

export default withLoader(AddService, "green");
