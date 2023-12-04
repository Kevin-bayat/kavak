import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Navbar from "../../components/Navbar/MainNavbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import HomePageProjects from "../../components/HomePageProjects/HomePageProjects";
import About from "../../components/AboutUs/About";
import AddToHomeScreen from "@ideasio/add-to-homescreen-react/build/AddToHomeScreen";
import Logo from "../../img/logo/dark-logo.png";
import "../../App.css";

const Home = () => {
  return (
    <div>
      <Navbar isHomePage />
      <HomeSlider />
      <About />
      <Services />
      <HomePageProjects />
      <Footer />
      <AddToHomeScreen
        appId="Add-to-Homescreen kavakarchitects"
        startAutomatically={false}
        startDelay={0}
        lifespan={30}
        skipFirstVisit={false}
        displayPace={0}
        customPromptContent={{
          title: "Do you want to install Add-to-homescreen kavakarchitects?",
          cancelMsg: "No",
          installMsg: "Yes, sure!",
          guidanceCancelMsg: "Dismiss",
          src: Logo,
        }}
      />
    </div>
  );
};
export default Home;
