import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PriserPage() {
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
        <div className="page priser-page">
            <Header />
            <main className="page-content">
                <section className="pricing-section">
                    <div className="container">
                        <h2 className="section-title">Litt om priser...</h2>

                        <div className="pricing-content">
                            <p>For prisen er helt avhengig av produksjonens omfang.</p>

                            <p>Det viktigste spørsmålet vi stiller er: "hva skal innholdet brukes til – og hvor?"</p>

                            <p className="highlight">Med riktig planlegging, kan ett kan ett opptak bli til mange!</p>

                            <p>En enkel produksjon kan koste fra <strong>kr 20.000</strong>.</p>

                            <p>Men om du drømmer om helikopterscener, drager i bakgrunnen og en egen lydtekniker som kun snakker fransk, ja, da snakker vi hvertfall <strong>kr 200.000 og mer</strong>.</p>

                            <p>Antall klippedager er en stor faktor på pris. Ting som avansert grafikk, unike lokasjoner, transport og spesialutstyr vil også øke kostnaden.</p>

                            <p className="note">(Spesialutstyr kan for eksempel være kamerakran, drone, greenscreen, wirecam, livelink og lignende.)</p>

                            <p>Heldigvis har vi årevis erfaring med å tilpasse prosjekter etter ville drømmer og lommeboka. Vi skalerer prosjektets omfang til å passe en pris vi alle kan være fornøyd med, og dessuten får vi resultatet til å se dyrere ut enn det faktisk var.</p>

                            <p className="highlight">Vi gir alltid et spesifisert tilbud før oppdraget påbegynner.</p>
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

export default PriserPage;
