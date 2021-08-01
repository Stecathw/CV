import React, { useState } from 'react';
import ProjectsDatas from '../../data/ProjectsDatas';
import ProjectItem from './ProjectItem';

const Projects = () => {

    const [Datas] = useState(ProjectsDatas)


    return (
        <div className="projects-container">            
            {Datas.sort((a, b) => (a.year > b.year) ? 1 : -1).reverse().map((data) => (
                <ProjectItem data={data} key={data.id}/>
            ))}
        </div>
    );
};

export default Projects;