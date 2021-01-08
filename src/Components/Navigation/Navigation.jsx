import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ navItems, window }) => {
    return (
        <nav className="navbar">
            <ul className="nav-content">
                {navItems.map((value, index) => {
                    return value === "Contact" ? (
                        <li className="nav-btn" key={index}>
                            <Button
                                link={`mailto:harsha.sam23@gmail.com`}
                                btnData={`Contact`}
                                btnColor={`btn-white`}
                            />
                        </li>)
                        :
                        (<li
                            key={index}
                            className={`nav-item ${value === window && "nav-item-active"}`}
                        >
                            <Link
                                to={value}
                                className="nav-link"
                            >
                                {value.toUpperCase()}
                            </Link>
                        </li>
                        );
                })}
            </ul>
        </nav>
    );
};
export default Navigation;
