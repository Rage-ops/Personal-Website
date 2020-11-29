import React from 'react';
import Button from '../Button/Button';
import { Link }from "react-router-dom";
import './Navigation.css';
  

const Navigation = ( { navitems, active}) => {
    return (
        <nav className="navbar">
            <ul className="nav-content">
                {
                    navitems.map((value, index) => {
                        return (
                            value === "CONTACT"?
                            <li className="nav-btn" key={ index }>
                                <Button link={`mailto:harsha.sam23@gmail.com`} btnData={`Contact`} btnColor={`btn-white`}/>
                            </li>
                            :
                            (
                                value === active ?
                                <li className="nav-item-active" key={ index }>
                                    <Link to={ value } className="nav-link">{ value }</Link>
                                </li>
                                :
                                <li className="nav-item" key={ index }>
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