import React from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
        <Nav />
            <div className="home" data-testid="HomePage">                
                <div className="home-content">
                    <div className="content">
                        <img src="./media/avatar.png" alt="profile-img" id="profile-img" data-testid="img"/>
                        <h1 data-testid="h1">William SAINTE-CATHERINE</h1>
                        <h2 data-testid="h2">Développeur web</h2>
                        <hr/>
                        <p data-testid="intro-text">
                            Bienvenue sur mon CV en ligne.<br/><br/><br/>
                            Je développe principalement en Python et Javascript avec les frameworks Django et React.<br/>
                            Autonome, j’apprends vite et je serai ravi de mettre mes qualités au service de votre entreprise.<br/>
                            J'apprécie les challenges et je suis toujours motivé pour en apprendre d'avantage et enthousiaste à l'idée d'accomplir mes missions.<br/>
                        </p>

                        <div className='alternance'>
                            <h4>Je recherche une entreprise pour réaliser mon bachelor en alternance dès la rentrée de septembre de 2022.</h4>
                                <a
                                    href='https://www.3il-ingenieurs.fr/nos-bachelors/bachelor-developpement-logiciel-et-web/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Site: https://www.3il-ingenieurs.fr/nos-bachelors/bachelor-developpement-logiciel-et-web/"
                                    id="current-project"
                                >Bachelor Développement logiciel et web 3IL</a> 
                        </div>
                        <br/>
                        <br/>
                        <a href="https://challenge-monedieres.herokuapp.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Site: challenge-monédières"
                            id="current-project"
                        >
                            Dernier projet live (APIRest et site client pour un challenge sportif)
                        </a>
                        {/* <a href="https://space-tourism-challenge.herokuapp.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Site: Space Tourism"
                            id="last-project"
                        >
                            Mon dernier projet LIVE (site Space Tourism Challenge)
                        </a> */}
                        {/* <a href="https://github.com/Stecathw/" target="_blank" rel="noopener noreferrer">Accéder directement à mon github</a> */}
                        
                        <hr/>
                    </div>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank" data-testid="CV_pdf">Télécharger mon CV</a>
                    </div>
                </div>                
            </div>
        <Footer />
        </div>
    );
};

export default Home;
