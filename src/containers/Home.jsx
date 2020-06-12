import React from "react";
import Display from "../components/Home/display";
import CompanyStats from "../components/Home/companyStats";
import Services from  "../components/Home/services";
import Products from "../components/Home/products";
import Testimonials from "../components/Home/testimonials";
import Clients from "../components/Home/clients";
import About from "../components/Home/about";

const Hline = () => <hr className="lg:my-8 my-8 w-5/6 mx-auto border-t-1 border-gray-light opacity-50"/>
const Home = (props) => {
    return (
        <div className="flex flex-col w-full">
            <Display/>
            <About />
            <Services/>
            <Products />
            <Hline />            
            <CompanyStats numberOfProjects="1100+" numberOfProducts="100+"/>
            <Hline />            
            <Testimonials />
            <Hline />
            <Clients />
        </div>
        
    );
}

export default Home;