import React from "react";
import Display from "../components/display";
import CompanyStats from "../components/companyStats";
import Services from  "../components/services";
import Products from "../components/products";
import Testimonials from "../components/testimonials";
import Clients from "../components/clients";

const Home = (props) => {
    return (
        <div className="flex flex-col w-full">
            <Display />
            <CompanyStats numberOfClients="1500+" numberOfProducts="400+"/>
            <Services />
            <Products />
            <hr className="my-8 w-5/6 mx-auto border-t-1 border-gray-light"/>
            <Testimonials />
            <hr className="my-8 w-5/6 mx-auto border-t-1 border-gray-light"/>
            <Clients />

        </div>
        
    );
}

export default Home;