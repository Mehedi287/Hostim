import React from "react";
import laptopwithman from "../images/commentMan.png";
import queatio1 from "../images/qute1.png";
import queatio2 from "../images/qute2.png";
const Commnet = () => {
  return (
    <div className="   grid lg:grid-cols-5 grid-cols-1  lg:gap-4 mb-5">
      <div className="col-span-3 bg-[#D8EBF5]">
        <img className="pt-[31px] pb-[6px]  " src={laptopwithman} alt="" />
      </div>
      <div className="flex  mt-5 lg:mt-0 relative items-center col-span-2">
        <div className=" bg-banner py-130  max-w-[720px] lg:w-[50vw] pl-[37px] text-white  static lg:absolute w-full   right-0 ">
          <div className="flex justify-start">
            {" "}
            <img className="w-[60px] lg:w-auto" src={queatio1} alt="" />
          </div>

          <p className="text-[20px] lg:text-[24px] font-normal   pr-[0px] text-left">
            I love the performance and the technical support! Since WiredTree
            acquired me, I've had a lot of downtimes. It's incredible how much
            faster my site loads now because it works so well. Also, they have
            the best support. Particularly their technical knowledge. Hostim is
            great! I'm glad I switched!
          </p>
          <div className="flex justify-end">
            <img className="w-[60px] lg:w-auto" src={queatio2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commnet;
