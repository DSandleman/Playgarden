import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData, reklamerContent, droneContent } from '../data/services';

function ServicePage() {
    const { slug } = useParams();

    // Find basic service info
    const serviceInfo = servicesData.find(s => s.id === slug);

    // Map content
    const contentMap = {
        reklamer: reklamerContent,
        drone: droneContent
    };

    const detailedContent = contentMap[slug] || null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!serviceInfo && !detailedContent) {
        return (
            <div className="section-padding" style={{ paddingTop: '120px', textAlign: 'center' }}>
                <h2>Tjeneste ikke funnet</h2>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Tilbake til forsiden</Link>
            </div>
        );
    }

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)', minHeight: '80vh', paddingTop: '120px' }}>
            <div className="container">
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                    ← Tilbake
                </Link>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {detailedContent ? (
                        <>
                            <h1 className="title-lg" style={{ marginBottom: '2rem' }}>{detailedContent.title}</h1>

                            {detailedContent.mainVideo && (
                                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden' }}>
                                    <iframe
                                        src={detailedContent.mainVideo}
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}

                            {!detailedContent.mainVideo && serviceInfo?.image && (
                                <div style={{ marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden' }}>
                                    <img src={serviceInfo.image} alt={serviceInfo.title} style={{ width: '100%', height: 'auto' }} />
                                </div>
                            )}

                            <div style={{ marginBottom: '3rem' }}>
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{detailedContent.heading}</h2>
                                {detailedContent.introText.map((paragraph, index) => (
                                    <p key={index} style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {detailedContent.videos && detailedContent.videos.length > 0 && (
                                <div style={{ marginTop: '4rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--color-accent)', display: 'inline-block', paddingBottom: '0.5rem' }}>Videoproduksjoner</h3>
                                    <div style={{ display: 'grid', gap: '2rem' }}>
                                        {detailedContent.videos.map((video, index) => (
                                            <div key={index} className="card" style={{ padding: '2rem' }}>
                                                <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{video.title}</h4>
                                                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '8px', overflow: 'hidden' }}>
                                                    <iframe
                                                        src={video.src}
                                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                        frameBorder="0"
                                                        allow="autoplay; fullscreen; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                                {video.link && (
                                                    <div style={{ marginTop: '1rem', textAlign: 'right' }}>
                                                        <a href={video.link} style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Se prosjekt &rarr;</a>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        // Fallback generic content
                        <>
                            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                <h1 className="title-lg">{serviceInfo?.title || 'Tjeneste'}</h1>
                                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
                                    {serviceInfo?.description}
                                </p>
                            </div>
                            {serviceInfo?.image && (
                                <div style={{ marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden' }}>
                                    <img src={serviceInfo.image} alt={serviceInfo.title} style={{ width: '100%', height: 'auto' }} />
                                </div>
                            )}
                            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                                <p>Mer innhold for {serviceInfo?.title} kommer.</p>
                                <Link to="/#kontakt" className="btn btn-primary" style={{ marginTop: '1rem' }}>Ta kontakt</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ServicePage;
