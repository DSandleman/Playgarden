import React from 'react';

const teamMembers = [
    {
        name: 'Iris Sylte',
        role: 'Produsent, regissør og partner',
        description: [
            'Iris har over 25 års erfaring fra tv-bransjen, som både klipper, regissør, redaktør og produsent.',
            'Hun bidrar med alt fra planlegging, manus, regi og etterarbeid.',
            'Iris har et godt overblikk på prosjektene og sørger for å sikre høy kvalitet og at tidsfrister og budsjett overholdes.'
        ],
        phone: '+47 951 98 803',
        email: 'iris@playgarden.no',
        image: '/images/20240320-DSC09857-1024x576.jpg' // Placeholder, will verify
    },
    {
        name: 'Thomas Thomassen',
        role: 'Produsent, fotograf og partner',
        description: [
            'I over 25 år har Thomas jobbet med tv-produksjon og oppdragsfilm – 12 år som fast fotograf for TV2, før han ble frilans.',
            'Thomas har en lidenskap for å skape visuelle uttrykk, og er den i Playgarden med en brennende interesse for foto og teknikk.'
        ],
        phone: '+47 906 906 27',
        email: 'thomas@playgarden.no',
        image: '/images/20240320-DSC09927-1024x576.jpg'
    },
    {
        name: 'John Kleppe',
        role: 'Klipp, foto og innholdsprodusent',
        description: [
            'John har drevet med video i over 12 år, og har tilbrakt mesteparten av tiden i redigeringsrommet.',
            'Han er en «jack-of-all trades» innen feltet, og har blant annet vært med på å starte en egen TV-kanal fra scratch.'
        ],
        phone: '+47 45 22 88 06',
        email: 'john@playgarden.no',
        image: '/images/20240320-DSC09904-1024x576.jpg'
    },
    {
        name: 'Andreas Reinhardt',
        role: 'Produsent og fotograf',
        description: [
            'Andreas er en all-rounder med erfaring innen redigering, kamera og manus.',
            'Aller best liker han å være med på hele prosessen, fra planleggingsstadiet til ferdigstilt film. Det spiller ingen rolle om det er snakk om en omfattende kortfilm eller en enkel informasjonsfilm; Andreas legger uansett sjela si i å få til et best mulig resultat.',
            'Når han ikke jobber med Playgarden og film, sitter han gjerne i sitt hjemmestudio og spiller inn egenkomponerte rockelåter.'
        ],
        image: '/images/playgarden-andreas-1.webp'
    },
    {
        name: 'Molly',
        role: 'Playdog',
        description: [
            'Molly er kontorets gledesspreder og er overlykkelig for å komme på jobb.',
            'Hun står i bresjen for velkomstkomitéen og får aldri nok kos.'
        ],
        image: '/images/playgarden-molly.webp'
    }
];

function OmOssSection() {
    return (
        <section id="om-oss" className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>
                        <div>Vi i Playgarden har drevet med film i årevis –</div>
                        <div>fordi vi elsker det!</div>
                    </div>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                        Vi er et produksjonsselskap med mange års erfaring og kofferten full av kabler, kameraer og kreative innfall.
                    </p>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
                        Playgarden leverer produksjoner fra A-Å. Alt fra reklamer, informasjon og bedriftsfilmer og annet snacks – og det vi gjør det med et glimt i øyet og full kontroll bak kamera.
                    </p>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Vårt team</p>
                    <h2 className="title-lg" style={{ marginBottom: '2rem' }}>Møt menneskene bak magien</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem'
                }}>
                    {teamMembers.map((member, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ aspectRatio: '3/4', height: '320px', overflow: 'hidden', textAlign: 'center', borderRadius: '12px', marginBottom: '1.5rem' }}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    onError={(e) => { e.target.onerror = null; e.target.src = '/images/Asset-4.png'; }} // Fallback
                                />
                            </div>
                            <div style={{ textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    marginBottom: '1rem',
                                    color: '#ffffff',
                                    backgroundColor: '#00d084', // vivid-green-cyan from WP preset
                                    padding: '0.6rem 1.2rem',
                                    borderRadius: '4px',
                                    display: 'inline-block',
                                    fontWeight: 600,
                                    width: 'fit-content'
                                }}>{member.name}</h3>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', marginBottom: 0 }}>
                                    {member.role}
                                </p>
                                {member.name === 'Molly' && (
                                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontStyle: 'italic', opacity: 0.7, marginTop: '0.5rem' }}>
                                        "Voff"
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OmOssSection;
