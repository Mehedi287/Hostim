import React from "react";
import AskQuestion from "../components/AskQuestion";
import ChoseHostingPackag from "../components/ChoseHostingPackag";
import Commnet from "../components/Commnet";
import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import HostimInWorld from "../components/HostimInWorld";
import Navbar from "../components/Navbar";
import OurServicesIncludes from "../components/OurServicesIncludes";
import Services from "../components/Services";
import Slider from "../components/Slider";
import Soluation from "../components/Soluation";
import Re_useableGrid from "../re_useable/Re_useableGrid";
import WhiteBg from "../re_useable/WhiteBg";

import BrandSection from "./../components/BrandSection";
const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <HomeBanner></HomeBanner>
      <BrandSection />
      <Soluation />
      <Services />
      <ChoseHostingPackag />
      <OurServicesIncludes />
      <Commnet></Commnet>
      <Slider />
      <Re_useableGrid></Re_useableGrid>
      <WhiteBg></WhiteBg>
      <Re_useableGrid></Re_useableGrid>
      <HostimInWorld></HostimInWorld>
      <AskQuestion></AskQuestion>
      <Footer></Footer>
    </div>
  );
};

export default Home;
