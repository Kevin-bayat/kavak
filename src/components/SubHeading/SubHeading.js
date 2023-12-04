import "./SubHeading.style.scss";
import i18next from "i18next";
const SubHeading = ({ title, description, kind, color, spoonColor }) => {
  return (
    <div className={`app_subHeading ${i18next.language}`}>
      <div className="app_subHeading-title">
        <div
          className={`spoon_${spoonColor}`}
          style={{ order: i18next.language === "fa" ? 2 : 1 }}
        />
        <h4
          className="p__openSans"
          style={{ color, order: i18next.language === "fa" ? 1 : 2 }}
        >
          {title}
        </h4>
      </div>
      <div className="app_subHeading-description">
        <h1 style={{ color }}>{description}</h1>
        <h1 style={{ color }}> {kind}</h1>
      </div>
    </div>
  );
};
export default SubHeading;
