import React from 'react';


import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Projects from '../components/projects/Projects';

const PortFolio = () => {
    return (
        <div>
            <Nav/>
            <div className="portfolio">
                <h2>Quelques projets</h2>
                <Projects/>
            </div>            
            <Footer/>
        </div>
    );
};

export default PortFolio;