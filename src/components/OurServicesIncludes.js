import React from "react";
import checkbox from "../images/Checkbox.png";
const OurServicesIncludes = () => {
  const items = [
    "Free SSL",
    "Access Management",
    "eCommerce Optimization",
    "Free Migration",
    "Backups",
    "Cloudflare CDN & DDoS Protection",

    "PHP Speed Boost",
    "LiteSpeed WordPress Module",
    "One-Click WordPress Installation",
    "24/7/365 Tech Support",
    "Auto Script Installer",
    "99.9% Uptime Guarantee",
  ];
  return (
    <div className="bg-white">
      <div className="container lg:ml-[99.6px]  lg:mr-[99.6px]  lg:px-[96px] py-1 pb-[102px] px-5 md:px-[0px] pt-[162px] w-full mx-auto">
        <div className="">
          <h1 className=" text-center text-[24px] md:text-[32px] font-bold mb-[16px]">
            Our Services include
          </h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-[48px] mt-[50px]  ">
          {items.map((item) => (
            <div className="flex justify-start items-center">
              <img className="w-[21px] h-[20px]  mr-2" src={checkbox} alt="" />
              <p className="   text-[18px]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServicesIncludes;
