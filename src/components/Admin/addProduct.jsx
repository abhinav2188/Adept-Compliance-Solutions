import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import axiosInstance from "../../adminInstance";
import Form from "../UI/form";
import withLoader from "../HOC/withLoader";
import axios from "axios";

const AddProduct = (props) => {
  const addProduct = (data) => {
    props.setLoading(true);
    const params = new FormData();
    params.append("productName", data.productName);
    params.append("productISN", data.productISN);
    if (data.productImage) params.append("productImage", data.productImage, data.productImage.name);
    params.append("dateOfImplementation", data.dateOfImplementation);
    params.append("onDisplay", data.onDisplay);
    params.append("serviceId", props.serviceId);

    axios.post("products/",params)
      .then((response) => {
        setResponse(JSON.stringify(response.data));
        setAdd(false);
        props.setLoading(false);
      })
      .catch((error) => {
        setResponse(
          JSON.stringify(error.response ? error.response.data : error)
        );
        setAdd(false);
        props.setLoading(false);
      });
  };

  const [add, setAdd] = useState(true);
  const [response, setResponse] = useState("");

  const formAttributes = {
    productName: {
      value: "",
      type: "text",
    },
    productISN: {
      value: "",
      type: "text",
    },
    productImage: {
      value: "",
      type: "file",
      accept: "image/png, image/jpeg",
    },
    dateOfImplementation: {
      value: "",
      type: "text",
    },
    onDisplay: {
      value: false,
      type: "checkbox",
    },
  };

  return add ? (
    <div className="md:w-136 w-80">
      <Form
        formTitle="Add new Product"
        actionString="Add Product"
        formAttributes={formAttributes}
        onSubmitHandler={addProduct}
      />
    </div>
  ) : (
    <div className="bg-gray-mid border-gray-light rounded p-4">
      <p>{response}</p>
      <Button color="primary" onClick={() => setAdd(true)}>
        Add more Product
      </Button>
    </div>
  );
};

export default withLoader(AddProduct);
