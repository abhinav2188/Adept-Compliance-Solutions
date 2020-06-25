import React, { useContext } from "react";
import axios from "axios";
import Form from "../../UI/form";
import Auth from "../../layout/auth";
import withLoader from "../../HOC/withLoader";
import PropTypes from "prop-types";
import AlertContext from "../../../context/alertContext";

//contains updation and addition form for services into DB

const ServiceForm = ({ formData, ...props }) => {

  const alertContext = useContext(AlertContext);


  async function addService(data) {
    props.setLoading(true);
    const params = new FormData();
    params.append("serviceName", data.serviceName);
    params.append("serviceHeadline", data.serviceHeadline);
    if (data.serviceLogo)
      params.append("serviceLogo", data.serviceLogo, data.serviceLogo.name);

    try {
      var response;
      if(formData)
      response = await axios.patch("service/"+formData.name , params);
      else
      response = await axios.post("service/", params);
      props.setLoading(false);
      if(formData)
      props.onUpdation();
      const {data,statusText} = response;
      alertContext.addMessage({
        type:"success",
        message:statusText+" : "+data
      })
    } catch (err) {
      props.setLoading(false);
      console.log(err);
      console.log(err.response);
      const {data,statusText} = err.response;
      alertContext.addMessage({
        type:"failure",
        message:statusText+" : "+data
      })
    }
  }

  const formAttributes = {
    serviceName: {
      value: formData ? formData.name : "",
      type: "text",
    },
    serviceHeadline: {
      value: formData ? formData.headline : "",
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
          formTitle={formData?"Update Service":"Add new service"}
          actionString={formData?"Update":"Add"}
          formAttributes={formAttributes}
          onSubmitHandler={addService}
        />
      </div>
    </Auth>
  );
};

ServiceForm.propTypes = {
  formData: PropTypes.object,
};

export default withLoader(ServiceForm, "green");
