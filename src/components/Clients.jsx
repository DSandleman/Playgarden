import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const clientLogos = [
    { src: 'images/aker-logo.webp', alt: 'Aker' },
    { src: 'images/all-in-logo.webp', alt: 'All In' },
    { src: 'images/kongsberg-logo.webp', alt: 'Kongsberg' },
    { src: 'images/tvedestrand-kommune-logo.webp', alt: 'Tvedestrand Kommune' },
    { src: 'images/trygg-trafikk-logo.webp', alt: 'Trygg Trafikk' },
    { src: 'images/monster-logo.webp', alt: 'Monster' },
    { src: 'images/yle-logo.webp', alt: 'YLE' },
    { src: 'images/fagbokforlaget-logo.webp', alt: 'Fagbokforlaget' },
    { src: 'images/if-logo-1.webp', alt: 'IF' },
    { src: 'images/amnesty-logo.webp', alt: 'Amnesty' },
    { src: 'images/tannbuen-logo.webp', alt: 'Tannbuen' },
    { src: 'images/dnb-logo.webp', alt: 'DNB' },
    { src: 'images/sparebank1-logo.webp', alt: 'Sparebank1' },
    { src: 'images/momentum-logo.webp', alt: 'Momentum' },
    { src: 'images/tinn-kommune-logo.webp', alt: 'Tinn Kommune' },
    { src: 'images/aschehoug-logo-1.webp', alt: 'Aschehoug' },
    { src: 'images/medvind-logo-1.webp', alt: 'Medvind' }
];

function Clients() {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
            <div className="container">
                <h2 className="title-lg" style={{ textAlign: 'center', marginBottom: '3rem' }}>Våre oppdragsgivere:</h2>
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={30}
                    slidesPerView={7}
                    freeMode={true}
                    loop={true}
                    speed={6000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 7 },
                    }}
                    className="clients-carousel"
                    style={{ padding: '20px 0' }}
                >
                    {clientLogos.map((logo, index) => (
                        <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{
                                background: 'white',
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '80px',
                                width: '100%',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                <img src={logo.src} alt={logo.alt} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Clients;
