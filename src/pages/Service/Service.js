import "./Service.scss";
import Navbar from "../../components/Navbar/MainNavbar/Navbar";
import React from "react";

import MyAccordion from "../../components/UI/Accordion/MyAccordion";
import Footer from "../../components/Footer/Footer";

const Service = () => {
  return (
    <>
      <Navbar />
      <div className="app__service">
        <MyAccordion />
      </div>
      <Footer />
    </>
  );
};

export default Service;
