import React, { useState } from "react";
import "./Text.styles.scss";
import useTranslate from "../../hooks/useTranslate";

const Text = () => {
  const [color, setColor] = useState("");

  const { translate } = useTranslate();

  const handleScroll = () => {
    if (window.pageYOffset > 413) {
      if (!color) {
        setColor("red");
      }
    } else {
      if (color) {
        setColor("");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="text" style={{ color: color }}>
      <div className="text--left">
        <h3>{translate("text.arch")}</h3>
      </div>
      <div className="text--right">
        <h3>{translate("text.interior")}</h3>
      </div>
    </div>
  );
};
export default Text;
