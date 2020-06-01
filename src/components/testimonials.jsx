import React, { useState } from "react";
import Testimonial from "./testimonial";
import { changeActiveElements } from "../carousel";
import Next from "../assets/svgs/next.svg";
import Prev from "../assets/svgs/prev.svg";
import Carousel from "./UI/carousel";

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

const testimonialList = [];
testimonialContent.map((testimonial) => {
  testimonialList.push(
    <Testimonial name={testimonial.name} comment={testimonial.comment} />
  );
});

const Testimonials = (props) => {
  return (
    <div className="flex flex-col w-full py-8 my-8 z-10">
      <h2 className="font-heading self-center font-bold xl:mt-8">
        Praise for Us
      </h2>
      <p className="font-heading self-center font-bold xl:mt-8 transform xl:-translate-y-8">
        Here's what some of our clients are saying.
      </p>
      <Carousel
        parentClass="mt-16 grid md:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-6 md:gap-4 gap-2 self-center"
        elements={testimonialList}
        activeIndex={[0, 1]}
        automate
        fade
      />
    </div>
  );
};

export default Testimonials;
