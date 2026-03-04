import { Link } from 'react-router-dom';
import {
    Home,
    Layout,
    Droplets,
    UtensilsCrossed,
    Landmark,
    Sparkles,
    Building2,
    HardHat,
    Factory,
    Star,
    Gem,
    ShieldCheck,
    Palette,
    Phone,
    MessageCircle,
    MapPin,
    ArrowRight
} from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Services() {
    const services = [
        {
            icon: <Home size={24} />,
            title: 'Floor Tiles',
            desc: 'Premium ceramic, vitrified, and porcelain floor tiles designed for durability and high-traffic resistance.',
            img: '/images/service-living.png',
        },
        {
            icon: <Layout size={24} />,
            title: 'Wall Tiles',
            desc: 'Exquisite designer wall tiles that add character to your interiors with subtle textures and bold patterns.',
            img: '/images/marble-texture.png',
        },
        {
            icon: <Droplets size={24} />,
            title: 'Bathroom Tiles',
            desc: 'Anti-skid and water-resistant tiles in stunning designs, perfect for a spa-like bathroom transformation.',
            img: '/images/service-bathroom.png',
        },
        {
            icon: <UtensilsCrossed size={24} />,
            title: 'Kitchen Countertops',
            desc: 'Elegant and heat-resistant granite and marble surfaces that bring luxury to your culinary space.',
            img: '/images/service-kitchen.png',
        },
        {
            icon: <Landmark size={24} />,
            title: 'Granite Slabs',
            desc: 'A massive collection of Indian and imported granite slabs for flooring, stairs, and decorative elements.',
            img: '/images/hero-showroom.png',
        },
        {
            icon: <Gem size={24} />,
            title: 'Marble & Stone',
            desc: 'Premium marble varieties, including Italian and natural stone, adding timeless elegance to any project.',
            img: '/images/marble-texture.png',
        },
        {
            icon: <Building2 size={24} />,
            title: 'Commercial Projects',
            desc: 'High-quality stone and tile solutions tailored for offices, showrooms, and large-scale commercial builds.',
            img: '/images/service-living.png',
        },
        {
            icon: <HardHat size={24} />,
            title: 'Vitrified Tiles',
            desc: 'Strong and stylish vitrified tiles that offer a seamless look with minimal maintenance for modern homes.',
            img: '/images/hero-showroom.png',
        },
    ];

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <span>Services</span>
                </div>
                <h1>
                    Our <span className="gradient-text">Premium Collections</span>
                </h1>
                <p>
                    Neelmani Tiles and Granite is a trusted name in Jaipur for premium tiles, granite, marble, and stone solutions.
                </p>
            </section>

            {/* Services Detailed Intro */}
            <section className="about-full" style={{ paddingBottom: 0 }}>
                <div className="about-content-grid">
                    <AnimateOnScroll>
                        <div className="about-creative-visual">
                            <div className="about-image-wrapper creative-shape" style={{ borderRadius: '100px 40px 100px 40px' }}>
                                <img src="/images/hero-showroom.png" alt="Showroom Collections" />
                            </div>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <div className="about-text creative-text">
                            <span className="section-label">Excellence in Stone</span>
                            <h2>
                                Quality and <span className="gradient-text">Elegant Designs</span>
                            </h2>
                            <p className="lead" style={{ fontSize: '18px' }}>
                                We offer a wide range of high-quality floor tiles, wall tiles, vitrified tiles, designer tiles, granite slabs, and marble at competitive prices.
                            </p>
                            <p>
                                Known for durability, elegant designs, and expert guidance, we cater to homes, offices, and commercial projects.
                                Every product in our collection is handpicked to ensure style and strength.
                            </p>
                            <p>
                                Visit our showroom in Jaipur for the latest collections and reliable service that transforms your space with elegance.
                            </p>
                            <div className="about-cta-wrapper" style={{ marginTop: '32px' }}>
                                <a href="tel:+917877702774" className="btn btn-primary">
                                    Book a Consultation <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                                </a>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-section" id="services-list" style={{ padding: '80px 0' }}>
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <AnimateOnScroll>
                        <span className="section-label">Our Specialized Range</span>
                        <h2 className="section-title">
                            Stone Solutions for <span className="gradient-text">Every Need</span>
                        </h2>
                        <p className="section-subtitle center">
                            Explore our comprehensive list of products designed to give your project the perfect finish.
                        </p>
                    </AnimateOnScroll>
                </div>

                <div className="services-grid">
                    {services.map((service, i) => (
                        <AnimateOnScroll key={i} delay={(i % 3) * 0.15}>
                            <div className="service-card">
                                <div className="service-card-image">
                                    <img src={service.img} alt={service.title} />
                                </div>
                                <div className="service-card-body">
                                    <div className="service-card-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>

            {/* Values/Trust Banner */}
            <section className="services-banner" style={{ marginTop: 0 }}>
                <AnimateOnScroll>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '32px' }}>
                            <span className="gradient-text">Reliable Service</span> That Transforms Your Space
                        </h2>
                        <p style={{ fontSize: '18px', opacity: 0.9 }}>
                            We provide expert guidance to help you select the best stones and tiles for your dream project, ensuring durability and style go hand-in-hand.
                        </p>
                    </div>
                </AnimateOnScroll>
            </section>

            {/* Brands Section */}
            <section className="core-values" style={{ backgroundColor: 'var(--bg-main)' }}>
                <div className="text-center">
                    <AnimateOnScroll>
                        <span className="section-label">Premium Partners</span>
                        <h2 className="section-title">
                            Trusted <span className="gradient-text">Brands</span> We Showcase
                        </h2>
                    </AnimateOnScroll>
                </div>
                <div className="values-grid">
                    {[
                        { icon: <Building2 size={32} color="#089F9D" />, title: 'Kajaria', desc: 'Premium quality with innovative tile designs.' },
                        { icon: <Factory size={32} color="#089F9D" />, title: 'Somany', desc: 'Combining durability with elegant aesthetics.' },
                        { icon: <Sparkles size={32} color="#089F9D" />, title: 'Johnson', desc: 'Cutting-edge technology in tile manufacturing.' },
                        { icon: <Star size={32} color="#089F9D" />, title: 'Nitco', desc: 'World-class designs for sophisticated spaces.' },
                        { icon: <Gem size={32} color="#089F9D" />, title: 'RAK Ceramics', desc: 'Global leader in ceramics and stone solutions.' },
                        { icon: <ShieldCheck size={32} color="#089F9D" />, title: 'Asian Granito', desc: 'Versatile range of high-performance products.' },
                    ].map((brand, i) => (
                        <AnimateOnScroll key={i} delay={(i % 3) * 0.1}>
                            <div className="value-card" style={{ padding: '32px' }}>
                                <div className="value-icon" style={{ marginBottom: '16px' }}>{brand.icon}</div>
                                <h3 style={{ fontSize: '20px' }}>{brand.title}</h3>
                                <p style={{ fontSize: '14px' }}>{brand.desc}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <AnimateOnScroll>
                    <div className="cta-inner">
                        <h2>
                            Ready to Upgrade Your <span className="gradient-text">Interiors?</span>
                        </h2>
                        <p>
                            Visit our showroom in Jaipur for the latest collections and reliable service that transforms your space.
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:+917877702774" className="btn btn-primary">
                                <Phone size={18} style={{ marginRight: '8px' }} /> Call: +91 7877702774
                            </a>
                            <a
                                href="https://wa.me/917877702774?text=Hello%2C%20I'm%20interested%20in%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp"
                            >
                                <MessageCircle size={18} style={{ marginRight: '8px' }} /> WhatsApp Us
                            </a>
                        </div>
                    </div>
                </AnimateOnScroll>
            </section>
        </>
    );
}

