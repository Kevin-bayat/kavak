import React, { useState } from "react";
import "./Navbar.styles.scss";
import "../Logo/Logo.styles.scss";
import Logo from "../Logo/Logo";
// import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { animated, useTransition } from "react-spring";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
// import Cursor from "../Cursor/Cursor";
const Navbar = ({ isHomePage }) => {
  console.log({ isHomePage });
  const [isOpen, setIsOpen] = useState(false);
  const [pageOffset, setPageOffset] = useState(0);
  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const navbarClickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleScroll = () => {
    // console.log(window.pageYOffset);
    setPageOffset(window.pageYOffset);
    if (window.pageYOffset > 700) {
      //   if (!color) {
      //     setColor("red");
      //   }
      // } else {
      //   if (color) {
      //     setColor("");
      //   }
      // }
    }
  };

  window.addEventListener("scroll", handleScroll);
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };
  return (
    // <div className="navbarContainer section__padding">
    //   <div>
    //     <Link to="/">
    //       <Logo isOpen={isOpen} />
    //     </Link>
    //   </div>
    //   {transition(
    //     (style, item) =>
    //       item && (
    //         <animated.div className="navbar" style={style}>
    //           <div />
    //           <div>
    //             <ul className="nav">
    //               <li className="nav-items">
    //                 <Link to="/projects" className={` nav-item`}>
    //                   projects
    //                 </Link>
    //               </li>
    //               <li className="nav-items">
    //                 <Link to="/news" className={` nav-item`}>
    //                   news
    //                 </Link>
    //               </li>
    //               <li className="nav-items">
    //                 {/*<Link to="/service" className={` nav-item`}>*/}
    //                 <a href="#service"> service</a>
    //                 {/*</Link>*/}
    //               </li>
    //
    //               <li className="nav-items">
    //                 {/*<Link to="/about-us" className={` nav-item`}>*/}
    //                 <a href="#about-us"> about us</a>
    //                 {/*</Link>*/}
    //               </li>
    //               <li className="nav-items">
    //                 <Link to="/contact-us" className={` nav-item`}>
    //                   contacts
    //                 </Link>
    //               </li>
    //             </ul>
    //           </div>
    //           <div />
    //         </animated.div>
    //       )
    //   )}
    //   <div onClick={navbarClickHandler}>
    //     <BurgerMenu isOpen={isOpen} pageOffset={pageOffset} />
    //   </div>
    // </div>
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
          <a href="#news">news</a>
        </li>
        <li className="p__openSans">
          <a href="#service">service</a>
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
          fontSize={27}
          onClick={toggleMenuHandler}
        />
        {toggleMenu && (
          <div className="app__navbar-smallScreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={toggleMenuHandler}
            />
            <ul className="app__navbar-smallScreen_links">
              <li className="p__openSans" onClick={toggleMenuHandler}>
                <a href="#projects">projects</a>
              </li>
              <li className="p__openSans" onClick={toggleMenuHandler}>
                <a href="#news">news</a>
              </li>
              <li className="p__openSans" onClick={toggleMenuHandler}>
                <a href="#service">service</a>
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
