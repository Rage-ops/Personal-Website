import React from 'react';
import Button from '../Button/Button';
import { Link }from "react-router-dom";
import './Navigation.css';
  

const Navigation = ( { navitems, active}) => {
    return (
        <nav className="navbar">
            <ul className="nav-content">
                {
                    navitems.map((value) => {
                        return (
                            value === "CONTACT"?
                            <li className="nav-btn">
                                <Button link={`mailto:harsha.sam23@gmail.com`} btnData={`Contact`} btnColor={`btn-white`}/>
                            </li>
                            :
                            (
                                value === active ?
                                <li className="nav-item active">
                                    <Link to={ value } className="nav-link">{ value }</Link>
                                </li>
                                :
                                <li className="nav-item">
                                    <Link to={ value } className="nav-link">{ value }</Link>
                                </li>
                            )
                        )                            
                    })
                }
            </ul>
        </nav>
    )
}
export default Navigation