import React, { useEffect, useState } from "react";
import serviceVector from "../../assets/svgs/service-vector.svg";
import Carousel from "../UI/carousel";
import { Link } from "react-router-dom";
import axiosInstance from "../../clientInstance";

const childClasses = [
  "",
  "",
  "transform lg:translate-x-0 -translate-x-24",
  "transform lg:-translate-x-16 -translate-x-24",
  "transform lg:-translate-x-16 translate-x-0",
  "transform lg:-translate-x-16 translate-x-0",
];

const Service = (props) => {
  return (
    <div
      className={`flex flex-col relative z-0 xl:w-64 xl:min-h-64 lg:w-48 lg:min-h-48 md:w-40 md:min-h-40 w-32 min-h-32 h-full lg:p-4 md:p-3 p-2 bg-gray-light rounded shadow ${props.className}`}
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
    </div>
  );
};

const Services = (props) => {
  const [serviceList, setServiceList] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("service/all")
      .then((response) => response.data.data)
      .then((data) =>
        data.map((d) => (
          <Service
            name={d.name}
            content={d.headline}
            imgSrc={`http://localhost:3001/api/file/${d.serviceLogo}`}
          />
        ))
      )
      .then((list) => setServiceList(list))
      .catch((error) => alert(error));
  }, []);

  return (
    <div id="services" className="w-full relative py-8 flex flex-col z-0 my-8">
      <img
        className="-z-10 absolute top-0 transform lg:-translate-y-32 -translate-y-4 lg:w-1/3 md:w-2/5 w-1/2"
        src={serviceVector}
        alt=""
      />
      <h2 className="font-heading self-center font-bold xl:mt-8">
        Our Services
      </h2>
      <Carousel
        parentClass="z-0 self-end mt-16 grid lg:grid-cols-3 grid-cols-2 xl:gap-8 lg:gap-6 md:gap-4 gap-2 xl:pr-32 lg:pr-24 md:pr-16 pr-4"
        childClasses={childClasses}
        elements={serviceList}
        activeIndex={[0, 1, 2, 3, 4, 5]}
        fade
      />
    </div>
  );
};

export default Services;
