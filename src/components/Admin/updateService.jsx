import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import axiosInstance from "../../adminInstance";
import AuthContext from "../../context/authContext";
import Form from "../UI/form";
import PropTypes from 'prop-types';


const UpdateService = (props) => {
  const authContext = useContext(AuthContext);

  const updateService = (data) => {
    const params = new FormData();
    params.append("serviceName", data.serviceName);
    params.append("serviceHeadline", data.serviceHeadline);
    if (data.serviceLogo)
      params.append("serviceLogo", data.serviceLogo, data.serviceLogo.name);

    axiosInstance({
      method: "PATCH",
      url: "service/"+props.serviceName,
      data: params,
      headers: {
        "auth-token": authContext.token,
        "content-type": "multipart/form-data",
      },
    })
      .then((response) => {
        alert(JSON.stringify(response.data));
        authContext.setDataChanged((prevState) => !prevState);
        props.close();
      })
      .catch((error) => {
        alert(
          JSON.stringify(error.response ? error.response.data : error)
        );
      });
  };

  const [response, setResponse] = useState("");

  const formAttributes = {
    serviceName: {
      value: props.serviceName,
      type: "text",
    },
    serviceHeadline: {
      value: props.serviceHeadline,
      type: "text",
    },
    serviceLogo: {
      value: "",
      type: "file",
      accept: "image/*",
    },
  };

  return (
    <div className="md:w-136 w-80">
      <Form
        formTitle="Update service"
        actionString="Update"
        formAttributes={formAttributes}
        onSubmitHandler={updateService}
      />
    </div>
  );
};

UpdateService.propTypes = {
    serviceName : PropTypes.string,
    serviceHeadline : PropTypes.string
};

export default UpdateService;
