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
    const name = event.target.name;
    if (event.target.type === "file") {
      const file = event.target.files[0];
      console.log(file);
      setFormData((prevState) => ({ ...prevState, [name]: file }));
    } else {
      const value = event.target.value;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmitHandler(formData);
  };

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
      className="border border-gray-light bg-gray-dark rounded p-4 flex flex-col w-full"
      onSubmit={onSubmit}
    >
      <h4 className="font-heading">{props.formTitle}</h4>
      <hr className="border-gray-light border-t-1 mb-4" />
      {Object.keys(formData).map((key) =>
        props.formAttributes[key].type === "file" ? (
          <Input
            name={key}
            type={props.formAttributes[key].type}
            onChange={onChangeHandler}
            placeholder={props.formAttributes[key].placeholder}
            accept={props.formAttributes[key].accept}
          />
        ) : (
          <Input
            name={key}
            type={props.formAttributes[key].type}
            value={formData[key]}
            onChange={onChangeHandler}
            placeholder={props.formAttributes[key].placeholder}
          />
        )
      )}
      <Button type="submit" className="self-center">
        {props.actionString}
      </Button>
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
