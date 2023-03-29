import React from "react";
import solulationImg from "../images/soluatino.png";
import icon from "../images/icon.png";
const Soluation = () => {
  return (
    <div className="  bg-white ">
      <div className="container lg:ml-[99.6px]  lg:mr-[99.6px]  lg:px-[96px] py-1 pb-[102px] px-3 md:px-0">
        <div className="  grid grid-cols-1  md:grid-cols-2    h-full items-center ">
          <div className="  flex-row justify-center items-center md:order-1 order-2 ">
            <h1 className=" text-start text-[22px] md:text-[32px] font-[700]  mb-[16px] pt-[80px] leading-[32px] md:leading-[40px]  ">
              A Solution that Grows with Your
              <br />
              Business
            </h1>
            <p className="mb-[37px] text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been thdustry's standard dummy text.
              over wordpress hosting
            </p>
            <p className="mb-[61px] text-start">
              Morem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum hosting services and tecnical support
            </p>
            <div className=" grid grid-cols-2 gap-y-[25px] gap-x-[13px]  mb-[34px] ">
              <div className="flex  justify-start items-center">
                <img className="h-[14px]" src={icon} alt="" />
                <p className="ml-2">Blog Hosting</p>
              </div>
              <div className="flex  justify-start items-center">
                <img className="h-[14px]" src={icon} alt="" />
                <p className="ml-2">Blog Hosting</p>
              </div>
              <div className="flex  justify-start items-center">
                <img className="h-[14px]" src={icon} alt="" />
                <p className="ml-2">Blog Hosting</p>
              </div>
              <div className="flex  justify-start items-center">
                <img className="h-[14px]" src={icon} alt="" />
                <p className="ml-2">Blog Hosting</p>
              </div>
            </div>
            <button className=" flex justify-start border border-gray-500 text-black hover:bg-[#007aff] px-[36px] py-[16px] rounded-[50px]  bg-white hover:text-white text-sm mb-[50px]">
              Join us today
            </button>
          </div>
          <div className=" md:pt-[119px] pt-[60px] order-1 md:order-2">
            <img className=" " src={solulationImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soluation;
