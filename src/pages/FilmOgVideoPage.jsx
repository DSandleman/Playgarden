import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const services = [
    {
        title: 'Innhold til event og arrangement',
        description: 'Når arrangementet trenger det ekstra kruttet, eller du bare ønsker en fet aftermovie.',
        image: '/images/B-1020-re-scaled.jpg'
    },
    {
        title: 'Reklame',
        description: 'Skap interesse, vekk oppmerksomhet og påvirk holdninger eller handlinger.',
        image: '/images/Trygg-Trafikk-Juleselskap-46s-v5-Copy-010-scaled.png'
    },
    {
        title: 'TV- og dokumentarserier',
        description: 'Vi i playgarden har bakrunn fra TV-bransjen, og vi brenner for å lage de gode historiene.',
        image: '/images/DSC08419-scaled.jpg'
    },
    {
        title: 'Informasjonsfilmer',
        description: 'Gjør komplekse temaer lette å formidle.',
        image: '/images/20240411-Skjermbilde-2024-04-11-kl.-10.49.05.webp'
    },
    {
        title: 'Fotografering',
        description: 'Et pent smil er smittsomt.',
        image: '/images/om-oss-playgarden-1.webp'
    },
    {
        title: 'Drone',
        description: 'Fra et helt annet perspektiv.',
        image: '/images/Technopolis-UTOT.jpg'
    },
    {
        title: 'Grafikk og animasjon',
        description: 'Skap liv og effekter i statiske bilder.',
        image: '/images/Asset-26-svg.png'
    },
    {
        title: 'Medietrening',
        description: 'Bygg tillit, omdømme og kommuniser effektivt i media.',
        image: '/images/20230928-DSC04817.webp'
    }
];

function FilmOgVideoPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Takk for din henvendelse! Vi svarer så raskt vi kan.');
    };

    return (
        <div className="page film-og-video-page">
            <Header />
            <main className="page-content">
                <section className="services-intro">
                    <div className="container">
                        <h1>Vi driver med alt innen innhold- og videoproduksjon</h1>
                        <p className="subtitle">– men hva vil det si?</p>
                    </div>
                </section>

                <section className="services-detail-section">
                    <div className="container">
                        <div className="services-detail-grid">
                            {services.map((service, index) => (
                                <div key={index} className="service-detail-card">
                                    <div
                                        className="service-detail-image"
                                        style={{ backgroundImage: `url(${service.image})` }}
                                    ></div>
                                    <div className="service-detail-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="contact-cta-section">
                    <div className="container">
                        <h2>Hør med oss hva det vil koste!</h2>
                        <p>Det koster ingenting å spørre.</p>
                        <p>Fortell oss litt om prosjektet, så svarer vi så raskt vi kan.</p>
                        <p>Vi kan også nåes på 906 80 627.</p>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ditt navn"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Din e-post"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Fortell oss om prosjektet ditt..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Send melding</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default FilmOgVideoPage;
