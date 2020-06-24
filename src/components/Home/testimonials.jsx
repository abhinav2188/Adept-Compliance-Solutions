import React, { useState, useEffect, useContext } from "react";
import Carousel from "../UI/carousel";
import axiosInstance from "../../clientInstance";
import AlertContext from "../../context/alertContext";
import AddTestimonial from "../Admin/addTestimonial";
import Spinner from "../UI/spinner/spinner";
import UpdateTestimonial from "../Admin/updateTestimonial";
import DeleteTestimonial from "../Admin/deleteTestimonial";
import userSvg from "../../assets/svgs/user.svg";
import Auth from "../layout/auth";
import Button from "../UI/Button";

const Testimonial = (props) => {
  return (
      <div className="lg:w-80 lg:h-40 md:w-72 md:h-32 w-64 h-32 bg-gray-mid flex flex-col lg:py-4 md:py-3 py-2 px-4 rounded shadow">
          <div className="flex mb-4 items-center self-center">
              <img className="w-6 h-6 rounded-full mr-2 bg-gray-mid" src={props.avatarUrl} alt=""/>
              <p className="capitalize">{props.name}</p>
          </div>
          <p className="leading-none text-center">{props.comment}</p>
      </div>
      
  );
}

const Testimonials = (props) => {
  const [testimonialList,setTestimonialList] = useState([]);
  const alertContext = useContext(AlertContext);
  const [dataFetched,setDataFetchced] = useState(false);


  async function getTestimonials(){
    setDataFetchced(false);
    try{
      const {data,config:{baseURL}} = await axiosInstance.get("testimonials/all");
      setTestimonialList(
        data.map((d) => (
          <div className="flex flex-col">
            <div className="flex self-end">
              <DeleteTestimonial id={d._id} />
              <UpdateTestimonial formData={d} />
            </div>
            <Testimonial
              key={d._id}
              name={d.name}
              comment={d.feedback}
              avatarUrl={d.avatarUrl?`${baseURL}file/${d.avatarUrl}`:userSvg}
            />
          </div>
        ))
      );
      setDataFetchced(true);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getTestimonials();
  },[])

  return (
    <div className="flex flex-col w-full py-8 my-8 z-10 overflow-x-hidden items-center">
      <h2 className="font-heading self-center font-bold xl:mt-8">
        Praise for Us
      </h2>
      <p className="font-heading self-center font-bold xl:mt-8 transform xl:-translate-y-8">
        Here's what some of our clients are saying.
      </p>
      <AddTestimonial />
      <Auth><Button onClick={getTestimonials}>Refresh</Button></Auth>
      {
        dataFetched?
        <Carousel
        parentClass="my-8 grid md:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-6 md:gap-4 gap-2 self-center"
        elements={testimonialList}
        activeIndex={[0, 1]}
        automate
      />:
      <div className="py-8">
      <Spinner />
      </div>
      }
    </div>
  );
};

export default Testimonials;
