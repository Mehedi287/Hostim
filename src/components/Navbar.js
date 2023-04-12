import React, { useState, useEffect } from "react";
import logo from "../images/hostimLogo.png";
import whiteLogo from "../images/whiteLogo.png";
import topLogo from "../images/hostimWhiteLogo.png";

const Navbar = () => {
  const [hidden, setHidden] = useState(true);
  const [emailDrop, setEmailDrop] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setDark(true);
      } else {
        if (!isDark) {
          setDark(false);
        }
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

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
        <div className="fixed top-0 left-0 right-0 w-full z-40">
          <div className="text-[14px] pt-[7px] pb-[8px] font-medium text-white  bg-[#007aff] flex justify-center items-center">
            <img src={topLogo} alt="" />
            <h1 className="ml-4">
              Important message <span className="underline">gose to here</span>
            </h1>
          </div>
        </div>
        <div
          className={`px-4 z-40 md:mx-auto md:px-5  fixed top-[35px] ${
            !isDark ? " lg:text-white bg-transparent" : "bg-white text-black "
          }   w-full  `}
        >
          <nav className={`    py-2 w-full mx-auto`}>
            <div className=" lg:px-[96px] md:px-0 md:mx-auto  container flex flex-wrap items-center justify-between lg:mx-auto w-100  ">
              <a href="#" className="flex items-center lg:mr-5 md:mr-5">
                <img
                  src={isDark ? logo : whiteLogo}
                  className="  "
                  alt="Homtim Logo"
                />
              </a>
              <button
                onClick={handleSetIsShow}
                data-collapse-toggle="navbar-dropdown"
                type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600   right-0  "
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
                } lg:block lg:w-auto lg:mr-[270px] mr-[0]`}
                id="navbar-dropdown"
              >
                <ul class="flex relative flex-col p-4 mt-4 border leading-[22px] lg:ml-0   border-gray-100 lg:rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-[16px] md:font-medium md:border-0 md:bg-transparent ">
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-blue-500 text-[16px] font-semibold   rounded md:bg-transparent  md:p-0    "
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
                      class="flex items-center justify-center w-full py-2 pl-3 pr-4 font-[500]  text-[18px]  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 md:w-auto   "
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
                        class="py-2 text-md text-[16px] leading-[22px]  text-start bg-white text-black rounded-md"
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
                      class="block py-2 pl-3 pr-4  rounded hover:text-blue-500 font-[500] text-[18px] md:border-0 md:hover:text-blue-700 md:p-0  "
                    >
                      VPS
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleEmailDrop}
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      class="flex items-center justify-center w-full py-2 pl-3 pr-4 font-[500]  text-[18px]  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 md:w-auto   "
                    >
                      Email{" "}
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
                      }  font-normal bg-white text-black text-start  divide-y   rounded-lg shadow lg:w-44 w-44`}
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
                            Ecology 1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-[#007aff] hover:text-white"
                          >
                            Ecology 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className={`${
                  !isShow ? "hidden" : "inline"
                } lg:flex     xs:bg-white xs:w-full m-0 p-2 right-0 `}
                id="navbar-dropdown"
              >
                <button className="mr-[32px]  ">Login</button>
                <button className="  main-color px-[36px] py-[16px] rounded-[50px] text-white text-sm">
                  Try for free
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,
        officiis? Soluta repellendus in ipsam est dolores, id beatae nulla
        exercitationem eos velit delectus. Odit quasi magni nam dignissimos nisi
        molestiae, sit ipsa nobis. Amet nulla facere soluta dolores nam
        distinctio earum? Eos nostrum impedit aperiam maxime nihil beatae dolor
        nulla odit quibusdam, quia iste dolore repellat nemo aliquam inventore
        rerum corrupti quos officiis. Aliquid, illo perspiciatis earum sint
        impedit necessitatibus blanditiis harum aperiam rerum velit molestiae
        cumque laboriosam quidem dolorum repellendus alias! Repudiandae aliquam
        vitae amet molestias quae praesentium aliquid maxime tempore neque
        fugiat? Cupiditate deleniti, amet pariatur molestias repudiandae ad
        voluptatem debitis explicabo tempora dolor saepe ullam doloremque
        voluptate nulla id provident eaque harum cumque facere veniam fugiat,
        inventore aperiam at. Repudiandae, itaque maiores consequatur dolore
        culpa tenetur cum magni recusandae harum minus nisi ipsum quam!
        Quisquam, illum dolor! Animi hic molestiae, laudantium iste excepturi
        officia odio iusto inventore ducimus. Veritatis quod alias voluptas
        adipisci, magni delectus corporis voluptatum deserunt totam cum culpa
        illum facere asperiores quasi possimus iusto blanditiis. Vel quod, quam
        reprehenderit facere amet in corrupti culpa, totam maiores illo rem!
        Asperiores iste non cum est dolore ratione, ad repellendus ipsa, debitis
        excepturi libero voluptas, aut ducimus. Soluta atque nostrum inventore
        blanditiis quasi, perferendis deleniti quibusdam adipisci velit pariatur
        expedita saepe rem quam cum est praesentium eaque vel totam quo
        repudiandae debitis veritatis vero eveniet. Quo sequi ducimus aut
        eligendi consectetur illum repudiandae veritatis repellendus,
        accusantium eos sed velit. Obcaecati culpa eos at numquam quia quod
        delectus aspernatur mollitia facere architecto? Eius, iusto sed
        perferendis neque excepturi ipsum unde nam sequi, fugiat soluta, amet
        impedit. Rem labore nobis dolorem non voluptatibus reprehenderit, iusto
        ullam animi officia, dolor illo nam ab quis veniam, corrupti sequi.
        Dicta sed libero, ratione amet assumenda ipsum non vel quam blanditiis
        eius dolor eum deleniti reprehenderit cum! Deserunt culpa impedit
        reiciendis architecto voluptate facere. Qui distinctio sapiente commodi,
        et facere dignissimos, repudiandae eum sed suscipit deleniti ea quam.
        Ratione, voluptates quibusdam. Iure ipsa beatae quas, facilis molestias
        repellendus ducimus, error nesciunt dolor vel praesentium, quasi fugiat
        dolore at inventore? Iusto neque modi animi tenetur nulla incidunt
        deserunt quidem eaque non sapiente odio quas repudiandae adipisci, quia
        doloribus. Magnam velit quae dignissimos magni quia blanditiis? Vitae
        molestias hic nam labore, soluta quidem mollitia. Fugiat iusto dolorum,
        maiores dignissimos ipsum labore aut a doloremque, molestias provident
        dicta? Et commodi, aliquid ullam praesentium odio rem molestiae adipisci
        quae, mollitia amet ducimus eligendi dolore enim ex tenetur maxime
        quaerat dolorum. Ducimus voluptatibus veritatis dicta culpa quae
        incidunt nobis ad eius quis voluptates quod, harum velit laboriosam
        quisquam? Optio dolorem excepturi at suscipit deserunt voluptate placeat
        consectetur non dicta quaerat aperiam itaque perferendis, doloribus
        repellat est reprehenderit pariatur laudantium vel eos commodi
        perspiciatis earum ad dolores. Dolores a nihil quaerat magni deserunt
        tenetur, temporibus vitae amet modi consequatur. Dolorum provident earum
        sit porro possimus quibusdam autem. Fugit repellat numquam et enim,
        mollitia nostrum dolor dolorum eligendi praesentium nesciunt
        consequatur, laboriosam voluptatum, eaque cupiditate alias perferendis
        amet suscipit quod recusandae possimus officiis corporis unde labore
        ipsum? Recusandae aut officia consequuntur, voluptatibus ea optio
        placeat aperiam laudantium sit minima libero, tenetur inventore
        accusamus! Corrupti rem facere beatae totam nesciunt enim perspiciatis
        illo velit hic distinctio quibusdam quis explicabo aut pariatur quae,
        cupiditate maxime eaque. Qui deserunt asperiores, cum placeat incidunt
        dignissimos veritatis nesciunt non possimus velit blanditiis aliquam
        suscipit id, officiis, debitis distinctio praesentium. Corrupti deleniti
        rem exercitationem tenetur fuga ipsum non tempora velit voluptate
        maiores nobis labore accusantium, temporibus qui placeat quo ducimus,
        vel neque natus voluptatibus omnis inventore sed perspiciatis officiis?
        Consequatur, cumque. Asperiores omnis distinctio perferendis nemo sed
        similique voluptate non, ut blanditiis fuga alias nam praesentium
        reprehenderit ipsam! Ullam, ipsa velit quasi odio dolores corporis
        harum! Expedita ex sunt facere perspiciatis temporibus iste repudiandae
        architecto voluptatem, quis aut non illum vel molestiae, odit quidem
        asperiores? Suscipit, hic error? Pariatur quas nesciunt officia eveniet
        eum, tempora laborum quisquam repudiandae accusantium quasi iste amet
        animi, placeat quibusdam error quo provident, minima illo labore velit
        veritatis fuga tempore obcaecati? Omnis aspernatur atque aliquid
        quisquam optio odit asperiores voluptatem ut harum ea. Ab rerum cumque
        ex laborum maiores. Minus magni mollitia, ratione facere, consectetur
        ipsa dolores accusamus quasi aut, sed esse. Deleniti totam nemo minus
        corporis necessitatibus, laudantium nesciunt optio! Dolor optio
        praesentium omnis facilis commodi cum sequi libero eos, quod fuga
        similique. Explicabo, repudiandae ex? Vero aliquid iure repellendus iste
        voluptates ad facilis fugit enim animi minima. Id excepturi quidem
        magni, nobis fugit at inventore tenetur velit accusantium praesentium
        rerum vero error impedit mollitia nemo atque, ad et minima doloremque,
        eum esse architecto magnam omnis deleniti! Ut recusandae, neque aperiam
        vel laudantium cum amet veniam dolore numquam similique, adipisci labore
        quisquam enim excepturi ex iste at nemo placeat impedit eaque.
        Reiciendis quisquam officiis adipisci delectus alias voluptates
        repellendus aliquid quo deserunt eos necessitatibus dolorum omnis maxime
        assumenda ad consectetur, rerum itaque quod quae molestiae quos
        blanditiis aperiam ea! Sapiente, quisquam earum? Debitis cumque
        reprehenderit fugit alias, vitae nisi quaerat autem. Eligendi,
        doloremque? Laboriosam voluptates quod autem itaque labore iusto
        quisquam delectus, illum sit est iste alias vero a, quis vel sunt
        recusandae voluptate tempore ut possimus eum inventore. Rem
        necessitatibus recusandae qui architecto nostrum, non neque inventore
        sunt ducimus suscipit accusamus earum aliquid quae assumenda. Doloremque
        distinctio alias inventore ratione iure esse quasi porro. Vitae nobis
        quidem cupiditate atque accusamus nihil tenetur voluptatum a sit id.
        Amet adipisci quo officia? Dolorem a ex ipsa sequi dolores deserunt
        obcaecati fugiat libero esse vitae vero dolorum tempora blanditiis est
        amet, laborum sit quaerat, magnam qui cupiditate ipsum. Tenetur possimus
        at quis esse quia reiciendis atque quas suscipit. Doloremque eum hic
        earum explicabo facilis reiciendis deleniti nisi, non assumenda
        necessitatibus ratione vitae labore placeat debitis beatae cupiditate
        nulla magnam. Asperiores illo modi obcaecati, eligendi ducimus
        inventore! Commodi ipsum adipisci, voluptatibus maxime voluptatem magnam
        sapiente repellat neque doloremque, impedit iusto voluptate nulla id
        odio ratione. Id, exercitationem ratione? Asperiores repellat laborum
        neque delectus numquam placeat explicabo! Doloribus adipisci, hic
        tenetur delectus reiciendis sit?
      </h1> */}
      </div>
    </>
  );
};

export default Navbar;
