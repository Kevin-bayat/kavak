import React from "react";
import useTranslate from "../../../hooks/useTranslate";

const ProjectsNavbar = ({ isActive, setIsActive }) => {
  const { translate } = useTranslate();
  const clickHandler = (linkName) => {
    if (linkName === "all") {
      setIsActive({
        all: true,
        residential: false,
        villa: false,
        office: false,
        sport: false,
        restaurant: false,
        industrial: false,
        interior: false,
      });
    } else if (linkName === "residential") {
      setIsActive({
        all: false,
        residential: true,
        villa: false,
        office: false,
        sport: false,
        restaurant: false,
        industrial: false,
        interior: false,
      });
    } else if (linkName === "villa") {
      setIsActive({
        all: false,
        residential: false,
        villa: true,
        office: false,
        sport: false,
        restaurant: false,
        industrial: false,
        interior: false,
      });
    } else if (linkName === "office") {
      setIsActive({
        all: false,
        residential: false,
        villa: false,
        office: true,
        sport: false,
        restaurant: false,
        industrial: false,
        interior: false,
      });
    } else if (linkName === "sport") {
      setIsActive({
        all: false,
        residential: false,
        villa: false,
        office: false,
        sport: true,
        restaurant: false,
        industrial: false,
        interior: false,
      });
    } else if (linkName === "restaurant") {
      setIsActive({
        all: false,
        residential: false,
        villa: false,
        office: false,
        sport: false,
        restaurant: true,
        industrial: false,
        interior: false,
      });
    } else if (linkName === "industrial") {
      setIsActive({
        all: false,
        residential: false,
        villa: false,
        office: false,
        sport: false,
        restaurant: false,
        industrial: true,
        interior: false,
      });
    } else if (linkName === "interior") {
      setIsActive({
        all: false,
        residential: false,
        villa: false,
        office: false,
        sport: false,
        restaurant: false,
        industrial: false,
        interior: true,
      });
    } else if (linkName === "health") {
      setIsActive({
        all: false,
        residential: false,
        villa: false,
        office: false,
        sport: false,
        restaurant: false,
        industrial: false,
        interior: false,
        health: true,
      });
    }
  };

  return (
    <ul className="app_projects-navbar_link">
      <li onClick={() => clickHandler("all")}>
        <a style={{ color: isActive.all ? "#333" : "#959494" }}>
          {translate("index.all")}
        </a>
      </li>
      <li onClick={() => clickHandler("residential")}>
        <a style={{ color: isActive.residential ? "#333" : "#959494" }}>
          {translate("index.Residential")}
        </a>
      </li>
      <li onClick={() => clickHandler("villa")}>
        <a style={{ color: isActive.villa ? "#333" : "#959494" }}>
          {translate("index.Villa")}
        </a>
      </li>
      <li onClick={() => clickHandler("office")}>
        <a style={{ color: isActive.office ? "#333" : "#959494" }}>
          {translate("index.Office")}
        </a>
      </li>
      <li onClick={() => clickHandler("sport")}>
        <a style={{ color: isActive.sport ? "#333" : "#959494" }}>
          {translate("index.Sport")}
        </a>
      </li>
      <li onClick={() => clickHandler("restaurant")}>
        <a style={{ color: isActive.restaurant ? "#333" : "#959494" }}>
          {translate("index.Restaurant")}
        </a>
      </li>
      <li onClick={() => clickHandler("industrial")}>
        <a style={{ color: isActive.industrial ? "#333" : "#959494" }}>
          {translate("index.Industrial")}
        </a>
      </li>
      <li onClick={() => clickHandler("interior")}>
        <a style={{ color: isActive.interior ? "#333" : "#959494" }}>
          {translate("index.Interior")}
        </a>
      </li>
      <li onClick={() => clickHandler("health")}>
        <a style={{ color: isActive.health ? "#333" : "#959494" }}>
          {translate("index.Health")}
        </a>
      </li>
    </ul>
  );
};
export default ProjectsNavbar;
