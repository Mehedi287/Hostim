import React from "react";
import HomeBanner from "../components/HomeBanner";
import Navbar from "../components/Navbar";
import homeBg from "../images/homebg.png";
import BrandSection from "./../components/BrandSection";
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="homeBg bg-green-400 "
    >
      <Navbar />
      <HomeBanner></HomeBanner>
      <BrandSection />
    </div>
  );
};

export default Home;
