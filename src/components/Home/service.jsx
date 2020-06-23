import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";
import Button from "../UI/Button";
import axiosInstance from "../../adminInstance";
import UpdateService from "../Admin/updateService";
import ModalContext from "../../context/modalContext";

const Service = (props) => {
  const authContext = useContext(AuthContext);
  const modalContext = useContext(ModalContext);

  const handleDelete = (id) => {
    var confirmation = window.confirm("Are you sure to delete");
    if (confirmation) {
      axiosInstance({
        method: "DELETE",
        url: "service/" + id,
        headers: {
          "auth-token": authContext.token,
        },
      })
        .then((response) => {
          authContext.setDataChanged((prevState) => !prevState);
          alert(JSON.stringify(response.data));
        })
        .catch((error) =>
          alert(JSON.stringify(error.response ? error.response.data : error))
        );
    }
  };

  const showUpdateForm = () => {
    modalContext.openModal();
    modalContext.setContent(<UpdateService serviceName={props.name} serviceHeadline={props.content}></UpdateService>);
    }

  return (
    <>
    <div
      className={`flex flex-col relative z-0 xl:w-64 xl:min-h-64 lg:w-48 lg:min-h-64 md:w-64 md:min-h-64 w-40 min-h-40 h-full lg:p-4 md:p-3 p-2 bg-gray-light rounded shadow ${props.className}`}
    >
      <img
        className="w-4/5 h-4/5  -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-25"
        src={props.imgSrc}
        alt=""
      />
      <h4 className="">{props.name}</h4>
      <p className="leading-none my-1 flex-grow">{props.content}</p>
      <Link
        to={`service/${props.name}`}
        className="mt-2 border rounded-sm self-center px-1 capitalize font-heading hover:scale-110 transition transform duration-75"
      >
        <h6>Read More</h6>
      </Link>
      {authContext.token && (
        <div className="flex">
          <Button color="warning" onClick={() => handleDelete(props.id)}>
            Delete
          </Button>
          <Button color="secondary" onClick={showUpdateForm}>Edit</Button>
        </div>
      )}
    </div>
    </>
  );
};

export default Service;
