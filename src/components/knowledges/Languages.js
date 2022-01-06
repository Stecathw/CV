import React, { useState } from 'react';
import StatusBar from './StatusBar';

import { FaPython, FaHtml5, FaCuttlefish, FaSass, FaReact } from "react-icons/fa";
import { SiJavascript, SiCss3, SiDjango, SiFlask, SiBootstrap } from "react-icons/si";
import { RiDashboardLine } from "react-icons/ri";
import { DiSqllite } from "react-icons/di";
import { GiPanda, GiSelect } from "react-icons/gi"

const Languages = () => {

    const [languages] = useState([
        {id:0, name: "Python", xp: "11", icon: <FaPython/>},
        {id:1, name: "Javascript", xp: "8", icon: <SiJavascript/>},
        {id:2, name: "Html", xp: "11", icon: <FaHtml5/>},
        {id:3, name: "CSS", xp: "11", icon: <SiCss3/>},
        {id:4, name: "SQL/SQlite3", xp: "3", icon:<DiSqllite/>},
        {id:5, name: "C", xp: "2", icon: <FaCuttlefish/>},     
        {id:6, name: "Sass", xp: "2", icon: <FaSass/>},
    ])

    const [frameworks] = useState([
        {id:0, name: "Django", xp: "11", icon: <SiDjango/>},
        {id:1, name: "Bootstrap", xp: "5", icon: <SiBootstrap/>},
        {id:2, name: "React", xp: "3", icon: <FaReact/>},
        {id:3, name: "Flask", xp: "2", icon: <SiFlask/>},        
        {id:4, name: "Dash", xp: "2", icon: <RiDashboardLine/>},        
        {id:5, name: "Pandas", xp: "2", icon: <GiPanda/>},        
        {id:6, name: "Selenium", xp: "2", icon: <GiSelect/>},        
    ])


    return (
        <div className="languages">
            <div className="languagesList">
                <h2>Languages</h2>
                <div className="xp">
                    <span>Je code avec depuis...</span>
                    <span>6 mois</span>
                    <span>1 an</span>
                </div>
                {languages.map((item) => {
                    return <StatusBar item={item} key={item.id}/>
                    })
                }
            </div>
            <div className="frameworksList">
                <h2>Frameworks et bibliothèques</h2>
                <div className="xp">
                    <span>Je construis avec depuis...</span>
                    <span>6 mois</span>
                    <span>1 an</span>
                </div>
                {frameworks.map((item) => {
                    return <StatusBar item={item} key={item.id}/>
                    })
                }
            </div>
        </div>
    );
};

export default Languages;