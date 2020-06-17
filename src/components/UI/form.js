import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Button from "./Button";

// const formAttributes = {
//     name : {
//         value:"",
//         type:"",
//         validator:() => {}
//     }
// }

const Form = (props) => {
  const [formData, setFormData] = useState({});
  
  const onChangeHandler = (event) => {
      console.log(event.target.type);
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmitHandler(formData);
  }
  
  useEffect(() => {
    console.log(props.formAttributes);
    const values = {};
    Object.keys(props.formAttributes).map((key) => {
      values[key] = props.formAttributes[key].value;
    });
    console.log(values);
    setFormData(values);
  }, []);


  return (
    <form
      className="w-72 border border-gray-light rounded p-4"
      onSubmit={onSubmit}
    >
      <h4 className="font-heading">{props.formTitle}</h4>
      <hr className="border-gray-light border-t-1 mb-4" />
      {Object.keys(formData).map((key) => (
        <Input
          name={key}
          type={props.formAttributes[key].type}
          value={formData[key]}
          onChange={onChangeHandler}
        />
      ))}
      <Button type="submit">{props.actionString}</Button>
    </form>
  );
};

Form.propTypes = {
  formAttributes: PropTypes.object,
  onSubmitHandler: PropTypes.func,
  formTitle: PropTypes.string,
  actionString: PropTypes.string,
};

export default Form;
