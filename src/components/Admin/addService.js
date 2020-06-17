import React, { useState, useContext } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import axiosInstance from "../../adminInstance";
import AuthContext from "../../context/authContext";
import Form from "../UI/form";

const AddService = () => {
  const authContext = useContext(AuthContext);

  const addService = (data) => {
    const params = new FormData();
    params.append("serviceName", data.serviceName);
    params.append("serviceHeadline", data.serviceHeadline);
    if (data.serviceLogo)
      params.append("serviceLogo", data.serviceLogo, data.serviceLogo.name);

    axiosInstance({
      method: "POST",
      url: "service/",
      data: params,
      headers: {
        "auth-token": authContext.token,
        "content-type": "multipart/form-data",
      },
    })
      .then((response) => {
        setResponse(JSON.stringify(response.data));
        setAdd(false);
        authContext.setDataChanged((prevState) => !prevState);
      })
      .catch((error) => {
        setResponse(
          JSON.stringify(error.response ? error.response.data : error)
        );
        setAdd(false);
      });
  };

  const [add, setAdd] = useState(true);
  const [response, setResponse] = useState("");

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
      accept: "image/png, image/jpeg",
    },
  };

  return add ? (
    <div className="md:w-136 w-80">
      <Form
        formTitle="Add new service"
        actionString="Add"
        formAttributes={formAttributes}
        onSubmitHandler={addService}
      />
    </div>
  ) : (
    <div className="bg-gray-mid border-gray-light rounded p-4">
      <p>{response}</p>
      <Button color="primary" onClick={() => setAdd(true)}>
        Add another Service
      </Button>
    </div>
  );
};

export default AddService;
