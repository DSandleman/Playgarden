import React from 'react';
import { productionsData } from '../data/productions';
import { Link } from 'react-router-dom';

function ProduksjonerPage() {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)', minHeight: '80vh', paddingTop: '120px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 className="title-lg">Våre produksjoner</h1>
                    <p style={{ maxWidth: '600px', margin: '1rem auto', color: 'var(--color-text-secondary)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                        Vi i Playgarden lager alt fra underholdings- og informasjonsvideoer, til reklame og klipp for sosiale medier.
                    </p>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {productionsData.map((prod) => (
                        <Link to={prod.link} key={prod.id} className="card" style={{
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textDecoration: 'none',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ height: '100px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <img src={prod.image} alt={prod.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                            </div>
                            <h3 style={{ color: 'var(--color-text-primary)', fontSize: '1.2rem', fontWeight: 600 }}>{prod.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProduksjonerPage;
