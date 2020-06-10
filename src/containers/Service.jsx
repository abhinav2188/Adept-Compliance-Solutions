import React,{useState} from "react";
import { useParams } from "react-router-dom";
import serviceVector from "../assets/svgs/service-vector.svg";
import Stepper from "../components/UI/Stepper";
import HorizontalStepper from "../components/UI/HorizontalStepper";

const timeline = [
    {
        title:"Submission of Application of BIS Branch office",
        detail:"BIS will scrutinize the application and queries,if any, will be communicated by email. Once queries are satisfactorily met and application is complete, it will be recorded."
    },
    {
        title:"Audit by BIS auditor",
        detail:"Preliminary inspection of the unit is carried out on a allotted date after of recording of application. Licence to use the Standard Mark on a product is granted only after BIS has ensured the capability of the manufacturer to manufacture the product in conformity to the relevant Indian Standard, on a continuous basis. This is ensured through preliminary factory evaluation to ascertain the capability of the manufacturer to produce goods according to the relevant Indian Standard especially with respect to raw materials, process of manufacture, manufacturing capability and quality control facilities including testing equipment and supervisory staff. Samples are tested in the factory. Simultaneously, samples are also drawn for testing in the independent laboratories for assessing conformity to the relevant standard.Samples of products are tested as per Indian Standard in BIS approved laboratories specified for the products."
    },
    {
        title:"Testing as per revlant Indian standards by BIS approved laboratory",
        detail:"Case would be processed for grant of licence after receipt of satisfactory inspection report & independent test report(s) conforming to applicable Indian Standard(s). Applicant would be required to pay licence fee; advance minimum marking fee and any other outstanding dues, before grant of BIS licence."
    },
    {
        title:"if sample pass complile with ISS, licenses shall be awarded by BIS",
        detail:"The initial validity period of the licence is one year. Licence can be renewed for further period of one/two years, subject to satisfactory operation of licence as observed during periodic inspections, factory & independent testing of samples drawn from factory and market."
    }
]


const Service = () => {
  const { serviceName } = useParams();
  return (
    <div className="w-full relative py-8 flex flex-col z-0 my-8 items-center">
      <img
        className="-z-10 absolute top-0 left-0 lg:w-1/3 md:w-2/5 w-1/2 opacity-50"
        src={serviceVector}
        alt=""
      />
      <div className="flex flex-col lg:w-2/3 md:w-5/6 w-11/12 mx-auto">
      <img className="w-24 bg-white self-center" src="https://img.favpng.com/15/15/7/bureau-of-indian-standards-ministry-of-electronics-and-information-technology-technical-standard-brand-liaison-png-favpng-U1GU8x8FjqWfCvbKRvrBZZUGb.jpg" alt=""/>
      <h2 className="font-heading font-bold self-center">{serviceName}</h2>
        <Stepper data={timeline}/>
        <HorizontalStepper />
      </div>
    </div>
  );
};

export default Service;
