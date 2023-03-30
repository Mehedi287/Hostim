import React from "react";
import brandImg from "../images/brand.png";
import ratingImg from "../images/rating.png";
const BrandSection = () => {
  return (
    <div className="  bg-white ">
      <div className="container lg:ml-[99.6px]  lg:mr-[99.6px]  lg:px-[96px] py-1 pb-8 px-3 md:px-[0px] mx-auto w-full">
        <img className=" w-auto mx-auto mt-[57px] pr-3" src={brandImg} alt="" />
        <div className="  grid grid-cols-1  md:grid-cols-2 xl:gap-[160px] md:gap-[20px] gap-2 h-full items-center ">
          <div className=" md:pt-[119px] pt-[60px]   ">
            <img className=" " src={ratingImg} alt="" />
          </div>
          <div className="  flex-row justify-center items-center pt-[20px] md:pt-[157px] ">
            <h1 className=" text-start text-[24px] md:text-[32px] font-bold mb-[16px]">
              More than 96K brands join & <br /> website owners are satisfied
            </h1>
            <p className="mb-[37px] text-start">
              Don't just take our word for it. We're the web hosting provider{" "}
              <br /> of choice for thousands of happy customers.
            </p>
            <button className=" flex justify-start border border-gray-500 text-black hover:bg-[#007aff] px-[36px] py-[16px] rounded-[50px]  bg-white hover:text-white text-sm">
              Join us today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
