import React from "react";
import Slider from "../../components/Slider/Slider";
import Description from "../../components/description/Description";
// import OurWork from "../../components/our-work/OurWork";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";

import "../../App.css";
import OurProjects from "../../components/OurProjects/OurProjects";
import About from "../../components/AboutUs/About";

const Home = () => {
  return (
    <div>
      <Navbar isHomePage />
      <Slider />
      <About />
      <Services />
      <OurProjects />
      {/*<Description />*/}
      {/*<OurWork />*/}
      <Footer />
    </div>
  );
};
export default Home;
