import React, { useState } from "react";
import "./Navbar.styles.scss";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import images, { languageImages } from "../../../constants/images";
import CloseIcon from "@mui/icons-material/Close";
import useTranslate from "../../../hooks/useTranslate";
import i18next from "i18next";

const Navbar = ({ isHomePage, onChangeLanguage }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { translate, changeLanguage } = useTranslate();

  const handleChangeLanguage = (lng) => {
    changeLanguage(lng);
  };
  const toggleMenuHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <div
      className="app__navbar"
      id="top"
      style={{ backgroundColor: isHomePage ? "transparent" : "#0c0c0c" }}
    >
      <div className="logo__container">
        <Link to="/" className="app__navbar-logo">
          <img src={images.logo} alt="app logo" />
        </Link>

        <div className={`logo__container--languages`}>
          <img
            onClick={() => handleChangeLanguage("en")}
            src={languageImages.enLanguage}
            alt="en-lang"
          />
          <img
            onClick={() => handleChangeLanguage("fa")}
            src={languageImages.faLanguage}
            alt="ir-lang"
          />
        </div>
      </div>

      <ul className={`app__navbar-links ${i18next.language}`}>
        <li className="p__openSans">
          <Link to="/">{translate("home.navbar")}</Link>
        </li>
        <li className="p__openSans">
          <Link to="/projects">{translate("projects.navbar")}</Link>
        </li>
        <li className="p__openSans">
          <Link to="/service">{translate("service.navbar")}</Link>
        </li>
        <li className="p__openSans">
          <Link to="/articles">{translate("articles.navbar")}</Link>
        </li>
        <li className="p__openSans">
          <Link to="/archive">{translate("archive.navbar")}</Link>
        </li>
        <li className="p__openSans">
          <Link to="/about-us">{translate("aboutUs.navbar")}</Link>
        </li>
        <li className="p__openSans">
          <Link to="/contact-us">{translate("contactUs.navbar")}</Link>
        </li>
      </ul>

      <div className="app__navbar-smallScreen">
        <GiHamburgerMenu
          color="#fff"
          style={{ cursor: "pointer" }}
          fontSize={27}
          onClick={toggleMenuHandler}
        />
        {toggleMenu && (
          <div className="app__navbar-smallScreen_overlay flex__center slide-bottom">
            <CloseIcon
              fontSize="large"
              className="overlay__close"
              onClick={toggleMenuHandler}
            />
            <ul className="app__navbar-smallScreen_links">
              <li className="p__openSans" onClick={toggleMenuHandler}>
                <Link to="/">{translate("home.navbar")}</Link>
              </li>
              <li className="p__openSans" onClick={toggleMenuHandler}>
                <Link to="/projects">{translate("projects.navbar")}</Link>
              </li>
              <li className="p__openSans" onClick={toggleMenuHandler}>
                <Link to="/service">{translate("service.navbar")}</Link>
              </li>
              <li className="p__openSans">
                <Link to="/articles">{translate("articles.navbar")}</Link>
              </li>
              <li className="p__openSans">
                <Link to="/archive">{translate("archive.navbar")}</Link>
              </li>
              <li className="p__openSans" onClick={toggleMenuHandler}>
                <Link to="/about-us">{translate("aboutUs.navbar")}</Link>
              </li>
              <li className="p__openSans" onClick={toggleMenuHandler}>
                <Link to="/contact-us">{translate("contactUs.navbar")}</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
