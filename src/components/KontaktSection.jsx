import React, { useState } from 'react';

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
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
        alert('Takk for din henvendelse! (Dette er en demo-form)');
        console.log('Form submitted:', formData);
    };

    return (
        <section id="kontakt" className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="title-lg">Har du en idé? La oss gjøre den levende!</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                        Fortell oss litt om prosjektet, så svarer vi så raskt vi kan.
                    </p>
                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                        Vi kan også nåes på <a href="tel:90680627" style={{ color: 'var(--color-accent)' }}>906 80 627</a>.
                    </p>
                </div>

                <div className="card" style={{ padding: '3rem' }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Navn <span style={{ color: 'var(--color-accent)' }}>*</span></label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Ditt navn"
                                value={formData.name}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--color-border)',
                                    backgroundColor: 'var(--color-bg-secondary)',
                                    color: 'var(--color-text-primary)'
                                }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>E-postadresse <span style={{ color: 'var(--color-accent)' }}>*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="E-post"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        border: '1px solid var(--color-border)',
                                        backgroundColor: 'var(--color-bg-secondary)',
                                        color: 'var(--color-text-primary)'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Telefonnummer</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Ditt nummer"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        border: '1px solid var(--color-border)',
                                        backgroundColor: 'var(--color-bg-secondary)',
                                        color: 'var(--color-text-primary)'
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Melding</label>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Melding"
                                value={formData.message}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--color-border)',
                                    backgroundColor: 'var(--color-bg-secondary)',
                                    color: 'var(--color-text-primary)',
                                    fontFamily: 'inherit'
                                }}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '1rem 3rem' }}>
                            Send
                        </button>
                    </form>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
                    <p style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>Besøksadresse:</p>
                    <p>
                        CO/ Technopolis Fornebu<br />
                        Martin Linges Vei 25<br />
                        1364 Fornebu
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        <a href="mailto:post@playgarden.no" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>post@playgarden.no</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
