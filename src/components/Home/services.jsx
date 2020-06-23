import React, { useEffect, useState, useContext } from "react";
import serviceVector from "../../assets/svgs/service-vector.svg";
import Carousel from "../UI/carousel";
import axiosInstance from "../../clientInstance";
import Service from "./service";
import DeleteService from "../Admin/deleteService";
import UpdateService from "../Admin/updateService";
import AddService from "../Admin/addService";
import AlertContext from "../../context/alertContext";

const childClasses = [
  "transform lg:translate-y-0 lg:translate-x-24 translate-y-12",
  "transform lg:translate-y-0 lg:translate-x-24 ",
  "transform lg:translate-y-0 lg:translate-x-24 translate-y-12",
  "transform ",
  "transform lg:translate-y-0 translate-y-12",
  "transform ",
];

const Services = (props) => {
  const [serviceList, setServiceList] = useState([]);
  const alertContext = useContext(AlertContext);
  
  useEffect(() => {
    axiosInstance
      .get("service/all")
      .then((response) => response.data)
      .then((data) =>
        data.map((d) => (
          <div className="flex flex-col">
            <div className="flex self-end">
              <DeleteService id={d._id} />
              <UpdateService formData={d} />
            </div>
            <Service
              id={d._id}
              name={d.name}
              content={d.headline}
              imgSrc={`http://localhost:3001/api/file/${d.serviceLogo}`}
            />
          </div>
        ))
      )
      .then((list) => setServiceList(list))
      .then(() =>
        alertContext.addMessage({
          message: "services data fetched",
          type: "success",
        })
      )
      .catch((error) => alert(error));
  }, []);

  return (
      <div
        id="services"
        className="w-full relative py-8 flex flex-col my-8 bg-no-repeat bg-contain z-0"
        // style={{backgroundImage: `url(${serviceVector})`}}
      >
        <img
          className="-z-10 absolute top-0 transform lg:-translate-y-32 -translate-y-4 lg:w-1/3 md:w-2/5 w-1/2"
          src={serviceVector}
          alt=""
        />
        <h2 className="font-heading self-center font-bold xl:mt-8">
          Our Services
        </h2>
        <AddService />
        <Carousel
          parentClass="self-center mt-16 grid lg:grid-cols-3 grid-cols-2 xl:gap-8 lg:gap-6 md:gap-6 gap-4 "
          childClasses={childClasses}
          elements={serviceList}
          activeIndex={[0, 1, 2, 3, 4, 5]}
          fade
        />
      </div>
  );
};

export default Services;
