import React, { useState } from 'react';

import LanguagesIcons from './LanguagesIcons';
import LibrairiesIcons from './LibrairiesIcons';

import { FaYoutube, FaGithubSquare, FaSearchPlus} from "react-icons/fa";

const ProjectItem = (props) => {
    const {data} = props

    const [showInfo, SetShowInfo] = useState(false)

    const HandleMoreInfo = () => {
        SetShowInfo(!showInfo)
    }

    if (!showInfo) {
        return (
            <div className="project-item-content-face">                     
                <h4>{data.title}</h4>
                {data.imageURL.map((image) => (
                        <a href={data.siteURL} target='_blank' rel="noopener noreferrer">
                            <img src={image} alt="" key={image}></img>
                        </a>)
                    )}

                <div className="project-item-more">
                    <span onClick={HandleMoreInfo}><FaSearchPlus/></span>
                </div>                       
    
            </div>
        );
    } else {
        return (
            <div className="project-item-content-pile">
                <div className="project-item-languages">
                    <span>{data.languages.map((lang) => (
                        <LanguagesIcons lang={lang} key={lang}/>
                    ))}</span>
                </div>
                <div className="project-item-frameworks">
                    <span>{data.librairies.map((lib) => (
                        <LibrairiesIcons lib={lib} key={lib}/>
                    ))}</span>
                </div>
                <div className="project-item-description">
                    <p>{data.description}</p>
                </div>
                <div className="project-item-links">
                    <a href={data.videoURL} rel="noopener noreferrer" target="_blank" id="youtube"><FaYoutube/></a>
                    <a href={data.codeURL} rel="noopener noreferrer" target="_blank"><FaGithubSquare/></a>
                </div>  
                <div className="project-item-less">
                    <span onClick={HandleMoreInfo}>Retour</span>
                </div>  
            </div>

        )

    }


};

export default ProjectItem;