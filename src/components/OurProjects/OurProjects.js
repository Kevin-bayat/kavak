import "./OurProjects.style.scss";
import { projectsImage } from "../../constants/data";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
const OurProjects = () => {
  return (
    <div className="app__ourProjects" id="projects">
      <Link to={"/projects"}>
        <div className="app__ourProjects-images">
          {projectsImage.map((image, index) => (
            <div className="projects_image " key={index}>
              <img src={image.image} alt={image.tittle} loading="lazy" />
              <AddIcon fontSize="large" className="projects_image-icon " />
              <h2 className="p__openSans">{image.tittle}</h2>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};
export default OurProjects;
