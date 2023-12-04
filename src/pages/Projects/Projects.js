import React, { useEffect, useState } from "react";
import "./Projects.scss";
import Navbar from "../../components/Navbar/MainNavbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { allProjectsData } from "../../constants/data";
import { Link } from "react-router-dom";
import ProjectsNavbar from "../../components/Navbar/ProjectsNavbar";
import { Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  healthCategory,
  industrialCategory,
  interiorCategory,
  officialCategory,
  residentialCategory,
  restaurantCategory,
  sportCategory,
  villaCategory,
} from "../../constants/images";
import { textTransform } from "../../_helpers/textTransform";
import Scroll from "react-scroll";
import useTranslate from "../../hooks/useTranslate";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState({
    all: true,
    residential: false,
    villa: false,
    office: false,
    sport: false,
    restaurant: false,
    industrial: false,
    interior: false,
    health: false,
  });

  const { translate } = useTranslate();

  let scroller = Scroll.scroller;

  useEffect(() => {
    setTimeout(() => {
      scroller.scrollTo("projects", {
        duration: 1600,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -30,
      });
    }, 50);
  }, []);

  useEffect(() => {
    if (allProjectsData.length) {
      setLoading(false);
    } else setLoading(true);
  }, [loading]);

  const imageArray = isActive.all
    ? allProjectsData
    : isActive.office
    ? officialCategory
    : isActive.residential
    ? residentialCategory
    : isActive.industrial
    ? industrialCategory
    : isActive.sport
    ? sportCategory
    : isActive.interior
    ? interiorCategory
    : isActive.restaurant
    ? restaurantCategory
    : isActive.villa
    ? villaCategory
    : isActive.health
    ? healthCategory
    : null;

  const renderImages = imageArray.length ? (
    imageArray?.map((item) => {
      return (
        <Grid item xs={12} sm={6} md={4}>
          <div className="projects__item">
            <Link to={`/projects${item.link}/${item.projectName}`}>
              <LazyLoadImage
                effect="blur"
                src={item.src}
                alt={item.title}
                className="img"
                style={{ width: "100%" }}
              />
              <div className="projectInfo">
                <div className="title projectName">
                  {textTransform(item.projectName, "capitalize")}
                </div>
              </div>
            </Link>
          </div>
        </Grid>
      );
    })
  ) : (
    <p className="notFound">projects not found</p>
  );

  return (
    <>
      <Navbar />
      <div className="app_projects flex__center section__padding" id="projects">
        <h1 className="app_projects-title flex__center ">
          {translate("ourPro")}
        </h1>
        <ProjectsNavbar setIsActive={setIsActive} isActive={isActive} />
        <div className="app_projects-image-container flex__center">
          <Grid container spacing={2}>
            {renderImages}
          </Grid>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Projects;
