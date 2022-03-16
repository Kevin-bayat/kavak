import React from "react";
import Slider from "../../components/Slider/Slider";
import Description from "../../components/description/Description";
import OurWork from "../../components/our-work/OurWork";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Description />
      <OurWork />
      <Footer />
    </div>
  );
};
export default Home;
