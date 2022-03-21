import React from "react";
import Slider from "../../components/Slider/Slider";
import Description from "../../components/description/Description";
// import OurWork from "../../components/our-work/OurWork";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";

import "../../App.css";
import OurProjects from "../../components/OurProjects/OurProjects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Services />
      <OurProjects />
      {/*<Description />*/}
      {/*<OurWork />*/}
      {/*<Footer />*/}
    </div>
  );
};
export default Home;
