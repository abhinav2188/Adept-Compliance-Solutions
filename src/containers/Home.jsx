import React from "react";
import Display from "../components/display";
import CompanyStats from "../components/companyStats";
import Services from  "../components/services";
import Products from "../components/products";

const Home = (props) => {
    return (
        <div className="flex flex-col w-full">
            <Display />
            <CompanyStats numberOfClients="1500+" numberOfProducts="400+"/>
            <Services />
            <Products />
            <hr className="mb-16 w-5/6 mx-auto border-t-1 border-gray-light"/>
        </div>
        
    );
}

export default Home;