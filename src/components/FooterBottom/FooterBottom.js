import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

import "./FooterBottom.style.scss";
import { Google, Pinterest } from "@mui/icons-material";
import useTranslate from "../../hooks/useTranslate";

const FooterBottom = () => {
  const { translate } = useTranslate();
  return (
    <>
      <div className="center p__openSans">
        <a href="#top">{translate("footer.btn")}</a>
      </div>
      <div className="footer__bottom">
        <div className="left">
          <p className="p__openSans">
            <p>&copy; 2022. Designed by</p>
            <a
              href="https://www.instagram.com/keivan.bayat/"
              target="_blank"
              style={{ color: "#dcca87", paddingLeft: "4px" }}
            >
              Keyvan-Bayat
            </a>
          </p>
        </div>
        <div className="right">
          <div className="social">
            <div className="social__icon">
              <a
                href="https://www.pinterest.com/kavak_architects"
                target="_blank"
              >
                <Pinterest className="pinterest" />
              </a>
            </div>
            <div className="social__icon">
              <a
                href="https://www.instagram.com/kavakarchitects"
                target="_blank"
              >
                <InstagramIcon className="instagram" />
              </a>
            </div>
            <div className="social__icon">
              <a
                href="https://www.linkedin.com/in/kavak-architects-aa2988220/"
                target="_blank"
              >
                <LinkedInIcon className="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterBottom;
