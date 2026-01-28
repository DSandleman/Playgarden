import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--color-footer-bg)', color: 'var(--color-footer-text)', padding: '4rem 0', marginTop: 'auto', transition: 'all 0.3s ease' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <a href="/" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
                    <img src="/images/Asset-4.png" alt="Playgarden Film" style={{ width: '150px' }} />
                </a>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-secondary)' }}>Playgarden Film</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem', textAlign: 'left' }}>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Besøksadresse</h3>
                        <p style={{ lineHeight: 1.6 }}>
                            CO/ Technopolis Fornebu<br />
                            Martin Linges Vei 25<br />
                            1364 Fornebu
                        </p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Kontakt</h3>
                        <p style={{ lineHeight: 1.6 }}>
                            <a href="mailto:post@playgarden.no" style={{ textDecoration: 'none', color: 'inherit' }}>post@playgarden.no</a><br />
                            906 80 627<br />
                            Org.nr. 912 59 6990
                        </p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Lenker</h3>
                        <p style={{ lineHeight: 1.6 }}>
                            <a href="/personvern" style={{ textDecoration: 'none', color: 'inherit' }}>Personvern</a><br />
                            <a href="/cookie-erklaering" style={{ textDecoration: 'none', color: 'inherit' }}>Cookie-erklæring</a>
                        </p>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', fontSize: '0.9rem', color: '#888' }}>
                    <p>© 2026 Playgarden Film</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
