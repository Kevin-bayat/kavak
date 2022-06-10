import "./ContactUs.style.scss";
import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import CircularProgressForLoading from "../../components/UI/CircularProgress/CircularProgressForLoading";

const ContactUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="app_contactUs">
        <Navbar />
        <div className="app_contactUs-container">
          <div className="app_contactUs-map">
            <Paper>
              <div id="map">
                <iframe
                  src="https://maps.google.com/maps?q=35.791755,%2051.476155&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="650"
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

          <div className="app_contactUs-info section__padding">
            <h1 className="app_contactUs-info_title p__cormorant">
              contact info
            </h1>
            <p className="app_contactUs-info_desc p__openSans">
              Let us know what you're looking for in agency. we'll take a look
              and see if this could to be start of something beautiful.
            </p>
            <div className="contact__info">
              <div>
                <span>Address:</span>
                <p className="p__openSans">
                  Tehran - Nobonyad Sq. - sixth kuhestan Avenue - no. 13 - unit
                  7
                </p>
              </div>
              <div>
                <span>Phone:</span>
                <div className="contact__info-phone">
                  <p className="p__openSans">(+98) 21 2229 2616</p>
                  <p className="p__openSans">(+98) 21 2282 2007 - 8</p>
                </div>
              </div>
              <div>
                <span>Fax:</span>
                <p className="p__openSans">(+98) 21 2229 2616</p>
              </div>
              <div>
                <span>Email:</span>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </>
  );
};
export default ContactUs;
