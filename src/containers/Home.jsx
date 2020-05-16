import React from "react";
import Display from "../components/display";
import CompanyStats from "../components/companyStats";

const Home = (props) => {
    return (
        <div className="flex flex-col w-full">
            <Display />
            <CompanyStats numberOfClients="1500+" numberOfProducts="400+"/>
        </div>
        
    );
}

export default Home;