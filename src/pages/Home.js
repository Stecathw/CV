import React from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
        <Nav />
            <div className="home">                
                <div className="home-content">
                    <div className="content">
                        <img src="./media/avatar.png" alt="profile-img" id="profile-img"/>
                        <h1>William SAINTE-CATHERINE</h1>
                        <h2>Développeur web</h2>
                        <hr/>
                        <p>
                            Bienvenue sur mon CV en ligne.<br/><br/><br/>
                            J'ai 26 ans et me suis reconverti dans le développement web afin de retrouver une forte motivation intellectuelle.<br/>
                            Je code et développe principalement en Python et Javascript. J'ai de bonnes connaissances sur le framework Django et suis familié de React.<br/>
                            Autodidacte, j’apprends vite et je serais ravi de mettre mes qualités au service de votre entreprise.<br/>
                            J'apprécie les challenges et je suis toujours ravis d'apprendre et enthousiaste à l'idée d'accomplir mes missions tout en approfondissant mes connaissances.<br/><br/>
                            
                        </p>
                        <hr/>
                    </div>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank">Télecharger mon CV</a>
                    </div>
                </div>                
            </div>
        <Footer />
        </>
    );
};

export default Home;