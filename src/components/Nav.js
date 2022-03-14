import React from 'react';

import { NavLink } from 'react-router-dom';

import { FaHome, FaImages, FaAddressBook } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

const Nav = () => {
    return (
        <div className="navbar">

            <div className="profile">
                <img src="./media/avatar.png" alt="profile-img" id="profile-img"/>
                <h2>William SAINTE-CATHERINE</h2>
                <h3>Développeur web</h3>
            </div>

            <div className="spacing">

            </div>

            <div className="navLinks">
                <ul>
                    <li>
                        <NavLink exact to="/" className="navLink" activeClassName="navActive">
                            <FaHome/>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" className="navLink" activeClassName="navActive">
                            <GiSkills/>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink exact to="/experiences" className="navLink" activeClassName="navActive">
                            <MdWork/>
                            <span>Expériences</span>
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink exact to="/portfolio" className="navLink" activeClassName="navActive">
                            <FaImages/>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" className="navLink" activeClassName="navActive">
                            <FaAddressBook/>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Nav;