import React from "react";
import star from "../images/star.png";
import user from "../images/user.png";
import arrow1 from "../images/control1.png";
import arrow2 from "../images/control.png";
const Slider = () => {
  const items = [1, 1, 1];
  return (
    <div className="container mt-[135px] lg:ml-[99.6px]  lg:mr-[99.6px]  lg:px-[96px] py-1 pb-8 px-3 md:px-[0px] mx-auto w-full">
      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        {/* <!-- Carousel wrapper --> */}
        <div class="relative h-68 overflow-hidden rounded-lg md:h-96 mb-4">
          {/* <!-- Item 1 --> */}
          <div class="  duration-700 ease-in-out" data-carousel-item></div>
          <div class=" relative  duration-700 ease-in-out" data-carousel-item>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-9">
              {items.map((item) => (
                <div className="flex-row justify-start  text-left my-[12px] ">
                  <img src={star} alt="" />
                  <p className="text-[18px] my-[12px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    ed do amet sint. Velit officia consequat duis enim velit
                    mollit. rcitation veniam consequat sunt
                  </p>{" "}
                  <button className="border-b-2  border-black">
                    Read more
                  </button>
                  <div className="flex mt-[30px]">
                    <div className="">
                      <img src={user} alt="" />
                    </div>
                    <div className="flex-row ml-2 ">
                      <h1 className="font-semibold text-[18px] ">
                        Ahmed Khokon
                      </h1>
                      <p>Brand Desinger</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-8 mx-auto w-full mt-10">
              <img src={arrow1} alt="" />
              <img src={arrow2} alt="" />
            </div>
          </div>
          <div class="  duration-700 ease-in-out" data-carousel-item></div>
        </div>
        {/* <!-- Slider controls --> */}
      </div>
    </div>
  );
};

export default Slider;
