import React from "react";
import greenBg from "../images/greenbg.png";
import whiteImg from "../images/imgwhite.png";
const WhiteBg = () => {
  return (
    <div className="bg-white">
      <div className="container mt-[40px] lg:ml-[99.6px]  lg:mr-[99.6px]  lg:px-[96px] py-1 pb-8 px-3 md:px-[0px] mx-auto w-full  ">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 md:gap-[121px] gap-[20px] md:py-9 py-4 md:px-0 px-4`}
        >
          <div
            className="overflow-hidden bg-no-repeat bg-center md:mt-11   flex justify-center items-center h-full  pt-[47px] bg-contain "
            style={{
              backgroundImage: `url(${greenBg})`,
            }}
          >
            <img src={whiteImg} alt="" />
          </div>
          <div className=" flex-row text-start  md:pt-[129px] pt-[20px]">
            <p className="text-gray-500 mt-4">Spacific tags</p>
            <h1 className="text-start text-[22px] md:text-[32px] font-[700]   mt-4  leading-[32px] md:leading-[40px] ">
              Lorem Ipsum is probably the <br /> most popular
            </h1>
            <p className="mt-4">
              To a degree, Lorem Ipsum is gibberish, but it is rooted in a real
              language: Latin. The text's origins are based on a passage from a
              piece of classicall.
            </p>
            <button className="  main-color px-[36px] py-[16px] rounded-[50px] text-white text-sm mt-10">
              CTA Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteBg;
