import React from "react";
import ChoseHostingPackag from "../components/ChoseHostingPackag";
import HomeBanner from "../components/HomeBanner";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Soluation from "../components/Soluation";

import BrandSection from "./../components/BrandSection";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner></HomeBanner>
      <BrandSection />
      <Soluation />
      <Services />
      <ChoseHostingPackag />
    </div>
  );
};

export default Home;
