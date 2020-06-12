import React from "react";
import serviceVector from "../../assets/svgs/service-vector.svg";
import Carousel from "../UI/carousel";
import { Link } from "react-router-dom";

const childClasses = [
  "",
  "",
  "transform lg:translate-x-0 -translate-x-24",
  "transform lg:-translate-x-16 -translate-x-24",
  "transform lg:-translate-x-16 translate-x-0",
  "transform lg:-translate-x-16 translate-x-0",
];
const serviceContent = [
  {
    name: "BIS Registration",
    content: [
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit",
      "faucibus bibendum velit sed venenatis",
    ],
  },
  {
    name: "Product Approval",
    content: [
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit",
      "faucibus bibendum velit sed venenatis",
    ],
  },
  {
    name: "BIS Registration",
    content: [
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit",
      "faucibus bibendum velit sed venenatis",
    ],
  },
  {
    name: "BIS Registration",
    content: [
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit",
      "faucibus bibendum velit sed venenatis",
    ],
  },
  {
    name: "ISI Registration",
    content: [
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit",
      "faucibus bibendum velit sed venenatis",
    ],
  },
  {
    name: "Product Evaluation",
    content: [
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit",
      "faucibus bibendum velit sed venenatis",
    ],
  },
  {
    name: "RSII Registration",
    content: [
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit",
      "faucibus bibendum velit sed venenatis",
    ],
  },
  {
    name: "Lorem Ipsum",
    content: [
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit",
      "faucibus bibendum velit sed venenatis",
    ],
  },
];

const Service = (props) => {
  return (
    <div
      className={`flex flex-col xl:w-64 xl:h-64 lg:w-48 lg:h-48 md:w-40 md:h-40 w-32 h-32 lg:p-4 md:p-3 p-2 bg-gray-light rounded transition-all duration-100 transform hover:-translate-y-4 ease-out shadow ${props.className}`}
    >
      <h4 className="">{props.name}</h4>
      {props.content.map((content, index) => (
        <p key={index} className="leading-none my-1">
          {content}
        </p>
      ))}
    </div>
  );
};

const serviceList = serviceContent.map((service) =>
    <Link to={`service/${service.name}`}>
      <Service name={service.name} content={service.content} />
    </Link>
);

const Services = (props) => {
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
