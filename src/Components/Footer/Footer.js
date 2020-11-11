import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <p className="data">© 2020 Harsha</p>
                <div className="icons">
                    <a href="https://github.com/Rage-ops">
                        <FontAwesomeIcon icon={faGithub} className="contact-icons data"/>
                    </a>
                    <a href="https://www.linkedin.com/in/harshavardhan-samudrala/">
                        <FontAwesomeIcon icon={faLinkedin} className="contact-icons data"/>
                    </a>
                    <a href="https://dev.to/rageops">
                        <FontAwesomeIcon icon={faDev} className="contact-icons data"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;