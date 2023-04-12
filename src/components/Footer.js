import React from "react";
import whiteLogo from "../images/whiteLogo.png";
import facebook from "../images/facebook.png";
import twiter from "../images/twiter.png";
import git from "../images/github.png";
import dribble from "../images/dribble.png";
import linkedIn from "../images/LinkedIn.png";
const Footer = () => {
  return (
    <div className="homeBg">
      <div className="container lg:ml-[99.6px]  lg:mr-[99.6px]  lg:px-[96px] py-1  px-5 md:px-[50px] lg:mt-[80px]">
        <div className="lg:flex justify-between pt-[85px] md:gap-[90px]">
          <div className=" md:w-[30%] w-[100%]">
            <img src={whiteLogo} className="h-8" alt="" />
            <p className="text-gray-400 text-start mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit ...
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 md:w-[70%] w-[100%] lg:mt-0 mt-10">
            <div className="mb-3">
              <h1 className="text-gray-400 text-start mb-4">Resources</h1>
              <div className="text-white text-start  leading-[30px] ">
                <p className="hover:underline cursor-pointer">Domain </p>
                <p className="hover:underline cursor-pointer">
                  {" "}
                  Shared Hosting{" "}
                </p>

                <p className="hover:underline cursor-pointer"> Web Hosting </p>

                <p className="hover:underline cursor-pointer">
                  {" "}
                  Private Hosting{" "}
                </p>
              </div>
            </div>
            <div className="inline-block mb-3">
              <h1 className="text-gray-400 text-start mb-4">Hosting</h1>
              <div className="text-white text-start  leading-[30px]">
                <a className="hover:underline cursor-pointer inline-block">
                  Game Server Hosting{" "}
                </a>
                <a className="hover:underline cursor-pointer inline-block">
                  Hosting Wordpress
                </a>

                <a className="hover:underline cursor-pointer inline-block">
                  {" "}
                  Email Hosting
                </a>

                <a className="hover:underline cursor-pointer inline-block">
                  Hosting Unlimited
                </a>
              </div>
            </div>
            <div className="inline-block mb-3">
              <h1 className="text-gray-400 text-start mb-4">Company</h1>
              <div className="text-white text-start  leading-[30px]">
                <p className="hover:underline cursor-pointer">About </p>
                <p className="hover:underline cursor-pointer">Career</p>

                <p className="hover:underline cursor-pointer"> Email Hosting</p>

                <p className="hover:underline cursor-pointer">Contact Us</p>
              </div>
            </div>
            <div className="inline-block mb-3">
              <h1 className="text-gray-400 text-start mb-4">Help</h1>
              <div className="text-white text-start  leading-[30px]">
                <p className="hover:underline cursor-pointer">FAQ </p>
                <p className="hover:underline cursor-pointer">Help support</p>

                <p className="hover:underline cursor-pointer">
                  {" "}
                  Legal documents
                </p>

                <p className="hover:underline cursor-pointer">Ecology</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between py-[32px]">
          <p className="text-[18px] text-gray-500  text-start dark:text-gray-400">
            © 2022 Hostim. Tous droits réservés.
          </p>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img src={twiter} alt="" />
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img src={linkedIn} alt="" />
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img src={git} alt="" />
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img src={dribble} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
