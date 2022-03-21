import React, { useState } from "react";
import "./Navbar.styles.scss";
import "../Logo/Logo.styles.scss";
import Logo from "../Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { animated, useTransition } from "react-spring";
import { Link } from "react-router-dom";
// import Cursor from "../Cursor/Cursor";
const Navbar = () => {
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

  return (
    <div className="navbarContainer">
      <div>
        <Link to="/">
          <Logo isOpen={isOpen} />
        </Link>
      </div>
      {transition(
        (style, item) =>
          item && (
            <animated.div className="navbar" style={style}>
              <div />
              <div>
                <ul className="nav">
                  <li className="nav-items">
                    <Link to="/projects" className={` nav-item`}>
                      projects
                    </Link>
                  </li>
                  <li className="nav-items">
                    <Link to="/news" className={` nav-item`}>
                      news
                    </Link>
                  </li>
                  <li className="nav-items">
                    {/*<Link to="/service" className={` nav-item`}>*/}
                    <a href="#service"> service</a>
                    {/*</Link>*/}
                  </li>

                  <li className="nav-items">
                    <Link to="/about-us" className={` nav-item`}>
                      about us
                    </Link>
                  </li>
                  <li className="nav-items">
                    <Link to="/contact-us" className={` nav-item`}>
                      contacts
                    </Link>
                  </li>
                </ul>
              </div>
              <div />
            </animated.div>
          )
      )}
      <div onClick={navbarClickHandler}>
        <BurgerMenu isOpen={isOpen} pageOffset={pageOffset} />
      </div>
    </div>
  );
};
export default Navbar;
