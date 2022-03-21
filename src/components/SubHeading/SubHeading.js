import "./SubHeading.style.scss";
import images from "../../constants/images";
const SubHeading = ({ title, description, kind, color }) => {
  return (
    <div className="app_subHeading">
      <div className="app_subHeading-title">
        <h4 className="p__openSans" style={{ color }}>
          {title}
        </h4>
        <img src={images.spoon} alt="spoon image" />
      </div>
      <div className="app_subHeading-description">
        <h1 style={{ color }}>{description}</h1>
        <h1 style={{ color }}> {kind}</h1>
      </div>
    </div>
  );
};
export default SubHeading;
