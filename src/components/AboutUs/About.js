import "./About.scss";
import images from "../../constants/images";
import SubHeading from "../SubHeading/SubHeading";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useState } from "react";

const About = () => {
  const [isTranslate, setIsTranslate] = useState(false);
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
        {!isTranslate ? (
          <>
            <p className="p__openSans" style={{ color: "#0c0c0c" }}>
              Ad iusto esse eum maiores sunt sed doloremque sunt vel expedita
              molestiae quo laboriosam dolorem sit
            </p>
            <p className="p__openSans" style={{ color: "#545454" }}>
              Lorem ipsum dolor sit amet. Est nisi itaque et aperiam debitis non
              numquam fugit ad sunt veritatis cum molestias consequatur et culpa
              ratione. Sed exercitationem molestias aut explicabo alias eum
            </p>
          </>
        ) : (
          <p className="p__iranSans" style={{ color: "#545454" }}>
            معماری نقاط مختلف آسیا در مسیری جدای از مسیر اروپا توسعه یافت؛
            معماری بودایی، هندویی و سیکی هر کدام ویژگی‌های منحصربفرد خود را
            دارند. به ویژه معماری بودایی، تنوع منطقه ای بسیار خوبی از خود نشان
            می‌دهد. در بسیاری از کشورهای آسیایی با مذاهب پانتزیستی، معماری به
            سمت بهبود چشم‌انداز طبیعی گرایش زیادی داشته‌است.
          </p>
        )}
        <Button
          className="custom__button"
          onClick={() => setIsTranslate(!isTranslate)}
          style={{ marginRight: "15px" }}
        >
          Translate
        </Button>
        <Link to="/about-us">
          <Button className="custom__button">Read More</Button>
        </Link>
      </div>
    </div>
  );
};
export default About;
