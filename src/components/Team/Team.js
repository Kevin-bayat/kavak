import "./Team.style.scss";
import SubHeading from "../SubHeading/SubHeading";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useRef } from "react";
import { ourTeamImages } from "../../constants/data";
import "react-lazy-load-image-component/src/effects/blur.css";
import useTranslate from "../../hooks/useTranslate";
import i18next from "i18next";

const Team = () => {
  const scrollRef = useRef(null);

  const { translate } = useTranslate();

  const scrollHandler = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 400;
    } else {
      current.scrollLeft += 400;
    }
  };

  return (
    <div className="app__team flex__center section__padding">
      <SubHeading
        title={translate("title.team")}
        color="#0c0c0c"
        description={translate("desc.team")}
        kind={translate("kind.team")}
        spoonColor={"black"}
      />
      <div className="app__team-slider">
        <div className="app__gallery-slider-wrapper" ref={scrollRef}>
          {ourTeamImages.map((image, index) => (
            <div key={index} className="app__team-slider_images">
              <img src={image.image} alt={image.personName} />
              <h1 className={`image-title p__cormorant ${i18next.language}`}>
                {translate(image.personName)}
              </h1>
              <p className="image-position p__openSans">
                {translate(image.job)}
              </p>
            </div>
          ))}
        </div>
        <div className="app__gallery-slider-arrows">
          <BsArrowLeftShort
            className="gallery-icons"
            onClick={() => scrollHandler("left")}
          />
          <BsArrowRightShort
            className="gallery-icons"
            onClick={() => scrollHandler("right")}
          />
        </div>
      </div>
    </div>
  );
};
export default Team;
