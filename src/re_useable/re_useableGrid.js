import React from "react";
import whiteBg from "../images/bgWhite.png";
import whiteImg from "../images/imgwhite.png";

const Re_useableGrid = ({ bg }) => {
  return (
    <div className="bg-offWhite">
      <div className="container mt-[40px] lg:ml-[99.6px]  lg:mr-[99.6px]  lg:px-[96px] py-1 pb-8 px-3 md:px-[0px] mx-auto w-full  ">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 md:gap-[121px] gap-[20px] py-9 md:px-0 px-4`}
        >
          <div className=" flex-row text-start  pt-[129px]">
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
          <div
            className="overflow-hidden bg-no-repeat bg-center mt-11   flex justify-center items-center h-full  pt-[47px] bg-cover "
            style={{
              backgroundImage: `url(${whiteBg})`,
            }}
          >
            <img src={whiteImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Re_useableGrid;
