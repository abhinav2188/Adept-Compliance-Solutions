import React from "react";
import axios from "axios";
import Form from "../UI/form";
import withLoader from "../HOC/withLoader";

const UpdateForm = (props) => {
  async function updateProduct(data) {
    const params = new FormData();
    params.append("productName", data.productName);
    params.append("productISN", data.productISN);
    if (data.productImage)
      params.append("productImage", data.productImage, data.productImage.name);
    params.append("dateOfImplementation", data.dateOfImplementation);
    params.append("onDisplay", data.onDisplay);
    params.append("serviceId", props.serviceId);

    try {
      props.setLoading(true);
      const response = await axios.patch("products/" + props.productId, params);
      props.setLoading(false);
      props.onUpdation();
    } catch (err) {
      props.setLoading(false);
    }
  }

  const formAttributes = {
    productName: {
      value: props.data.name,
      type: "text",
    },
    productISN: {
      value: props.data.ISN,
      type: "text",
    },
    productImage: {
      value: "",
      type: "file",
      accept: "image/png, image/jpeg",
    },
    dateOfImplementation: {
      value: props.data.DOI,
      type: "text",
    },
    onDisplay: {
      value: props.data.onDisplay,
      type: "checkbox",
    },
  };

  return (
    <div className="md:w-136 w-80">
      <Form
        formTitle="Update Product"
        actionString="Update Product"
        formAttributes={formAttributes}
        onSubmitHandler={updateProduct}
      />
    </div>
  );
};

export default withLoader(UpdateForm);
