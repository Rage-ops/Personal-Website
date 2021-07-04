import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ link, btnData, btnColor }) => {
  if (link.startsWith("/")) {
    return <Link to={link} className={`btn ${btnColor}`}>
      {btnData}
    </Link>;
  }
  return (
    <a href={link} role="button" className={`btn ${btnColor}`}>
      {btnData}
    </a>
  );
};
export default Button;
