import "./About.scss";
import images from "../../constants/images";
import SubHeading from "../SubHeading/SubHeading";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="app_aboutUs flex__center section__padding" id="about-us">
      <div className="app_aboutUs-image">
        <img src={images.sketch} alt="sketch image" />
      </div>
      <div className="app_aboutUs-content">
        <SubHeading
          title="who we are"
          description="Architecture "
          kind="studio"
          color="#0c0c0c"
        />
        <p className="p__openSans" style={{ color: "#0c0c0c" }}>
          Ad iusto esse eum maiores sunt sed doloremque sunt vel expedita
          molestiae quo laboriosam dolorem sit
        </p>
        <p className="p__openSans" style={{ color: "#545454" }}>
          Lorem ipsum dolor sit amet. Est nisi itaque et aperiam debitis non
          numquam fugit ad sunt veritatis cum molestias consequatur et culpa
          ratione. Sed exercitationem molestias aut explicabo alias eum
        </p>
        <Link to="/about-us">
          <button className="custom__button">Read More</button>
        </Link>
      </div>
    </div>
  );
};
export default About;
