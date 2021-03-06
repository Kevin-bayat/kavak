import "./Team.style.scss";
import SubHeading from "../SubHeading/SubHeading";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useRef } from "react";
import { ourTeamImages } from "../../constants/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Team = () => {
  const scrollRef = useRef(null);

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
        title="our team"
        color="#0c0c0c"
        description="we are building"
        kind="experts"
      />
      <div className="app__team-slider">
        <div className="app__gallery-slider-wrapper" ref={scrollRef}>
          {ourTeamImages.map((image, index) => (
            <div key={index} className="app__team-slider_images">
              <LazyLoadImage
                effect="blur"
                src={image.image}
                alt={image.personName}
              />
              <h1 className="image-title p__cormorant">{image.personName}</h1>
              <p className="image-position p__openSans">{image.job}</p>
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
