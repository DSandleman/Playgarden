import React from 'react';

function Hero() {
    return (
        <section className="hero" id="hjem" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#000'
        }}>
            {/* Background Video (Vimeo) */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100vw',
                height: '100vh',
                minWidth: '177.77vh', // 16:9 Aspect Ratio
                minHeight: '56.25vw',
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden'
            }}>
                <iframe
                    src="https://player.vimeo.com/video/1075102398?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Hero Video"
                ></iframe>
            </div>

            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.4)',
                zIndex: 1
            }}></div>

            <div className="hero-content" style={{ textAlign: 'center', zIndex: 2, padding: '0 2rem' }}>
                <h1 style={{
                    fontSize: 'clamp(4rem, 15vw, 12rem)',
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: '1rem',
                    color: '#ffffff', // Solid white
                    letterSpacing: '-0.02em',
                    fontFamily: 'var(--font-secondary)'
                }}>
                    Playgarden
                </h1>
                <p style={{
                    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                    color: '#f0f0f0',
                    maxWidth: '800px',
                    margin: '0 auto 3rem',
                    fontWeight: 300,
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}>
                    Vi skaper visuelle historier som beveger.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#kontakt" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.2rem' }}>
                        Kontakt Oss
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
