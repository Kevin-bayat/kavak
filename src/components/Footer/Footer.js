import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import FooterBottom from "../FooterBottom/FooterBottom";
import useTranslate from "../../hooks/useTranslate";

const Footer = () => {
  const { translate } = useTranslate();
  return (
    <div>
      <div className="footer" id="contacts">
        <div className="footer__contact flex__center ">
          <h1>{translate("footer1")}</h1>
          <p>{translate("footer2")}</p>
          <Link to="/contact-us">
            <Button className="footer__button">{translate("footer3")}</Button>
          </Link>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};
export default Footer;
