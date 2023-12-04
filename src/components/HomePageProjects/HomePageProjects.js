import "./HomePageProjects.scss";
import { projectsImage } from "../../constants/data";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useTranslate from "../../hooks/useTranslate";
const HomePageProjects = () => {
  const { translate } = useTranslate();
  return (
    <div className="app__ourProjects" id="projects">
      <Link to={"/projects"}>
        <div className="app__ourProjects-images">
          <Grid container>
            {projectsImage.map((image, index) => (
              <Grid item xs={12} md={4} key={index} container>
                <div className="projects_image">
                  <LazyLoadImage
                    effect="blur"
                    src={image.image}
                    alt={image.tittle}
                    loading="lazy"
                  />
                  <AddIcon fontSize="large" className="projects_image-icon " />
                  <h2 className="p__openSans title">
                    {translate(image.tittle)}
                  </h2>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Link>
    </div>
  );
};
export default HomePageProjects;
