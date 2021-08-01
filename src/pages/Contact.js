import React from 'react';


import Footer from '../components/Footer';
import Nav from '../components/Nav';

import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GiSmartphone } from "react-icons/gi";

const Contact = () => {



    return (
        <div>
            <Nav/>
            <div className="contact">
                <div className="contact-content">
                    <h2>Contactez-moi</h2>
                    <li>
                        <ul><FaMapMarkerAlt/><span>Limoges</span></ul>
                        <ul><GiSmartphone/><span>06 85 93 47 31</span></ul>
                        <ul><FiMail/><span>william_sainte_catherine@hotmail.com</span></ul>
                    </li>
                </div>
                <div className="contact-diplome">
                    <a href="./media/diplome/CS50x.png" target="_blank" rel="noopener noreferrer"><img src="./media/diplome/CS50x.png" alt=""></img></a>
                    <a href="./media/diplome/CS50w.png" target="_blank" rel="noopener noreferrer"><img src="./media/diplome/CS50w.png" alt=""></img></a>
                </div>

                
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;