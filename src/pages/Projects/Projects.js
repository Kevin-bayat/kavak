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
      <div className="projects">
        <div className="top">
          <h1 className="title">Our Projects</h1>
          <p className="desc">
            This project will develop a module offered to level 2 Undergraduate
            students and will seek to develop student’s skills in collaborative
            working and information literacy while still advancing their
            discipline knowledge. The subject librarian will be invited to
            conduct an inquiry-based workshop with the students at the start of
            the module to prepare them for a literature search activity and will
            also provide ongoing support for students via discussion boards in
            the VLE. There are some contentious issues in the discipline that
            students historically have found problematic to analyse, these
            topics will be used to provide a stimulus for the literature
            searching activity and will then form the subject of the class
            debates in weeks 6 and 7. Students will be required to submit a
            reflective report on their literature search with an annotated
            bibliography to demonstrate their assessment of the quality of the
            resources they have found.
          </p>
        </div>
        <div className="bottom">
          <div className="bottomContainer">
            {kavakData?.map((item) => (
              <div className="cart" key={item.id}>
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
      </div>
      <Footer />
    </div>
  );
};
export default Projects;
