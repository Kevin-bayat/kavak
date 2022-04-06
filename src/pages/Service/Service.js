import "./Service.scss";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";
import React from "react";
import FooterBottom from "../../components/FooterBottom/FooterBottom";

const Service = () => {
  return (
    <div className="app__service">
      <Navbar />
      <Services />
      <FooterBottom />
    </div>
  );
};

export default Service;
