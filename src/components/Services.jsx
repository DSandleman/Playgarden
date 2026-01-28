import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

function Services() {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="title-lg">Dette gjør vi:</h2>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {servicesData.map((service, index) => (
                        <Link to={service.link} key={index} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textDecoration: 'none',
                            color: 'inherit',
                            transition: 'transform 0.2s ease',
                        }}>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', height: '250px' }}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{service.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
