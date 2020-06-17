import React, { useEffect, useState, useContext } from "react";
import serviceVector from "../../assets/svgs/service-vector.svg";
import Carousel from "../UI/carousel";
import axiosInstance from "../../clientInstance";
import AuthContext from "../../context/authContext";
import Service from "./service";
import AddService from "../Admin/addService";
import Modal from "../UI/modal";
import Button from "../UI/Button";

const childClasses = [
  "",
  "",
  "transform lg:translate-x-0 -translate-x-24",
  "transform lg:-translate-x-16 -translate-x-24",
  "transform lg:-translate-x-16 translate-x-0",
  "transform lg:-translate-x-16 translate-x-0",
];


const Services = (props) => {
  const [serviceList, setServiceList] = useState([]);
  const authContext = useContext(AuthContext);
  const [addServiceModal, setAddServiceModal] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("service/all")
      .then((response) => response.data.data)
      .then((data) =>
        data.map((d) => (
          <Service
            id={d._id}
            name={d.name}
            content={d.headline}
            imgSrc={`http://localhost:3001/api/file/${d.serviceLogo}`}
          />
        ))
      )
      .then((list) => setServiceList(list))
      .catch((error) => alert(error));
  }, [authContext.dataChanged]);

  return (
    <>
    <Modal show={addServiceModal} close={() => setAddServiceModal(false)}>
      <AddService />
    </Modal>
    <div id="services" className="w-full relative py-8 flex flex-col z-0 my-8">
      <img
        className="-z-10 absolute top-0 transform lg:-translate-y-32 -translate-y-4 lg:w-1/3 md:w-2/5 w-1/2"
        src={serviceVector}
        alt=""
      />
      <h2 className="font-heading self-center font-bold xl:mt-8">
        Our Services
      </h2>
      {authContext.token && (
        <Button className="self-center" color="primary" onClick={() => setAddServiceModal(true)}>
          Add New Service
        </Button>
      )}
      <Carousel
        parentClass="z-0 self-end mt-16 grid lg:grid-cols-3 grid-cols-2 xl:gap-8 lg:gap-6 md:gap-4 gap-2 xl:pr-32 lg:pr-24 md:pr-16 pr-4"
        childClasses={childClasses}
        elements={serviceList}
        activeIndex={[0, 1, 2, 3, 4, 5]}
        fade
      />
    </div>
    </>
  );
};

export default Services;
