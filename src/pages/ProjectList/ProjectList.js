import React, { useEffect, useState } from "react";
import Carousel from "react-gallery-carousel";
import Scroll from "react-scroll";
import "react-gallery-carousel/dist/index.css";
import "./ProjectList.scss";
import Navbar from "../../components/Navbar/MainNavbar/Navbar";
import { allProjectsData } from "../../constants/data";
import Footer from "../../components/Footer/Footer";

import {
  acasaImages,
  alamootImages,
  facadeDesignImages,
  gheshmHotelImages,
  apartmentNo12Images,
  kajabadiImages,
  khaneBalaImages,
  khanjanImages,
  kordeVillaImages,
  lotusImages,
  medwayImages,
  mehrdadImages,
  nasiriInteriorImages,
  pallazzoImages,
  paradiseResidentialImages,
  refahCenterImages,
  roshComplexImages,
  tavOfficeImages,
  underSeaImages,
  digiHospitalImages,
} from "../../constants/images";
import { Grid } from "@mui/material";
import "../Projects/Projects.scss";
import IntroVideo from "../../components/IntroVideo/IntroVideo";
import useTranslate from "../../hooks/useTranslate";

const ProjectList = () => {
  const pathName = window.location.pathname.split("/")[3];
  const [imgSrc, setImgSrc] = useState();

  const { translate, language } = useTranslate();

  console.log({ language });

  let scroller = Scroll.scroller;

  useEffect(() => {
    setTimeout(() => {
      scroller.scrollTo("projectsList", {
        duration: 1600,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -30,
      });
    }, 50);
  }, []);

  useEffect(() => {
    allProjectsData?.map((item) => {
      if (item.projectName === pathName) {
        setImgSrc(item);
      }
    });
  }, [pathName]);

  let arrayData = [];

  if (pathName === "acasa") {
    arrayData = acasaImages;
  } else if (pathName === "elahiye") {
    arrayData = facadeDesignImages;
  } else if (pathName === "khaneBala") {
    arrayData = khaneBalaImages;
  } else if (pathName === "khanjan") {
    arrayData = khanjanImages;
  } else if (pathName === "kordeVilla") {
    arrayData = kordeVillaImages;
  } else if (pathName === "lotus") {
    arrayData = lotusImages;
  } else if (pathName === "mehrdad") {
    arrayData = mehrdadImages;
  } else if (pathName === "palazzo") {
    arrayData = pallazzoImages;
  } else if (pathName === "paradise") {
    arrayData = paradiseResidentialImages;
  } else if (pathName === "refah") {
    arrayData = refahCenterImages;
  } else if (pathName === "roshd") {
    arrayData = roshComplexImages;
  } else if (pathName === "tav") {
    arrayData = tavOfficeImages;
  } else if (pathName === "tagharon") {
    arrayData = gheshmHotelImages;
  } else if (pathName === "No12") {
    arrayData = apartmentNo12Images;
  } else if (pathName === "medway") {
    arrayData = medwayImages;
  } else if (pathName === "nasiri") {
    arrayData = nasiriInteriorImages;
  } else if (pathName === "alamoot") {
    arrayData = alamootImages;
  } else if (pathName === "undersea") {
    arrayData = underSeaImages;
  } else if (pathName === "kajabadi") {
    arrayData = kajabadiImages;
  } else if (pathName === "digiHospital") {
    arrayData = digiHospitalImages;
  }
  const images = arrayData?.map((item) => {
    return {
      src: item.src,
    };
  });

  return (
    <>
      <Navbar />
      <div className="projectList" id="projectsList">
        <div className="top">
          {imgSrc?.videoSrc ? (
            <IntroVideo videoSrc={imgSrc?.videoSrc} />
          ) : (
            <img src={imgSrc?.src} className="topImage" alt="" />
          )}
        </div>
        <div className="projectDetails section__padding">
          <h1>{translate(imgSrc?.title)}</h1>
          <p>{translate(imgSrc?.desc)}</p>
        </div>
        {imgSrc?.secondVideo ? (
          <div className="projectDetails section__padding">
            <IntroVideo videoSrc={imgSrc?.secondVideo} />
          </div>
        ) : null}

        <div className="app_projects flex__center section__padding">
          <div className="app_projects-image-container flex__center">
            <Grid container spacing={2}>
              <Carousel
                images={images}
                style={{ height: 600, width: "100%", margin: "0 auto" }}
              />
            </Grid>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ProjectList;
