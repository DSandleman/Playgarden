import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function KontaktPage() {
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
        // Form submission logic would go here
        alert('Takk for din henvendelse! Vi svarer så raskt vi kan.');
    };

    return (
        <div className="page kontakt-page">
            <Header />
            <main className="page-content">
                <section className="contact-section">
                    <div className="container">
                        <div className="contact-grid">
                            <div className="contact-info">
                                <h2>Playgarden Film</h2>
                                <div className="social-links">
                                    <a href="https://www.facebook.com/Playgardenfilm/" target="_blank" rel="noopener noreferrer">Facebook</a>
                                    <a href="https://www.instagram.com/playgardenfilm" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    <a href="https://www.linkedin.com/company/playgarden-film/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </div>
                                <div className="address">
                                    <p>CO/ Technopolis Fornebu</p>
                                    <a href="https://www.google.com/maps/place/Playgarden+Film/@59.8952341,10.6229071,705m" target="_blank" rel="noopener noreferrer">
                                        Martin Linges vei 25
                                    </a>
                                    <p>1364 Fornebu</p>
                                </div>
                                <div className="contact-details">
                                    <a href="mailto:post@playgarden.no">post@playgarden.no</a>
                                    <a href="tel:90690627">906 90 627</a>
                                    <p>Org.nr. 912 59 6990</p>
                                </div>
                            </div>

                            <div className="contact-form-container">
                                <h2>Ta kontakt for en helt uforpliktende prat!</h2>
                                <p className="form-intro">Har du en idé? La oss gjøre den levende!</p>
                                <p className="form-intro">Fortell oss litt om prosjektet, så svarer vi så raskt vi kan.</p>
                                <p className="form-intro">Vi kan også nåes på 906 80 627.</p>

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
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default KontaktPage;
