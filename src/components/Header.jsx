import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (e, targetId) => {
        e.preventDefault();

        if (location.pathname === '/') {
            const element = document.querySelector(targetId);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                setMobileMenuOpen(false);
            }
        } else {
            navigate(`/${targetId}`);
            // HomePage useEffect will handle the scroll on mount
        }
    };
    const textColor = (!scrolled && theme === 'light') ? '#ffffff' : 'var(--color-text-primary)';

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: scrolled ? '1rem 0' : '2rem 0',
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'var(--color-bg-secondary)' : 'transparent',
            boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            color: textColor
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" onClick={(e) => handleNavigation(e, '#hjem')} className="header-logo" style={{
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: textColor,
                    textDecoration: 'none'
                }}>
                    PLAYGARDEN
                </Link>

                {/* Desktop Nav */}
                <nav className="header-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div className="desktop-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <a href="#hjem" onClick={(e) => handleNavigation(e, '#hjem')} style={{ fontWeight: 500, cursor: 'pointer', color: textColor }}>Hjem</a>
                        <Link to="/produksjoner" style={{ fontWeight: 500, color: textColor, textDecoration: 'none' }}>Produksjoner</Link>
                        <a href="#om-oss" onClick={(e) => handleNavigation(e, '#om-oss')} style={{ fontWeight: 500, cursor: 'pointer', color: textColor }}>Om oss</a>
                        <a href="#priser" onClick={(e) => handleNavigation(e, '#priser')} style={{ fontWeight: 500, cursor: 'pointer', color: textColor }}>Priser</a>
                        <a href="#kontakt" onClick={(e) => handleNavigation(e, '#kontakt')} style={{ fontWeight: 500, cursor: 'pointer', color: textColor }}>Kontakt</a>
                    </div>

                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: '1px solid var(--color-border)',
                            padding: '0.5rem',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: textColor,
                            cursor: 'pointer'
                        }}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        )}
                    </button>

                    {/* Mobile Menu Toggle (Simplified for brevity, would usually be hidden on desktop via CSS) */}
                </nav>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .desktop-links {
                        display: none !important;
                    }
                }
            `}</style>
        </header>
    );
}

export default Header;
