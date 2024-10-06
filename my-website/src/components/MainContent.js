import React from 'react';
import './MainContent.js';

const MainContent = () => {
    return (
        <main className="main-content">
            <section id="home">
                <h2>Lessons and insights <br></br>from 8 years</h2>
                <p>Where to grow your bussiness as a photographer: site or social media?</p>
                <img src="logo.png" alt="Register" />
            </section>
            <section id="Our Clients">
                <h2>Our Clients</h2>
                <p>Information about our clients</p>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <p>Contact information goes here.</p>
            </section>
        </main>
    );
};

export default MainContent;
