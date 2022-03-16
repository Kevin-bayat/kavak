import React from "react";
import logoWhite from "../../img/logo/logo_KAVAK_WHITE.png";
// import logoBlack from "../../img/logo/logo_KAVAK_black.png";
import "./Logo.styles.scss";
const Logo = ({ isOpen }) => {
  return (
    <div className={`logo`} style={{ color: isOpen ? "#000" : "#fff" }}>
      {isOpen ? (
        <>
          <div className="logo--title">KAVAK</div>
          <p>Architects</p>
          {/*<img className="img" src={logoBlack} alt={"kavak"} />*/}
        </>
      ) : (
        <img className="img" src={logoWhite} alt={"kavak"} />
      )}
    </div>
  );
};
export default Logo;
