import React, { useState } from "react";
import logo from "../images/hostimLogo.png";
const Navbar = () => {
  const [hidden, setHidden] = useState(true);
  const [emailDrop, setEmailDrop] = useState(true);
  const [isShow, setIsShow] = useState(true);
  const handleHidden = () => {
    if (hidden) {
      setHidden(false);
    } else if (!hidden) {
      setHidden(true);
    }
  };
  const handleEmailDrop = () => {
    if (emailDrop) {
      setEmailDrop(false);
    } else if (!emailDrop) {
      setEmailDrop(true);
    }
  };
  const handleSetIsShow = () => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  };
  return (
    <>
      <div className="">
        <h1 className="text-[14px] pt-[7px] pb-[8px] font-medium text-white main-color">
          logo Important message <span className="underline">gose to here</span>
        </h1>
      </div>
      <nav className="px-2 bg-transparent border-gray-200  md:ml-[99.6px] md:mr-[99.6px] md:px-[96px] py-2">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <img src={logo} className="img mr-3  " alt="Homtim Logo" />
          </a>
          <button
            onClick={handleSetIsShow}
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            class={`w-full ${
              !isShow ? "hidden" : "block"
            } lg:block lg:w-auto md:mr-[270px] mr-[0]`}
            id="navbar-dropdown"
          >
            <ul class="flex relative flex-col p-4 mt-4 border leading-[22px]  text-inherit border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-[16px] md:font-medium md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-inherit text-[16px]  rounded md:bg-transparent  md:p-0    "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={handleHidden}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-center w-full py-2 pl-3 pr-4 font-medium   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto   "
                >
                  Hosting{" "}
                  <svg
                    class="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  class={`z-10  absolute  ${
                    hidden ? "hidden" : "block"
                  }  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44`}
                >
                  <ul
                    class="py-2 text-md text-[16px] leading-[22px]  text-start bg-white"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-[#007aff] hover:text-white"
                      >
                        {" "}
                        Web Hosting
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-[#007aff] hover:text-white"
                      >
                        {" "}
                        Email Hosting
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-[#007aff] hover:text-white"
                      >
                        {" "}
                        Domain Name
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-[#007aff] hover:text-white"
                      >
                        {" "}
                        Domain Transfer
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-[#007aff] hover:text-white"
                      >
                        {" "}
                        Legal DocumentsP
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4  rounded hover:text-blue-700  md:border-0 md:hover:text-blue-700 md:p-0  "
                >
                  VPS
                </a>
              </li>
              <li>
                <button
                  onClick={handleEmailDrop}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-center w-full py-2 pl-3 pr-4 font-medium   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto   "
                >
                  Hosting{" "}
                  <svg
                    class="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  class={`z-10  absolute   ${
                    emailDrop ? "hidden" : "block"
                  }  font-normal bg-transparent divide-y divide-gray-100 rounded-lg shadow lg:w-44 w-44`}
                >
                  <ul
                    class="py-2 text-md  text-[16px] leading-[22px]  "
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-[#007aff] hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-[#007aff] hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-[#007aff] hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-[#007aff] hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            className={`${!isShow ? "hidden" : "block"}  mx-auto`}
            id="navbar-dropdown"
          >
            <button className="mr-[32px]  ">Login</button>
            <button className="  main-color px-[36px] py-[16px] rounded-[50px] text-white text-sm">
              Try for free
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
