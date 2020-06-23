import React, { useEffect, useState, useContext } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import serviceVector from "../assets/svgs/service-vector.svg";
import Stepper from "../components/UI/stepper";
import axiosInstance from "../clientInstance";
import Product from "../components/Service/Product";
import Button from "../components/UI/Button";
import AddProduct from "../components/Admin/addProduct";
import Modal from "../components/UI/modal";
import AuthContext from "../context/authContext";
import Auth from "../components/layout/auth";
import DeleteProduct from "../components/Admin/deleteProduct";
import UpdateProduct from "../components/Admin/updateProduct";

const timeline = [
  {
    title: "Submission of Application of BIS Branch office",
    detail:
      "BIS will scrutinize the application and queries,if any, will be communicated by email. Once queries are satisfactorily met and application is complete, it will be recorded.",
  },
  {
    title: "Audit by BIS auditor",
    detail:
      "Preliminary inspection of the unit is carried out on a allotted date after of recording of application. Licence to use the Standard Mark on a product is granted only after BIS has ensured the capability of the manufacturer to manufacture the product in conformity to the relevant Indian Standard, on a continuous basis. This is ensured through preliminary factory evaluation to ascertain the capability of the manufacturer to produce goods according to the relevant Indian Standard especially with respect to raw materials, process of manufacture, manufacturing capability and quality control facilities including testing equipment and supervisory staff. Samples are tested in the factory. Simultaneously, samples are also drawn for testing in the independent laboratories for assessing conformity to the relevant standard.Samples of products are tested as per Indian Standard in BIS approved laboratories specified for the products.",
  },
  {
    title: "Testing as per revlant Indian standards by BIS approved laboratory",
    detail:
      "Case would be processed for grant of licence after receipt of satisfactory inspection report & independent test report(s) conforming to applicable Indian Standard(s). Applicant would be required to pay licence fee; advance minimum marking fee and any other outstanding dues, before grant of BIS licence.",
  },
  {
    title: "if sample pass complile with ISS, licenses shall be awarded by BIS",
    detail:
      "The initial validity period of the licence is one year. Licence can be renewed for further period of one/two years, subject to satisfactory operation of licence as observed during periodic inspections, factory & independent testing of samples drawn from factory and market.",
  },
];

const Service = () => {
  const authContext = useContext(AuthContext);

  // route specification
  const location = useLocation();
  useEffect(() => {
    window.scroll({
      top: location.hash
        ? document.querySelector(location.hash).offsetTop
        : "0",
      behavior: "smooth",
    });
  }, [location]);

  //url param
  const { serviceName } = useParams();

  //retrieved from DB
  const [serviceData, setServiceData] = useState({});
  const [serviceProducts, setServiceProducts] = useState([]);
  const [baseURL, setBaseURL] = useState("");

  //flow state
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("service/" + serviceName)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
        setServiceData(data);
        axiosInstance
        .get("products/" + data._id )
        .then((response) => response.data)
        .then((data) =>
          setServiceProducts((prevState) => [...prevState, ...data])
        )
        .catch((error) => alert(error));
        })
      .catch((error) => alert(error));
  }, []);

  return (
    <>
      <Modal
        show={showAddProductForm}
        close={() => setShowAddProductForm(false)}
      >
      <Auth>
        <AddProduct serviceId={serviceData._id} />
      </Auth>
      </Modal>
      <div className="w-full relative py-8 flex flex-col z-0 mt-2 mb-8 items-center">
        {/* background vector */}
        <img
          className="-z-10 absolute top-0 left-0 lg:w-1/3 md:w-2/5 w-1/2 opacity-50"
          src={serviceVector}
          alt=""
        />
        {/* Container */}
        <div className="flex flex-col lg:w-2/3 md:w-5/6 w-11/12 mx-auto">
          {/* service basic info */}
          <Link to="/#services" className="mb-8 inline self-end">
            <h6 className="inline bg-gray-mid px-2 rounded text-orange-mid">
              >Back to Services
            </h6>
          </Link>
          <img
            className="w-24 bg-white self-center"
            src={`http://localhost:3001/api/file/${serviceData.serviceLogo}`}
            alt=""
          />
          <h2 className="font-heading font-bold self-center mb-8">
            {serviceData.name}
          </h2>
          <h4 className="font-heading text-center mb-8">
            {serviceData.headline}
          </h4>

          {/* service procedure */}
          <Stepper data={timeline} />
          {authContext.token && (
            <Button color="primary" onClick={() => setShowAddProductForm(true)}>
              Add new Product
            </Button>
          )}
          {/* service products */}
          {serviceProducts.length > 0 ? (
            <div className="my-8 flex flex-col">
              <h3 className="mb-8 self-center font-heading font-bold">
                {serviceName} Products
              </h3>
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
                {serviceProducts.map((product) => (
                  <div className="flex flex-col">
                  <div className="self-end">
                    <DeleteProduct id={product._id}/>
                    <UpdateProduct serviceId={serviceData._id} data={product} productId={product._id}/>
                  </div>
                  <Product
                    productName={product.name}
                    productISN={product.ISN}
                    productImageUrl={
                      product.productImageUrl
                        ? `http://localhost:3001/api/file/${product.productImageUrl}`
                        : ""
                    }
                    productDetails="jahfjhasjd dj fkhdfk kdjfkdjf kdh khdkf kdf "
                    dataOfImplementation={product.DOI}
                  />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Service;
