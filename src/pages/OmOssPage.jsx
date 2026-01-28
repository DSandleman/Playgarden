import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const teamMembers = [
    {
        name: 'Iris Sylte',
        role: 'Produsent, regissør og partner.',
        description: 'Iris har over 25 års erfaring fra tv-bransjen, som både klipper, regissør, redaktør og produsent. Hun bidrar med alt fra planlegging, manus, regi og etterarbeid. Iris har et godt overblikk på prosjektene og sørger for å sikre høy kvalitet og at tidsfrister og budsjett overholdes.',
        phone: '+47 951 98 803',
        email: 'iris@playgarden.no',
        image: 'images/om-oss-playgarden-1.webp'
    },
    {
        name: 'Thomas Thomassen',
        role: 'Produsent, fotograf og partner.',
        description: 'I over 25 år har Thomas jobbet med tv-produksjon og oppdragsfilm – 12 år som fast fotograf for TV2, før han ble frilans. Thomas har en lidenskap for å skape visuelle uttrykk, og er den i Playgarden med en brennende interesse for foto og teknikk.',
        phone: '+47 906 906 27',
        email: 'thomas@playgarden.no',
        image: 'images/om-oss-playgarden-1.webp'
    },
    {
        name: 'John Kleppe',
        role: 'Klipp, foto og innholdsprodusent.',
        description: 'John har drevet med video i over 12 år, og har tilbrakt mesteparten av tiden i redigeringsrommet. Han er en «jack-of-all trades» innen feltet, og har blant annet vært med på å starte en egen TV-kanal fra scratch.',
        phone: '+47 45 22 88 06',
        email: 'john@playgarden.no',
        image: 'images/om-oss-playgarden-1.webp'
    },
    {
        name: 'Andreas Reinhardt',
        role: 'Produsent og fotograf',
        description: 'Andreas er en all-rounder med erfaring innen redigering, kamera og manus. Aller best liker han å være med på hele prosessen, fra planleggingsstadiet til ferdigstilt film. Det spiller ingen rolle om det er snakk om en omfattende kortfilm eller en enkel informasjonsfilm; Andreas legger uansett sjela si i å få til et best mulig resultat. Når han ikke jobber med Playgarden og film, sitter han gjerne i sitt hjemmestudio og spiller inn egenkomponerte rockelåter.',
        phone: '',
        email: '',
        image: 'images/om-oss-playgarden-1.webp'
    },
    {
        name: 'Molly',
        role: 'Playdog',
        description: 'Molly er kontorets gledesspreder og er overlykkelig for å komme på jobb. Hun står i bresjen for velkomstkomitéen og får aldri nok kos.',
        phone: '',
        email: '',
        image: 'images/om-oss-playgarden-1.webp'
    }
];

function OmOssPage() {
    return (
        <div className="page om-oss-page">
            <Header />
            <main className="page-content">
                <section className="page-hero">
                    <div className="container">
                        <p className="intro-text">
                            Vi er et produksjonsselskap med mange års erfaring og kofferten full av kabler, kameraer og kreative innfall.
                        </p>
                        <p className="intro-text">
                            Playgarden leverer produksjoner fra A-Å. Alt fra reklamer, informasjon og bedriftsfilmer og annet snacks – og det vi gjør det med et glimt i øyet og full kontroll bak kamera.
                        </p>
                    </div>
                </section>

                <section className="team-section">
                    <div className="container">
                        <h2 className="section-title">Vårt team</h2>
                        <p className="section-subtitle">Møt menneskene bak magien</p>

                        <div className="team-grid">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="team-member">
                                    <div className="team-member-image">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <div className="team-member-info">
                                        <h3>{member.name}</h3>
                                        <p className="role">{member.role}</p>
                                        <p className="description">{member.description}</p>
                                        {member.phone && <p className="contact">{member.phone}</p>}
                                        {member.email && <a href={`mailto:${member.email}`} className="contact">{member.email}</a>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default OmOssPage;
