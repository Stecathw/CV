import React from 'react';
import Footer from '../components/Footer';
import Hobbies from '../components/knowledges/Hobbies';
import Languages from '../components/knowledges/Languages';
import Otherskills from '../components/knowledges/Otherskills';
import Nav from '../components/Nav';

const Knowledge = () => {
    return (
        <>
            <Nav/>
            <div className="knowledge">
                <Languages />
                <Otherskills />
                <Hobbies />
            </div>
            <Footer />
        </>
    );
};

export default Knowledge;