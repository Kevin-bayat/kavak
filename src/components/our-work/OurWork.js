import React, { useEffect, useRef, useState } from "react";
import "./OurWork.scss";
import { motion } from "framer-motion";
import { kavakData } from "../../constants/data";
import { Link } from "react-router-dom";

const OurWork = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="our-work__container">
      <div className="our-work">
        <div className="our-work__title">
          <Link to="/projects" className="link">
            Our Work
          </Link>
        </div>

        <motion.div
          ref={carousel}
          className={"carousel"}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            elevation={15}
            className="inner-carousel"
          >
            {kavakData.map((item) => (
              <motion.div paddingRight={0} className={"image"} key={item.id}>
                {item.renderImage}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default OurWork;
