import React from "react";
import staticContent from "../../assets/staticContent";

const CompanyStats = (props) => {
    return (
        <div className="flex w-full justify-center items-center text-orange-mid font-heading xl:my-16 lg:my-12 md:my-10 my-6 font-bold">
            <p>{staticContent.companyStats.projects} Projects</p>
            <hr className="h-6 border-l border-orange-mid md:mx-4 mx-2"/>
            <p>{staticContent.companyStats.products} Products</p>
        </div>
        
    );
}

export default CompanyStats;