import React, { useState, useEffect } from "react";
import vector3 from "../../assets/svgs/vector-3.svg";
import axiosInstance from "../../clientInstance";
import Spinner from "../UI/spinner/spinner";
import AddClient from "../Admin/addClient";
import DeleteClient from "../Admin/deleteClient";

const Client = (props) => {
  return (
    <div className="xl:px-8 lg:px-6 md:px-4 px-2">
      <img
        className="md:min-w-32 min-w-24 md:w-32 w-24  rounded-sm "
        src={props.logoSrc}
        alt={props.name}
      />
    </div>
  );
};

const Clients = (props) => {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [clientList, setClientList] = useState([]);

  async function getClients() {
    setIsDataFetched(false);
    try {
      const {
        data,
        config: { baseURL },
      } = await axiosInstance.get("clients/all");
      console.log(data, baseURL);
      setClientList(
        data.map((client) => (
          <div className="flex flex-col">
            <div className="flex self-end">
              <DeleteClient id={client._id} />
            </div>
            <Client
              logoSrc={baseURL + "file/" + client.logoUrl}
              name={client.name}
            />
          </div>
        ))
      );
      setIsDataFetched(true);
    } catch (err) {
      console.log(err);
      setIsDataFetched(true);
    }
  }

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className="flex flex-col w-full py-8 z-0 relative my-8">
      <img
        className="-z-10 absolute top-0 lg:w-1/4 md:w-2/5 w-1/2 transform lg:-translate-y-64 -translate-y-32 "
        src={vector3}
        alt=""
      />

      <h2 className="font-heading self-center font-bold xl:mt-8">
        Whom we worked for?
      </h2>
      <p className="font-heading self-center font-bold">
        Join these multi national companies.
      </p>
      <AddClient />
        {isDataFetched ? (
          <div className="flex lg:w-2/3 w-3/4 py-8 overflow-x-scroll mx-auto items-center my-8">
          {clientList.map((client) => client)}</div>
        ) : (
          <div className="py-8 mx-auto">
            <Spinner />
          </div>
        )}
      <p className="font-heading self-center font-bold mt-4">
        Want us to work for you?
      </p>
      <button className="self-center md:px-4 md:py-2 px-2 py-1 border rounded shadow border-orange-mid mt-4 text-orange-mid font-heading uppercase animation-scale">
        <h6>Let us know!</h6>
      </button>
    </div>
  );
};

export default Clients;
