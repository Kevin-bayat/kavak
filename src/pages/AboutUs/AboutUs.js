import "./AboutUs.scss";
import Navbar from "../../components/Navbar/MainNavbar/Navbar";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useTranslate from "../../hooks/useTranslate";
import i18next from "i18next";

const AboutUs = () => {
  const { translate, language } = useTranslate();

  console.log({ language }, "page");

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />
      <div className="app_aboutUs flex__center section__padding">
        <div className="app_aboutUs-image">
          <LazyLoadImage effect="blur" src={images.sketch} alt="sketch image" />
        </div>
        <div className={`app_aboutUs-content ${i18next.language}`}>
          <SubHeading
            title={translate("aboutUs.title")}
            description={translate("aboutUs.desc")}
            kind={translate("aboutUs.kind")}
            color="#0c0c0c"
            spoonColor="black"
          />
          <p className="p__openSans">{translate("aboutUs1")}</p>
          <p className="p__openSans">{translate("aboutUs2")}</p>
        </div>
      </div>
      <div className="app_aboutUs flex__center section__padding" id="about-us">
        <div className={`app_aboutUs-content ${i18next.language}`}>
          <SubHeading
            title={translate("About.title")}
            description={translate("About.desc")}
            kind=""
            color="#0c0c0c"
            spoonColor="black"
          />
          <p className="p__openSans" style={{ color: "#0c0c0c" }}>
            {translate("aboutUs3")}
          </p>
        </div>
        <div className="app_aboutUs-image">
          <LazyLoadImage
            effect="blur"
            src={images.sketch2}
            alt="sketch image"
            className="lazy-load-image"
          />
        </div>
      </div>
      <Team />
      <Footer />
    </div>
  );
};
export default AboutUs;
