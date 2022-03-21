import "./  Team.style.scss";
import SubHeading from "../SubHeading/SubHeading";

import person1 from "../../img/persons/person1.jpg";
import person2 from "../../img/persons/person2.jpg";
import person3 from "../../img/persons/person3.jpg";
import person4 from "../../img/persons/person4.jpg";
import person5 from "../../img/persons/person5.jpg";
import person6 from "../../img/persons/person6.jpg";
import person7 from "../../img/persons/person7.jpg";
import person8 from "../../img/persons/person8.jpg";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useRef } from "react";
const Team = () => {
  const ourTeamImages = [
    { image: person1, title: "Asmah Bageri", job: "Design Manager" },
    { image: person2, title: "Khashayar Khamesi", job: "Manager" },
    { image: person3, title: "Keyvan Bayat", job: "Web Designer" },
    { image: person4, title: "Richard Cennedy", job: "Creative Director" },
    { image: person5, title: "Donna Flowers", job: "Designer" },
    { image: person6, title: "Edwin Charles", job: "Designer" },
    { image: person7, title: "John Doe", job: "Designer" },
    { image: person8, title: "John Richmond", job: "Designer" },
  ];
  const scrollRef = useRef(null);

  const scrollHandler = (direction) => {
    const { current } = scrollRef;
    console.log({ direction, current });
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
              <img src={image.image} alt="personal image" />
              <h1 className="image-title p__cormorant">{image.title}</h1>
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
