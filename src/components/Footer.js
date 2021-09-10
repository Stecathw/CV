import React from 'react';
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <ul>
                    <li>
                        <a href="https://fr.linkedin.com/" referrerPolicy="no-referer" rel="noreferrer" target="_blank"><FaLinkedin/></a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://github.com/Stecathw" referrerPolicy="no-referer" rel="noreferrer" target="_blank"><FaGithubSquare/></a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/" referrerPolicy="no-referer" rel="noreferrer" target="_blank"><FaFacebookSquare/></a>
                    </li>
                </ul>
            </div>
            <div className="signature">
                <p>Made with React</p>
            </div>
        </div>
    );
};

export default Footer;
