import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import FooterBottom from "../FooterBottom/FooterBottom";

const Footer = () => {
  return (
    <div>
      <div className="footer" id="contacts">
        <div className="footer__contact flex__center ">
          <h1 className="p__openSans">LET`S WORK TOGETHER</h1>
          <p className="p__openSans">
            Let us know what you're looking for in agency. we'll take a look and
            see if this could to be start of something beautiful.
          </p>
          <Link to="/contact-us">
            <Button className="footer__button">CONTACT US</Button>
          </Link>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};
export default Footer;
