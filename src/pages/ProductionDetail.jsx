import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productionsData, productionDetails } from '../data/productions';

function ProductionDetail() {
    const { slug } = useParams();

    // Find basic info
    const basicInfo = productionsData.find(p => p.id === slug);

    // Find detailed content
    const details = productionDetails[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!basicInfo) {
        return (
            <div className="section-padding" style={{ paddingTop: '120px', textAlign: 'center' }}>
                <h2>Produksjon ikke funnet</h2>
                <Link to="/produksjoner" className="btn btn-primary" style={{ marginTop: '1rem' }}>Tilbake til oversikten</Link>
            </div>
        );
    }

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)', minHeight: '80vh', paddingTop: '120px' }}>
            <div className="container">
                <Link to="/produksjoner" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                    ← Tilbake til produksjoner
                </Link>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 className="title-lg">{basicInfo.title}</h1>
                        {details?.intro && (
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
                                {details.intro}
                            </p>
                        )}
                    </div>

                    {!details ? (
                        // Fallback if no detailed content yet
                        <div style={{ textAlign: 'center' }}>
                            <img src={basicInfo.image} alt={basicInfo.title} style={{ maxWidth: '100%', borderRadius: '12px', marginBottom: '2rem' }} />
                            <p>Mer info kommer...</p>
                        </div>
                    ) : (
                        // Render sections
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                            {details.sections.map((section, index) => {
                                switch (section.type) {
                                    case 'text':
                                        return (
                                            <div key={index} style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                                                {section.title && <h2 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>{section.title}</h2>}
                                                {section.content.map((p, i) => (
                                                    <p key={i} style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>{p}</p>
                                                ))}
                                            </div>
                                        );
                                    case 'video_full':
                                        return (
                                            <div key={index} style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '12px', overflow: 'hidden' }}>
                                                <iframe
                                                    src={section.src}
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                    frameBorder="0"
                                                    allow="autoplay; fullscreen; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        );
                                    case 'video_grid':
                                        return (
                                            <div key={index} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                                {section.videos.map((vid, i) => (
                                                    <div key={i} style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '12px', overflow: 'hidden' }}>
                                                        <iframe
                                                            src={vid.src}
                                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                            frameBorder="0"
                                                            allow="autoplay; fullscreen; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                    case 'gallery':
                                        return (
                                            <div key={index} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                                                {section.images.map((img, i) => (
                                                    <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', height: '150px' }}>
                                                        <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                    default:
                                        return null;
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProductionDetail;
