import React from "react";
import Display from "../components/display";
import CompanyStats from "../components/companyStats";
import Services from  "../components/services";
import Products from "../components/products";
import Testimonials from "../components/testimonials";
import Clients from "../components/clients";

const Hline = () => <hr className="lg:my-8 my-4 w-5/6 mx-auto border-t-1 border-gray-light opacity-50"/>
const Home = (props) => {
    return (
        <div className="flex flex-col w-full">
            <Display />
            <CompanyStats numberOfClients="1500+" numberOfProducts="400+"/>
            <Services />
            <Products />
            <Hline />
            <Testimonials />
            <Hline />
            <Clients />
            <Hline />
        </div>
        
    );
}

export default Home;