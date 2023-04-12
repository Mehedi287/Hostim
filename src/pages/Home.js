import React from "react";
import ChoseHostingPackag from "../components/ChoseHostingPackag";
import Commnet from "../components/Commnet";
import HomeBanner from "../components/HomeBanner";
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
    </div>
  );
};

export default Home;
