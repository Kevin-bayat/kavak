import React from "react";
import "./Button.styles.scss";

const Button = ({ children, ...props }) => (
  <button className="custom__button">{children}</button>
);
export default Button;
