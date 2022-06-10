import React from "react";
import "./Button.styles.scss";

const Button = ({ children, onClick, className, ...props }) => (
  <button
    className={`custom__button ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);
export default Button;
