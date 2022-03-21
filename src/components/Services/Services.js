import "./Services.style.scss";
import SubHeading from "../SubHeading/SubHeading";

import { serviceCart } from "../../constants/data";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="app__services section__padding" id="service">
      <SubHeading
        title="WHAT WE DO"
        description="provide the best "
        kind="services"
      />
      <div className="app__services-steps flex__center">
        {serviceCart.map((item, index) => (
          <div className="app__services-steps_cart " key={index}>
            <div className="step_icons">{item.icon}</div>
            <div className="step_title p__openSans">{item.title}</div>
            <div className="step_description p__openSans">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <Link to="/service">
        <button className="custom__button">View More</button>
      </Link>
    </div>
  );
};
export default Services;
