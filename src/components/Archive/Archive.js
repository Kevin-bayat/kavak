import React, { useState } from "react";
import "./Archive.scss";
import { archiveImages } from "../../constants/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../Button/Button";
import { Navigate } from "react-router-dom";

const Archive = () => {
  const [hasNavigate, setHasNavigate] = useState(false);
  const clickHandler = () => {
    setHasNavigate(true);
  };
  return (
    <div className="archive-container">
      <div className="archive">
        {archiveImages?.map((item) => {
          return (
            <LazyLoadImage effect="blur" src={item} alt={"archive-image"} />
          );
        })}
      </div>
      <div className="button-container">
        <Button
          children="Go To Projects"
          className="archive-button"
          onClick={clickHandler}
        />
        {hasNavigate && <Navigate to={"/projects"} replace={false} />}
      </div>
    </div>
  );
};
export default Archive;
