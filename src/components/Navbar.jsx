import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layout, Droplets, UtensilsCrossed, Landmark, Gem, Building2, HardHat, ChevronDown } from 'lucide-react';

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

    const megaMenuItems = [
        { title: 'Floor Tiles', desc: 'Premium designs for every room.', icon: <Home size={20} />, slug: 'floor-tiles' },
        { title: 'Wall Tiles', desc: 'Artistic textures and patterns.', icon: <Layout size={20} />, slug: 'wall-tiles' },
        { title: 'Bathroom Tiles', desc: 'Water-resistant luxury stones.', icon: <Droplets size={20} />, slug: 'bathroom-tiles' },
        { title: 'Kitchen Countertops', desc: 'Durable granite & marble.', icon: <UtensilsCrossed size={20} />, slug: 'kitchen-countertops' },
        { title: 'Granite Slabs', desc: 'Natural stone for floors & stairs.', icon: <Landmark size={20} />, slug: 'granite-slabs' },
        { title: 'Marble & Stone', desc: 'Timeless Italian marble range.', icon: <Gem size={20} />, slug: 'marble-stone' },
        { title: 'Commercial Projects', desc: 'Bulk solutions for business.', icon: <Building2 size={20} />, slug: 'commercial-projects' },
        { title: 'Vitrified Tiles', desc: 'Strong & low maintenance.', icon: <HardHat size={20} />, slug: 'vitrified-tiles' },
    ];

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Services', hasMega: true },
        { path: '/testimonials', label: 'Testimonials' },
        { path: '/contact', label: 'Contact Us' },
    ];

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar">
                <div className="navbar-inner">
                    <Link to="/" className="nav-logo">
                        <img
                            src="/images/logo.png"
                            alt="Neelmani Tiles Logo"
                            className="site-logo"
                            style={{ height: '45px', width: 'auto' }}
                        />
                    </Link>

                    <div className="nav-links">
                        {navItems.map((item) => (
                            <div key={item.path} className={item.hasMega ? 'nav-item-has-mega' : ''}>
                                <Link
                                    to={item.path}
                                    className={`nav-link ${location.pathname === item.path || (item.hasMega && location.pathname.startsWith('/services')) ? 'active' : ''}`}
                                >
                                    {item.label} {item.hasMega && <ChevronDown size={14} style={{ marginLeft: '4px' }} />}
                                </Link>

                                {item.hasMega && (
                                    <div className="mega-menu">
                                        <div className="mega-menu-inner">
                                            {megaMenuItems.map((megaItem, idx) => (
                                                <Link key={idx} to={`/services/${megaItem.slug}`} className="mega-menu-item">
                                                    <div className="mega-icon">{megaItem.icon}</div>
                                                    <div className="mega-content">
                                                        <h4>{megaItem.title}</h4>
                                                        <p>{megaItem.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
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
                <div style={{ maxHeight: '200px', overflowY: 'auto', paddingLeft: '20px' }}>
                    {megaMenuItems.map((megaItem, idx) => (
                        <Link key={idx} to={`/services/${megaItem.slug}`} className="nav-link" style={{ fontSize: '13px', opacity: 0.8 }}>
                            - {megaItem.title}
                        </Link>
                    ))}
                </div>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                    Get a Quote
                </Link>
            </div>
        </>
    );
}
