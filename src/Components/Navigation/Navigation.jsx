import React from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ navItems }) => {
  return (
    <nav className="navbar">
      <ul className="nav-content">
        {navItems.map((item) => {
          return item.label === "Contact" ? (
            <li className="nav-btn" key={item.id}>
              <Button
                link={item.navLink}
                btnData={item.label}
                btnColor={`btn-white`}
              />
            </li>
          ) : (
            <li key={item.id} className={`nav-item`}>
              <NavLink
                to={item.navLink}
                className="nav-link"
                activeClassName="nav-item-active"
                exact={true}
              >
                {item.label.toUpperCase()}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation;
