import React, { useState } from "react";
import homeBg from "../images/homebg.png";
const ChoseHostingPackag = () => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  return (
    <div
      className="homeBg bg-white text-white"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container lg:ml-[99.6px]  lg:mr-[99.6px]  lg:px-[96px] py-1 pb-[102px] px-5 md:px-0">
        <h1 className="text-center text-[22px] md:text-[32px] font-[700]  mb-[18px] pt-[80px] leading-[32px] md:leading-[40px] ">
          Choose your hosting package
        </h1>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center items-center gap-2 mt-[50px]">
          <p className={`${active ? "text-gray-500" : "text-white"} `}>
            Monthly
          </p>
          <div className="flex justify-center items-center gap-2 ">
            <button onClick={handleActive}>change</button>
            <p className={`${!active ? "text-gray-500" : "text-white"} `}>
              Yearly
            </p>
            <img src="" alt="" />
            <p>(100% saved)</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-2">
          <div className="border px-[30px] border-[#64788E] rounded-[8px] bg-[#172535] text-white text-center font-inter w-auto py-[36px]">
            <div className="mb-[50px] ">
              <h1 className="text-[18px] font-semibold">
                Single Shared Hosting
              </h1>
              <p>Ideal solution for beginners</p>
            </div>
            <div className="">
              <p className="text-[18px] ">
                $9.99{" "}
                <span className="ml-1 text-sm bg-[#007aff] px-3 py-2 rounded-3xl">
                  {" "}
                  SAVE 801%
                </span>
              </p>
              <div className="">
                <sup className="text-[24px] inline-block">$</sup>{" "}
                <h1 className="text-[56px] font-bold inline-block">1.99</h1>
                <sub className="inline-block text-[16]">/mo</sub>
                <p>USD</p>
              </div>
              <div className="mt-2">
                <button className="   bg-[#007aff] px-[36px]      py-[15px] font-[300] text-[18px] rounded-[50px]  block w-full">
                  Select
                </button>
                <p className="mt-[18px]">$3.99/mo when you renew</p>
              </div>
              <div className="text-start mt-[40px]">
                <p>Top feature comparison</p>
                <p className="py-2">
                  {" "}
                  <span className="mr-1 font-bold">1</span> website
                </p>
                <p className="py-2">
                  {" "}
                  <span className="mr-1 font-bold">50 GB</span> SSD Storage
                </p>
                <p className="py-2">
                  {" "}
                  <span className="mr-1 font-bold">~10 000</span> Visits Monthly
                  <img src="" alt="" />
                </p>
                <p className="py-2">
                  {" "}
                  <span className="mr-1 font-bold">1</span> Email Account
                </p>
                <p className="py-2">
                  {" "}
                  <span className="mr-1 font-bold">100 GB</span> Bandwidth
                </p>
                <p className="py-2 mb-2">
                  {" "}
                  <span className="mr-1 font-bold">1 </span> Databases
                </p>
                <p className="py-3">Security</p>
                <div className="flex justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseHostingPackag;
