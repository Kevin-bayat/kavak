import React from "react";
import "./Button.styles.scss";

const Button = ({ children, onClick, ...props }) => (
  <button className="custom__button" onClick={onClick} {...props}>
    {children}
  </button>
);
export default Button;
