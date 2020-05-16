import React from "react";

const CompanyStats = (props) => {
    return (
        <div className="flex w-full justify-center items-center text-orange-mid font-heading xl:mb-16 lg:mb-12 md:mb-10 mb-6">
            <p>{props.numberOfClients} Clients</p>
            <hr className="h-6 border-l border-orange-mid md:mx-4 mx-2"/>
            <p>{props.numberOfProducts} Products</p>
        </div>
        
    );
}

export default CompanyStats;