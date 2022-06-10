import "./ProjectList.scss";
import Navbar from "../../components/Navbar/Navbar";
import { kavakData } from "../../constants/data";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import container from "../../img/projects/villa.jpg";

const ProjectList = () => {
  const pathName = window.location.pathname.split("/")[2];
  return (
    <div>
      <Navbar />
      <div className="projectList">
        <div className="top">
          <img className="topImage" src={container} alt={pathName} />
          <h1 className="title">{pathName}</h1>
        </div>
        <div className="bottom">
          <div className="bottomContainer">
            {kavakData?.map((item) =>
              item?.projectList?.map((list) => {
                console.log({ list });
                return (
                  item.title === list.title && (
                    <div className="cart" key={item.id}>
                      <Link to={list.link}>
                        {list.renderImage}
                        <div className="projectInfo">
                          <div className="title">{list.title}</div>
                          <div className="desc">{list.desc}</div>
                        </div>
                      </Link>
                    </div>
                  )
                );
              })
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProjectList;
