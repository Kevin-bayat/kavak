import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";

import "./FooterBottom.style.scss";

const FooterBottom = () => {
  return (
    <div className="footer__bottom">
      <div className="left">
        <p className="p__openSans">
          &copy; 2022. Designed by
          <a
            href="https://www.linkedin.com/in/keyvan-bayat-4a37231b2/"
            target="_blank"
            style={{ color: "#dcca87", paddingLeft: "4px" }}
          >
            Keyvan-Bayat
          </a>
        </p>
      </div>
      <div className="center p__openSans">
        <a href="#top">GO TO TOP</a>
      </div>
      <div className="right">
        <div className="social">
          <div className="social__icon">
            <a href="https://www.instagram.com/kavakbana" target="_blank">
              <InstagramIcon className="instagram" />
            </a>
          </div>
          <div className="social__icon">
            <a
              href="https://www.linkedin.com/in/keyvan-bayat-4a37231b2/"
              target="_blank"
            >
              <LinkedInIcon className="linkedin" />
            </a>
          </div>
          <div className="social__icon">
            <a
              href="https://www.linkedin.com/in/keyvan-bayat-4a37231b2/"
              target="_blank"
            >
              <EmailIcon className="email" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterBottom;
