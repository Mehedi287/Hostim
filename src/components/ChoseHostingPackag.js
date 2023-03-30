import React, { useState } from "react";
import homeBg from "../images/homebg.png";
import saved from "../images/savedIcon.png";
import wrong from "../images/wrong.png";
import checkbox from "../images/Checkbox.png";
import help from "../images/help_outline.png";
import right from "../images/icon.png";
import arrow from "../images/dawon_arrow.png";

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
      <div className="container lg:ml-[99.6px]  lg:mr-[99.6px]  lg:px-[96px] py-1 pb-[102px] px-5 md:px-[0px] mx-auto">
        <h1 className="text-center text-[22px] md:text-[32px] font-[700]  mb-[18px] pt-[80px] leading-[32px] md:leading-[40px] ">
          Choose your hosting package
        </h1>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center items-center gap-2 mt-[50px] mb-[50px]">
          <p className={`${active ? "text-gray-500" : "text-white"} `}>
            Monthly
          </p>
          <div className="flex justify-center items-center gap-2 ">
            <button>
              {" "}
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  onClick={handleActive}
                  class="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                ></div>
              </label>
            </button>
            <p className={`${!active ? "text-gray-500" : "text-white"} `}>
              Yearly
            </p>
            <img src={saved} alt="" />
            <p className="text-[#E1B207]">(100% saved)</p>P
          </div>
        </div>
        <div className="grid   md:grid-cols-3 grid-cols-1 gap-5 w-full mx-auto">
          <div className="border px-[30px] border-[#64788E] rounded-[8px] bg-[#172535] text-white text-center font-inter w-auto py-[36px]">
            <div className="mb-[50px] ">
              <h1 className="text-[18px] font-semibold">
                Single Shared Hosting
              </h1>
              <p>Ideal solution for beginners</p>
            </div>
            <div className="">
              <p className="text-[18px] ">
                $9.99
                <span className="ml-1 text-sm bg-[#007aff] px-3 py-2 rounded-3xl ">
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
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Unlimeted</span> Free SSL
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2   inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Cloudflare</span>Protected
                  </p>
                  <p> Nameservers</p>
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={wrong}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Cloudflare </span>CDN
                    ($9.95 value)
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <p className="py-3">Free Bonuses</p>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Weekly Backups</span> L
                  </p>
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={wrong}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Free </span> Domain ($8.99
                    value)
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <p className="py-3">Free Bonuses</p>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Managed </span> WordPress
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={wrong}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">WordPress </span>
                    Acceleration
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={wrong}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">
                      WordPress Staging Tool{" "}
                    </span>
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <p className="py-3">Free Bonuses</p>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">30 Days</span>Money Back
                    Guarantee
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">24/7/365 </span>Support
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">99.9%</span> Uptime
                    Guarantee
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" flex justify-center items-center cursor-pointer">
                  <p className="  inline-block mr-2">See all features </p>
                  <img className="inline-block" src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="border px-[30px] border-[#64788E] rounded-[8px] bg-white text-black text-center font-inter w-auto py-[36px]">
            <div className="mb-[50px] ">
              <h1 className="text-[18px] font-semibold">
                Premium Shared Hosting
              </h1>
              <p>Perfect package for personal websites</p>
            </div>
            <div className="">
              <p className="text-[18px] ">
                $12.49
                <span className="ml-1 text-sm bg-[#007aff] px-3 py-2 rounded-3xl ">
                  {" "}
                  SAVE 76%
                </span>
              </p>
              <div className="">
                <sup className="text-[24px] inline-block">$</sup>{" "}
                <h1 className="text-[56px] font-bold inline-block">2.99</h1>
                <sub className="inline-block text-[16]">/mo</sub>
                <p>USD</p>
              </div>
              <div className="mt-2">
                <button className="   bg-[#007aff] px-[36px]      py-[15px] font-[300] text-[18px] rounded-[50px]  block w-full">
                  Select
                </button>
                <p className="mt-[18px]">$6.99/mo when you renew</p>
              </div>
              <div className="text-start mt-[40px]">
                <p>Top feature comparison</p>
                <p className="py-2">
                  {" "}
                  <span className="mr-1 font-bold">100</span> website
                </p>
                <p className="py-2">
                  {" "}
                  <span className="mr-1 font-bold">100 GB</span> SSD Storage
                </p>
                <p className="py-2">
                  {" "}
                  <span className="mr-1 font-bold">~25 000</span> Visits Monthly
                  <img src="" alt="" />
                </p>
                <p className="py-2">
                  {" "}
                  <span className="mr-1 font-bold">Free</span> Email Account
                </p>
                <p className="py-2">
                  {" "}
                  <span className="mr-1 font-bold">Unlimited GB</span> Bandwidth
                </p>
                <p className="py-2 mb-2">
                  {" "}
                  <span className="mr-1 font-bold">Unlimited </span> Databases
                </p>
                <p className="py-3">Security</p>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Unlimeted</span> Free SSL
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2   inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Cloudflare</span>Protected
                  </p>
                  <p> Nameservers</p>
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={wrong}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Cloudflare </span>CDN
                    ($9.95 value)
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <p className="py-3">Free Bonuses</p>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Weekly Backups</span> L
                  </p>
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={wrong}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Free </span> Domain ($8.99
                    value)
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <p className="py-3">Free Bonuses</p>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Managed </span> WordPress
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={wrong}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">WordPress </span>
                    Acceleration
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={wrong}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">
                      WordPress Staging Tool{" "}
                    </span>
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <p className="py-3">Free Bonuses</p>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">30 Days</span>Money Back
                    Guarantee
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">24/7/365 </span>Support
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">99.9%</span> Uptime
                    Guarantee
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" flex justify-center items-center cursor-pointer">
                  <p className="  inline-block mr-2">See all features </p>
                  <img className="inline-block" src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="border px-[30px] border-[#64788E] rounded-[8px] bg-[#172535] text-white text-center font-inter w-auto py-[36px]">
            <div className="mb-[50px] ">
              <h1 className="text-[18px] font-semibold">
                Business Shared Hosting
              </h1>
              <p>Optimized for small businesses</p>
            </div>
            <div className="">
              <p className="text-[18px] ">
                $15.99
                <span className="ml-1 text-sm bg-[#007aff] px-3 py-2 rounded-3xl ">
                  {" "}
                  SAVE 801%
                </span>
              </p>
              <div className="">
                <sup className="text-[24px] inline-block">$</sup>{" "}
                <h1 className="text-[56px] font-bold inline-block">3.99</h1>
                <sub className="inline-block text-[16]">/mo</sub>
                <p>USD</p>
              </div>
              <div className="mt-2">
                <button className="   bg-[#007aff] px-[36px]      py-[15px] font-[300] text-[18px] rounded-[50px]  block w-full">
                  Select
                </button>
                <p className="mt-[18px]">$8.99/mo when you renew</p>
              </div>
              <div className="text-start mt-[40px]">
                <p>Top feature comparison</p>
                <p className="py-2">
                  {" "}
                  <span className="mr-1 font-bold">1</span> website
                </p>
                <p className="py-2">
                  {" "}
                  <span className="mr-1 font-bold">200 GB</span> SSD Storage
                </p>
                <p className="py-2">
                  {" "}
                  <span className="mr-1 font-bold">~100 000</span> Visits
                  Monthly
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
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Unlimeted</span> Free SSL
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2   inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Cloudflare</span>Protected
                  </p>
                  <p> Nameservers</p>
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Cloudflare </span>CDN
                    ($9.95 value)
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <p className="py-3">Free Bonuses</p>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Weekly Backups</span> L
                  </p>
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Free </span> Domain ($8.99
                    value)
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <p className="py-3">Free Bonuses</p>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">Managed </span> WordPress
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">WordPress </span>
                    Acceleration
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">
                      WordPress Staging Tool{" "}
                    </span>
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <p className="py-3">Free Bonuses</p>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">30 Days</span>Money Back
                    Guarantee
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">24/7/365 </span>Support
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="inline-block mr-2 h-[11px] w-[14px]"
                    src={right}
                    alt=""
                  />
                  <p className="py-2 mb-2 inline-block">
                    {" "}
                    <span className="mr-1 font-bold">99.9%</span> Uptime
                    Guarantee
                  </p>

                  <img
                    className="inline-block ml-2 h-[14px] w-[13px]"
                    src={help}
                    alt=""
                  />
                </div>
                <div className=" flex justify-center items-center cursor-pointer">
                  <p className="  inline-block mr-2">See all features </p>
                  <img className="inline-block" src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseHostingPackag;
