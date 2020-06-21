import React, { useEffect } from "react";
import Display from "../components/Home/display";
import CompanyStats from "../components/Home/companyStats";
import Services from "../components/Home/services";
import Products from "../components/Home/products";
import Testimonials from "../components/Home/testimonials";
import Clients from "../components/Home/clients";
import About from "../components/Home/about";
import { useLocation } from "react-router-dom";

const Hline = () => (
  <hr className="lg:my-8 my-8 w-5/6 mx-auto border-t-1 border-gray-light opacity-50" />
);
const Home = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scroll({
      top: location.hash
        ? document.querySelector(location.hash).offsetTop
        : "0",
      behavior: "smooth",
    });
  }, [location]);

  return (
    <div className="flex flex-col w-full">
      <Display />
      <About />
      <Services />
      <Products />
      <Hline />
      <CompanyStats/>
      <Hline />
      <Testimonials />
      <Hline />
      <Clients />
    </div>
  );
};

export default Home;
