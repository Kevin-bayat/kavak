import "./AboutUs.scss";
import Navbar from "../../components/Navbar/Navbar";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />
      <div className="app_aboutUs flex__center section__padding" id="about-us">
        <div className="app_aboutUs-image">
          <img src={images.villa} alt="sketch image" />
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
        </div>
      </div>
      <div className="app_aboutUs flex__center section__padding" id="about-us">
        <div className="app_aboutUs-content">
          <SubHeading
            title="who we are"
            description="Interior & furniture "
            kind="designer"
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
        </div>
        <div className="app_aboutUs-image">
          <img
            src={images.hafez}
            alt="sketch image"
            style={{ paddingLeft: "2rem" }}
          />
        </div>
      </div>
      <Services />
      <Team />
      <Footer />
    </div>
  );
};
export default AboutUs;
