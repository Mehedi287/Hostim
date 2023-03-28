import React from "react";
import bannerBg from "../images/bannerbg.png";
const HomeBanner = () => {
  return (
    <div className="lg:ml-[99.6px]  lg:mr-[99.6px]  lg:px-[96px] py-1">
      <div className="flex justify-between items-center pb-[77px] p-2 relative overflow-hidden ">
        <div className=" text-left text-white ">
          <h1 className="pt-[175px]    ld:text-[64px] text-[40px] font-bold">
            Affordable <br /> Hostim Solution <br /> Website
          </h1>
          <p className="mt-[22px] mb-[44px]">
            Make moves a free domain and SSL included with a yearly <br />{" "}
            susbscription.
          </p>
          <div className="flex justify-start items-center">
            <button className="  main-color px-[36px] py-[16px] rounded-[50px] text-white text-sm">
              See plans
            </button>
            <button className=" ml-4 text-black hover:bg-[#007aff] px-[36px] py-[16px] rounded-[50px]  bg-white hover:text-white text-sm">
              Try a free demo
            </button>
          </div>{" "}
          <p className="mt-[19px] text-[#AAAFB9]">
            30 day money back guarantee
          </p>
        </div>
        <div className="absolute top-[350px] left-[600px] opacity-5">
          <img src={bannerBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
