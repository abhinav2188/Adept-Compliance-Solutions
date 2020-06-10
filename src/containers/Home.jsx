import React from "react";
import Display from "../components/display";
import CompanyStats from "../components/companyStats";
import Services from  "../components/services";
import Products from "../components/products";
import Testimonials from "../components/testimonials";
import Clients from "../components/clients";

const Hline = () => <hr className="lg:my-8 my-8 w-5/6 mx-auto border-t-1 border-gray-light opacity-50"/>
const Home = (props) => {
    return (
        <div className="flex flex-col w-full">
            <Display />
            <Services />
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