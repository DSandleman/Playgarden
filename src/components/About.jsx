import React from 'react';

function About() {
    return (
        <section className="about">
            <div className="about-container">
                <img
                    src="images/Asset-4.png"
                    alt="Playgarden Film"
                    className="about-logo"
                />
                <p className="about-text">
                    Det finnes mange flotte og luftige visjoner der ute.
                    <br /><br />
                    Vår er ganske enkel;
                    <br />
                    Vi lager video som du er stolt av.
                </p>
                <a href="/om-oss" className="about-cta">
                    Vil du vite mer om oss?
                </a>
            </div>
            <div className="divider"></div>
        </section>
    );
}

export default About;
