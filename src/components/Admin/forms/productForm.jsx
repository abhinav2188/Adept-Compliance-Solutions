import React, { useContext } from "react";
import PropTypes from "prop-types";
import Form from "../../UI/form";
import withLoader from "../../HOC/withLoader";
import axios from "axios";
import AlertContext from "../../../context/alertContext";

// contains updation and adding forms for products into DB

const ProductForm = ({ formData, ...props }) => {
  const alertContext = useContext(AlertContext);

  async function addProduct(data) {
    props.setLoading(true);
    const params = new FormData();
    params.append("productName", data.productName);
    params.append("productISN", data.productISN);
    if (data.productImage)
      params.append("productImage", data.productImage, data.productImage.name);
    params.append("dateOfImplementation", data.dateOfImplementation);
    params.append("onDisplay", data.onDisplay);
    params.append("serviceId", props.serviceId);

    try {
      var response;
      if (formData)
        response = await axios.patch("products/" + formData._id, params);
      else response = await axios.post("products/", params);
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

  const formAttributes = {
    productName: {
      value: formData ? formData.name : "",
      type: "text",
    },
    productISN: {
      value: formData ? formData.ISN : "",
      type: "text",
    },
    productImage: {
      value: "",
      type: "file",
      accept: "image/png, image/jpeg",
    },
    dateOfImplementation: {
      value: formData ? formData.DOI : "",
      type: "text",
    },
    onDisplay: {
      value: formData ? formData.onDisplay : true,
      type: "checkbox",
    },
  };

  return (
    <div className="md:w-136 w-80">
      <Form
        formTitle={formData ? "Update Product" : "Add new product"}
        actionString={formData ? "Update" : "Add"}
        formAttributes={formAttributes}
        onSubmitHandler={addProduct}
      />
    </div>
  );
};

ProductForm.propTypes = {
  formData: PropTypes.object,
  serviceId: PropTypes.string,
};

export default withLoader(ProductForm);
