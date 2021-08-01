import React from 'react';
import { NavLink } from 'react-router-dom';

import { MdArrowBack } from 'react-icons/md';

const Error404 = () => {
    return (
        <div className="notFound">
            <h1>Page non trouvée</h1>
            <NavLink exact to="/" className="navLink" activeClassName="navActive">
                <MdArrowBack/><span>Retour à l'accueil</span>
            </NavLink>
        </div>
    );
};

export default Error404;