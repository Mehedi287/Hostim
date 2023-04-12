import React from "react";
import map from "../images/map.png";
const HostimInWorld = () => {
  return (
    <div className="container mt-[135px] lg:ml-[99.6px]  lg:mr-[99.6px]  lg:px-[96px] py-1 pb-8 px-3 md:px-[0px] mx-auto w-full">
      <div className=" flex flex-col md:flex-row mb-[90px] lg:items-center gap-5 justify-between px-4 md:px-0">
        <div className="">
          <h1 className="md:text-start text-center text-[32px] md:text-[40px] font-[600]   mt-4  leading-[32px] md:leading-[48px] ">
            Hostim in world <br /> Datacenters
          </h1>
        </div>
        <div className="flex md:flex-row gap-3 md:gap-0 flex-col md:mt-0 mt-5  ">
          <div className="p-4 mr-4 text-center border border-gray-300 rounded-md">
            <h1 className="font-[400]  text-[48px]">2</h1>
            <p className="text-[18px] text-gray-600  ">Continents</p>
          </div>
          <div className="p-4 mr-4 text-center border border-gray-300 rounded-md">
            <h1 className="font-[400]  text-[48px]">2</h1>
            <p className="text-[18px] text-gray-600  ">Continents</p>
          </div>
          <div className="p-4 mr-4 text-center border border-gray-300 rounded-md">
            <h1 className="font-[400]  text-[48px]">2</h1>
            <p className="text-[18px] text-gray-600  ">Continents</p>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-0">
        <img src={map} alt="" />
      </div>
    </div>
  );
};

export default HostimInWorld;
