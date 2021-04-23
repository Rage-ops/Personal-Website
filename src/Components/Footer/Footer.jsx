import React from 'react';
import { FaGithub, FaLinkedinIn, FaDev } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <p className="data">© 2021 Harsha</p>
                <div className="icons">
                    <a href="https://github.com/harsha-sam" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="contact-icons data" />
                    </a>
                    <a href="https://www.linkedin.com/in/harshavardhan-samudrala/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="data contact-icons" />
                    </a>
                    <a href="https://dev.to/harsha" target="_blank" rel="noopener noreferrer">
                        <FaDev className="data contact-icons" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;