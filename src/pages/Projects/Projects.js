import "./Projects.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { kavakData } from "../../constants/data";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="app_projects flex__center section__padding">
        <h1 className="app_projects-title flex__center ">Our Projects</h1>
        <p className="app_projects-desc">
          This project will develop a module offered to level 2 Undergraduate
          students and will seek to develop student’s skills in collaborative
          working and information literacy while still advancing their
          discipline knowledge. The subject librarian will
        </p>

        <div className="app_projects-image-container flex__center">
          {kavakData?.map((item) => (
            <div className="projects__item" key={item.id}>
              <Link to={item.link}>
                {item.renderImage}
                <div className="projectInfo">
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.desc}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Projects;
