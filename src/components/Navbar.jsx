import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Landmark } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/testimonials', label: 'Testimonials' },
        { path: '/contact', label: 'Contact Us' },
    ];

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar">
                <div className="navbar-inner">
                    <Link to="/" className="nav-logo">
                        <div className="nav-logo-icon">
                            <Landmark size={24} strokeWidth={2} />
                        </div>
                        <span>
                            Neelmani <span className="gradient-text">Tiles</span>
                        </span>
                    </Link>

                    <div className="nav-links">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <Link to="/contact" className="btn btn-primary nav-cta">
                        Get a Quote
                    </Link>

                    <button
                        className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    >
                        {item.label}
                    </Link>
                ))}
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                    Get a Quote
                </Link>
            </div>
        </>
    );
}
