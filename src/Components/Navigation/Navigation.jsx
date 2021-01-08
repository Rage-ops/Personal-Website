import React from "react";
import Button from "../Button/Button";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ navItems }) => {
    const path = useLocation().pathname.slice(1) || 'Home';
    return (
        <nav className="navbar">
            <ul className="nav-content">
                {navItems.map((item, index) => {
                    return item === "Contact" ? (
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
                            className={`nav-item ${item === path && 'nav-item-active'}`}
                        >
                            <Link
                                to={item}
                                className="nav-link"
                            >
                                {item.toUpperCase()}
                            </Link>
                        </li>
                        );
                })}
            </ul>
        </nav>
    );
};
export default Navigation;
