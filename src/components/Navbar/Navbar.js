import React, { useState } from "react";
import "./Navbar.styles.scss";
import "../Logo/Logo.styles.scss";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import images from "../../constants/images";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ isHomePage }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };
  return (
    <div
      className="app__navbar "
      id="top"
      style={{ backgroundColor: isHomePage ? "transparent" : "#0c0c0c" }}
    >
      <Link to="/" className="app__navbar-logo">
        <img src={images.logo} alt="app logo" />
      </Link>

      <ul className="app__navbar-links">
        <li className="p__openSans">
          <a href="#projects">projects</a>
        </li>
        <li className="p__openSans">
          <a href="#products">products</a>
        </li>
        <li className="p__openSans">
          <a href="#service">service</a>
        </li>
        <li className="p__openSans">
          <a href="#archive">archive</a>
        </li>
        <li className="p__openSans">
          <a href="#about-us">about us</a>
        </li>
        <li className="p__openSans">
          <a href="#contacts">contacts</a>
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
                <a href="#projects">projects</a>
              </li>
              <li className="p__openSans" onClick={toggleMenuHandler}>
                <a href="#products">products</a>
              </li>
              <li className="p__openSans" onClick={toggleMenuHandler}>
                <a href="#service">service</a>
              </li>
              <li className="p__openSans">
                <a href="#archive">archive</a>
              </li>
              <li className="p__openSans" onClick={toggleMenuHandler}>
                <a href="#about-us">about us</a>
              </li>
              <li className="p__openSans" onClick={toggleMenuHandler}>
                <a href="#contacts">contacts</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
