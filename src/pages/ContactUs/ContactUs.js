import "./ContactUs.style.scss";
import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/MainNavbar/Navbar";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import CircularProgressForLoading from "../../components/UI/CircularProgress/CircularProgressForLoading";
import useTranslate from "../../hooks/useTranslate";
import i18next from "i18next";

const ContactUs = () => {
  const [loading, setLoading] = useState(true);

  const { translate } = useTranslate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const style = {
    order: i18next.language === "fa" ? 2 : 1,
  };
  return (
    <>
      <div className="app_contactUs">
        <Navbar />
        <div className="app_contactUs-container">
          <div className={`app_contactUs-info section__padding `}>
            <h1 className="app_contactUs-info_title p__cormorant">
              {translate("contact.header")}
            </h1>
            <div className="contact__info">
              <div>
                <span style={style}>{translate("contact.addr")}</span>
                <p style={style} className="p__openSans">
                  {translate("contact.address")}
                </p>
              </div>
              <div>
                <span style={style}>{translate("contact.phone")}</span>
                <div style={style} className="contact__info-phone">
                  <p className="p__openSans">
                    {translate("contact.phoneNum1")}
                  </p>
                  <p className="p__openSans">
                    {translate("contact.phoneNum2")}
                  </p>
                </div>
              </div>
              <div>
                <span style={style}>{translate("contact.fax")}</span>
                <p style={style} className="p__openSans">
                  {translate("contact.faxNum")}
                </p>
              </div>
              <div>
                <span style={style}>{translate("contact.email")}</span>
                <p
                  className="p__openSans"
                  style={{ textTransform: "none", ...style }}
                >
                  {translate("contact.emailAddr")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="app_contactUs-map">
          <Paper>
            <div id="map">
              <iframe
                src="https://maps.google.com/maps?q=35.791755,%2051.476155&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300px"
                frameBorder="0"
                style={{
                  filter: `grayscale(100%) ${loading ? "blur(8px)" : ""}`,
                }}
              />
              <div className="circular">
                <CircularProgressForLoading loading={loading} />
              </div>
            </div>
          </Paper>
        </div>
      </div>
      <FooterBottom />
    </>
  );
};
export default ContactUs;
