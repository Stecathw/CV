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
                            En effet, mes compétences de technicien m'ont permis de financer et préparer cette reconversion.<br/>                            
                            J'ai donc pris quelques mois à travailler en "remote" afin de me former au développement informatique et particulièrement web.<br/>
                            L'idée d'apprendre à utliser tous ces outils de constructions et de créations avait toujours été là.<br/>
                            Nous avons tous vécu un moment où le code aurait pu servir pour automatiser une tâche ou régler un problème...<br/>
                            Aujourd'hui, je code et développe principalement en Python et Javascript. J'ai de bonnes connaissances sur le framework Django et suis familié de React.<br/>
                            Je suis à la recherche d'un travail ou d'une mission qui me permettra de m'intégrer au milieu professionnel du développement web.
                            Autonome, j’apprends vite et je serai ravi de mettre mes qualités au service de votre entreprise.<br/>
                            J'apprécie les challenges et je suis toujours motivé pour en apprendre d'avantage et enthousiaste à l'idée d'accomplir mes missions.<br/><br/>                            
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
