import React, { useState } from "react";
import "./HomeSlider.scss";
import Button from "../Button/Button";
import { sliderData } from "../../constants/SliderData/sliderData";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoIosArrowDown } from "react-icons/io";
import useTranslate from "../../hooks/useTranslate";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const HomeSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const { translate } = useTranslate();

  const sliderHandler = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "easeIn",
  };

  return (
    <section className="slider">
      <a className="animateArrow bounce" href="#about-us">
        <IoIosArrowDown className="animateArrow-white" />
      </a>
      <div
        className="arrow"
        style={{ left: "20px" }}
        onClick={() => sliderHandler("left")}
      >
        <ArrowLeft />
      </div>

      {/*<Slider {...settings}>*/}
      <div className="slider-container">
        {sliderData.map((item) => (
          <Wrapper key={item.id} slideIndex={slideIndex}>
            <div className="image-container">
              <LazyLoadImage
                src={item.src}
                className="image"
                alt={item.title}
              />
            </div>
            <div className="desc">
              <h1 className="title">{translate(item.title)}</h1>
              <p>{translate(item.desc)}</p>
              <div>
                <Link to="/projects">
                  <Button className="desc__button">
                    {translate("more.info")}
                  </Button>
                </Link>
              </div>
            </div>
          </Wrapper>
        ))}
      </div>
      {/*</Slider>*/}
      <div
        className="arrow"
        style={{ right: "20px" }}
        onClick={() => sliderHandler("right")}
      >
        <ArrowRight />
      </div>
    </section>
  );
};
export default HomeSlider;
