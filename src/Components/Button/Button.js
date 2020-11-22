import React from 'react';
import './Button.css';

const Button = ( { link, btnData, btnColor }) => {
    return(
        <a
        href= { link }
        role="button"
        className={`btn ${ btnColor }`}>
        { btnData }
        </a>
    )
}
export default Button;