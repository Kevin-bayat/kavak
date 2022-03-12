import React from "react";

import "./Logo.styles.scss";
const Logo = ({ isOpen }) => {
  return (
    <div className={`logo`} style={{ color: isOpen ? "#000" : "#fff" }}>
      <div className="logo--title">KAVAK</div>
      <p>Architects</p>
    </div>
  );
};
export default Logo;
