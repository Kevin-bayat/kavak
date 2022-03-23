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
      {/*<div className="right">*/}
      {/*  <div className="kavak-info">*/}
      {/*    <div className="icon">*/}
      {/*      <span>*/}
      {/*        <LocationOnIcon fontSize="small" />*/}
      {/*      </span>*/}
      {/*      <p>*/}
      {/*        Tehran - Nobonyad Sq. - sixth kuhestan Avenue - no.13 - unit 7{" "}*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className="icon">*/}
      {/*      <span>*/}
      {/*        <PhoneIcon fontSize="small" />*/}
      {/*      </span>*/}
      {/*      <div className="phone">*/}
      {/*        <p>(+98) 21 2229 2616</p>*/}
      {/*        <p>(+98) 21 2282 2007 - 8</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="icon">*/}
      {/*      <span>*/}
      {/*        <FaxIcon fontSize="small" />*/}
      {/*      </span>*/}
      {/*      <div className="fax">*/}
      {/*        <p>(+98) 21 2229 2616</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="social">*/}
      {/*    <div className="social__icon">*/}
      {/*      <a href="https://www.instagram.com/kavakbana" target="_blank">*/}
      {/*        <InstagramIcon className="instagram" />*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*    <div className="social__icon">*/}
      {/*      <a*/}
      {/*        href="https://www.linkedin.com/in/keyvan-bayat-4a37231b2/"*/}
      {/*        target="_blank"*/}
      {/*      >*/}
      {/*        <LinkedInIcon className="linkedin" />*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*    <div className="social__icon">*/}
      {/*      <a*/}
      {/*        href="https://www.linkedin.com/in/keyvan-bayat-4a37231b2/"*/}
      {/*        target="_blank"*/}
      {/*      >*/}
      {/*        <EmailIcon className="email" />*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
export default FooterBottom;
