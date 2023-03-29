import React from "react";
import serviceMan from "../images/serviceMan.png";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";
import service4 from "../images/service4.png";
import imgBg from "../images/imgBg.png";
import phoneIcon from "../images/phoneIcon.png";
const Services = () => {
  return (
    <div className="  bg-white ">
      <div className="relative container lg:ml-[99.6px]  lg:mr-[99.6px]  lg:px-[96px] py-1 pb-8 px-3 md:px-0  ">
        <div className="  grid grid-cols-1  md:grid-cols-2 bg-left-bottom  gap-[40px]   h-full   ">
          <div
            className=" bg-no-repeat bg-contain h-full   relative md:top-[50px]  top-[20px] "
            style={{ backgroundImage: `url(${imgBg})` }}
          >
            <img
              className="md:absolute  relative md:top-[-38px] md:left-[50px] md:bottom-[50px]  bottom-[100px] "
              src={serviceMan}
              alt=""
            />
            <div className="absolute  top-[300px] md:top-[455px] left-1/3 -rotate-[17deg]">
              <a
                href=" "
                className="flex justify-center items-center py-2 rounded-md px-3 xl:px-12  text-white rounded-0  bg-[#007aff]"
              >
                <img className="w-[30px] xl:w-[46px]" src={phoneIcon} alt="" />
                <span>(123) 234 - 5678</span>
              </a>
            </div>
          </div>

          <div className="  flex-row justify-center items-center z-30  text-white md:pl-[50px] pl-[15px] pb-[40px] pr-[20px]">
            <h1 className=" text-start text-[22px] md:text-[32px] font-[700]  mb-[16px] pt-[80px] leading-[32px] md:leading-[40px] text-white ">
              Services that keep your <br /> business in mind
            </h1>
            <p className="mb-[97px] text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry hosting service provider
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] ">
              <div className="text-start">
                <img src={service1} alt="" />
                <h1 className="mt-[12px] ">Service title </h1>
                <p className="mt-[12px] text-[14px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
              <div className="text-start">
                <img src={service2} alt="" />
                <h1 className="mt-[12px]">Service title </h1>
                <p className="mt-[12px] text-[14px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
              <div className="text-start">
                <img src={service3} alt="" />
                <h1 className="mt-[12px]">Service title </h1>
                <p className="mt-[12px] text-[14px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
              <div className="text-start">
                <img src={service4} alt="" />
                <h1 className="mt-[12px]">Service title </h1>
                <p className="mt-[12px] text-[14px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>
          </div>
          <div className="absolute right-0  top-[510px]  md:top-0  md:left-[680px] overflow-hidden inset-0 bg-blue-800 -z-5 md:w-[100vw]  "></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
