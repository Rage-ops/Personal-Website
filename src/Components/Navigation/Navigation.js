import React from 'react';
import Button from '../Button/Button';
import './Navigation.css';

const Navigation = ( { onWindowChange, active, navitems }) => {
    return (
        <nav className="navbar">
            <ul className="nav-content">
                {
                    navitems.map((value) => {
                        return (
                            value === active?
                            <li className="nav-item active">
                                <a href="#HOME" className="nav-link" onClick={() => onWindowChange(value) }>{ value }</a>
                            </li>
                            :
                            (
                                value === "CONTACT"?
                                <li className="nav-btn">
                                    <Button link={`mailto:harsha.sam23@gmail.com`} btnData={`Contact`} btnColor={`btn-white`}/>
                                </li>
                                :
                                <li className="nav-item">
                                    <a href="#HOME" className="nav-link" onClick={() => onWindowChange(value) }>{ value }</a>
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