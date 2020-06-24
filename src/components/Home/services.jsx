import React, { useEffect, useState, useContext } from "react";
import serviceVector from "../../assets/svgs/service-vector.svg";
import Carousel from "../UI/carousel";
import axiosInstance from "../../clientInstance";
import Service from "./service";
import DeleteService from "../Admin/deleteService";
import UpdateService from "../Admin/updateService";
import AddService from "../Admin/addService";
import AlertContext from "../../context/alertContext";
import Spinner from "../UI/spinner/spinner";
import Auth from "../layout/auth";
import Button from "../UI/Button";

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
  const [isDataFetched, setIsDataFetched] = useState(false);

  async function getServices() {
    setIsDataFetched(false);
    try {
      const {
        data,
        config: { baseURL },
      } = await axiosInstance.get("service/all");

      setServiceList(
        data.map((d) => (
          <div className="flex flex-col">
            <div className="flex self-end">
              <DeleteService id={d._id} />
              <UpdateService formData={d} />
            </div>
            <Service
              key={d._id}
              id={d._id}
              name={d.name}
              content={d.headline}
              imgSrc={baseURL + "file/" + d.serviceLogo}
            />
          </div>
        )));
        setIsDataFetched(true);
    } catch (err) {
      alert(err);
    }
  }

  // alertContext.addMessage({
  //   message: "services data fetched",
  //   type: "success",
  // })

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div
      id="services"
      className="w-full relative py-8 flex flex-col my-8 bg-no-repeat bg-contain z-0"
    >
      <img
        className="-z-10 absolute top-0 transform lg:-translate-y-32 -translate-y-4 lg:w-1/3 md:w-2/5 w-1/2 opacity-50"
        src={serviceVector}
        alt=""
      />
      <h2 className="font-heading self-center font-bold xl:mt-8">
        Our Services
      </h2>
      <AddService />
      <Auth><Button onClick={getServices}  className="self-center">Refresh</Button></Auth>
      {
        isDataFetched?
        <Carousel
        parentClass="self-center mt-16 grid lg:grid-cols-3 grid-cols-2 xl:gap-8 lg:gap-6 md:gap-6 gap-4 "
        childClasses={childClasses}
        elements={serviceList}
        activeIndex={[0, 1, 2, 3, 4, 5]}
        fade
      />:
      <div className="py-8 mx-auto">
        <Spinner />
      </div>
      }
    </div>
  );
};

export default Services;
