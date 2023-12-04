import "./About.scss";
import images from "../../constants/images";
import SubHeading from "../SubHeading/SubHeading";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useTranslate from "../../hooks/useTranslate";
import i18next from "i18next";

const About = () => {
  const { translate } = useTranslate();

  console.log(i18next.language);
  return (
    <div className="app_aboutUs flex__center section__padding" id="about-us">
      <div className="app_aboutUs-image">
        <LazyLoadImage effect="blur" src={images.sketch} alt="sketch image" />
      </div>
      <div className={`app_aboutUs-content ${i18next.language}`}>
        <SubHeading
          title={translate("aboutUs.title")}
          description={translate("aboutUs.desc")}
          kind={translate("aboutUs.kind")}
          color="#000"
          spoonColor="black"
        />
        <p className="p__openSans" style={{ color: "#0c0c0c" }}>
          {translate("about.home.desc1")}
        </p>
        <p className="p__openSans" style={{ color: "#545454" }}>
          {translate("about.home.desc2")}
        </p>

        <Link to="/about-us">
          <Button className="custom__button">{translate("home.read")}</Button>
        </Link>
      </div>
    </div>
  );
};
export default About;
