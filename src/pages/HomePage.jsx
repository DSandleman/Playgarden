import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Clients from '../components/Clients';
import OmOssSection from '../components/OmOssSection';
import PriserSection from '../components/PriserSection';
import KontaktSection from '../components/KontaktSection';

function HomePage() {
    useEffect(() => {
        // Handle initial hash scroll if present
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        }
    }, []);

    return (
        <div className="home-page">
            <Hero />
            <div id="services">
                <Services />
            </div>
            <OmOssSection />
            <div id="clients">
                <Clients />
            </div>
            <PriserSection />
            <KontaktSection />
        </div>
    );
}

export default HomePage;
