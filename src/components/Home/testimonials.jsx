import React from "react";
import Carousel from "../UI/carousel";

const Testimonial = (props) => {
  return (
      <div className="lg:w-80 lg:h-40 md:w-72 md:h-40 w-64 h-36 bg-gray-light flex flex-col lg:p-4 md:p-3 p-2 rounded shadow">
          <div className="flex lg:mb-4 md:mb-3 mb-2 items-center">
              <img className="w-6 h-6 rounded-full bg-white mr-4" src="https://picsum.photos/200" alt=""/>
              <p className="uppercase">{props.name}</p>
          </div>
          <p className="leading-none">{props.comment}</p>
      </div>
      
  );
}

const testimonialContent = [
  {
    name: "name 1",
    comment:
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit sed venenatis. Praesent condimentum vulputate posuere. Etiam sed accumsan ex. Fusce semper",
  },
  {
    name: "name 2",
    comment:
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit sed venenatis. Praesent condimentum vulputate posuere. Etiam sed accumsan ex. Fusce semper",
  },
  {
    name: "name 3",
    comment:
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit sed venenatis. Praesent condimentum vulputate posuere. Etiam sed accumsan ex. Fusce semper",
  },
  {
    name: "name 4",
    comment:
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit sed venenatis. Praesent condimentum vulputate posuere. Etiam sed accumsan ex. Fusce semper",
  },
  {
    name: "name 5",
    comment:
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit sed venenatis. Praesent condimentum vulputate posuere. Etiam sed accumsan ex. Fusce semper",
  },
  {
    name: "name 6",
    comment:
      "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit sed venenatis. Praesent condimentum vulputate posuere. Etiam sed accumsan ex. Fusce semper",
  },
];

const testimonialList = 
testimonialContent.map((testimonial) =>
    <Testimonial name={testimonial.name} comment={testimonial.comment} />
);

const Testimonials = (props) => {
  return (
    <div className="flex flex-col w-full py-8 my-8 z-10 overflow-x-hidden">
      <h2 className="font-heading self-center font-bold xl:mt-8">
        Praise for Us
      </h2>
      <p className="font-heading self-center font-bold xl:mt-8 transform xl:-translate-y-8">
        Here's what some of our clients are saying.
      </p>
      <Carousel
        parentClass="my-8 grid md:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-6 md:gap-4 gap-2 self-center"
        elements={testimonialList}
        activeIndex={[0, 1]}
        automate
      />
    </div>
  );
};

export default Testimonials;
