import React from "react";

const CompanyStats = (props) => {
    return (
        <div className="flex w-full justify-center items-center text-orange-mid font-heading xl:my-16 lg:my-12 md:my-10 my-6 font-bold">
            <p>{props.numberOfProjects} Projects</p>
            <hr className="h-6 border-l border-orange-mid md:mx-4 mx-2"/>
            <p>{props.numberOfProducts} Products</p>
        </div>
        
    );
}

export default CompanyStats;