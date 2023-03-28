import React from "react";
import HomeBanner from "../components/HomeBanner";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-green-900">
      <Navbar />
      <HomeBanner></HomeBanner>
    </div>
  );
};

export default Home;
