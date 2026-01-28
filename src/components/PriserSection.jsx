import React from 'react';

function PriserSection() {
    return (
        <section id="priser" className="section-padding" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="title-lg">Litt om priser...</h2>
                    <div style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                        <p style={{ color: 'var(--color-accent)', fontWeight: 600, marginBottom: '1rem' }}>
                            For prisen er helt avhengig av produksjonens omfang.
                        </p>
                        <p>
                            Det viktigste spørsmålet vi stiller er: <em><strong>"hva skal innholdet brukes til – og hvor?"</strong></em>
                        </p>
                        <p>
                            Med riktig planlegging, <strong>kan ett opptak bli til mange!</strong>
                        </p>
                    </div>
                </div>

                <div className="card" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                    {/* Decorative Background Icon */}
                    <img
                        src="/images/Asset-4.png"
                        alt=""
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '-50px',
                            transform: 'translateY(-50%)',
                            opacity: 0.1,
                            height: '300px',
                            pointerEvents: 'none'
                        }}
                    />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <img src="/images/Asset-4.png" alt="Playgarden Logo Icon" width="80" height="80" style={{ marginBottom: '1rem' }} />
                        </div>

                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            En enkel produksjon kan koste fra kr 20.000.<br />
                            Men om du drømmer om helikopterscener, drager i bakgrunnen og en egen lydtekniker som kun snakker fransk, ja, da snakker vi hvertfall kr 200.000 og mer.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            Antall klippedager er en stor faktor på pris. Ting som avansert grafikk, unike lokasjoner, transport og spesialutstyr vil også øke kostnaden.<br />
                            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>(Spesialutstyr kan for eksempel være kamerakran, drone, greenscreen, wirecam, livelink og lignende.)</span>
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            Heldigvis har vi årevis erfaring med å tilpasse prosjekter etter ville drømmer og lommeboka.<br />
                            Vi skalerer prosjektets omfang til å passe en pris vi alle kan være fornøyd med, og dessuten får vi resultatet til å se dyrere ut enn det faktisk var.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic', fontWeight: 600, color: 'var(--color-accent)', textAlign: 'center', marginTop: '3rem' }}>
                            Vi gir alltid et spesifisert tilbud før oppdraget påbegynner.
                        </p>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Hør med oss hva det vil koste!</p>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
                        Det koster ingenting å spørre. Fortell oss litt om prosjektet, så svarer vi så raskt vi kan.<br />
                        Vi kan også nåes på 906 80 627.
                    </p>
                    <a href="#kontakt" className="btn btn-primary">Gå til kontaktskjema</a>
                </div>
            </div>
        </section>
    );
}

export default PriserSection;
