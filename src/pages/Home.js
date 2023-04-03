import React from "react";
import ChoseHostingPackag from "../components/ChoseHostingPackag";
import Commnet from "../components/Commnet";
import HomeBanner from "../components/HomeBanner";
import Navbar from "../components/Navbar";
import OurServicesIncludes from "../components/OurServicesIncludes";
import Services from "../components/Services";
import Soluation from "../components/Soluation";

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
    </div>
  );
};

export default Home;
