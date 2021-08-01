import React from 'react';
import Timeline from '../components/experiences/Timeline';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Experiences = () => {

    return (
        <>
            <Nav/>
            <div className="experiences">
                <h2>Expériences, formations et qualifications</h2>
                <Timeline/>
            </div>
            <Footer/>
        </>
    );
};

export default Experiences;