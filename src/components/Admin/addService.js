import React, { useState, useContext } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import axiosInstance from "../../adminInstance";
import AuthContext from "../../context/authContext";

const AddService = () => {
  const [data, setData] = useState({
    serviceName: "",
    serviceHeadline: "",
    serviceLogo: "",
  });
  const authContext = useContext(AuthContext);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFileChangeHandler = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setData((prevState) => ({ ...prevState, serviceLogo: file }));
  };

  const onSubmtiHandler = (event) => {
    event.preventDefault();
    const params = new FormData();
    params.append("serviceName", data.serviceName);
    params.append("serviceHeadline", data.serviceHeadline);
    if(data.serviceLogo)
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
      .then((response) => {setResponse(JSON.stringify(response.data)); setAdd(false);})
      .catch((error) => {setResponse(JSON.stringify(error.response?error.response.data:error)); setAdd(false);});
  };

  const [add,setAdd] = useState(true);
  const [response,setResponse] = useState("");
  return (
  add?  
    <div>
      <form
        className="md:w-136 w-80 border border-gray-light rounded p-4 bg-gray-dark flex flex-col"
        onSubmit={onSubmtiHandler}
      >
        <h4 className="font-heading">Add Service</h4>
        <hr className="border-gray-light border-t-1 mb-4" />
        <Input
          name="serviceName"
          type="text"
          onChange={onChangeHandler}
          value={data.serviceName}
        />
        <Input
          name="serviceHeadline"
          type="text"
          onChange={onChangeHandler}
          value={data.serviceHeadline}
        />
        <label for="serviceLogo" className="my-2">
          <p>ServiceLogo</p>
          <input
            type="file"
            name="serviceLogo"
            placeholder="choose image"
            className="bg-gray-mid w-full"
            accept="image/png, image/jpeg"
            onChange={onFileChangeHandler}
          />
        </label>
        <Button type="submit" className="self-center">
          Next
        </Button>
      </form>
    </div>:
    <div className="bg-gray-mid border-gray-light rounded p-4">
    <p>{response}</p>
    <Button color="primary" onClick={() => setAdd(true)}>Add another Service</Button>
    </div>
  );
};

export default AddService;
