import { Link } from 'react-router-dom';
import { Check, Target, Eye, MapPin, Phone, Building2, TrendingUp, Award, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function About() {
    const highlights = [
        '10+ years of industry experience',
        '5000+ tile designs available',
        'Trusted by 500+ happy families',
        'Premium brands at best prices',
        'Expert guidance & consultation',
        'Serving all across Rajasthan',
    ];

    const timeline = [
        {
            year: 'Foundation',
            title: 'Humble Beginnings',
            desc: 'Started as a small tiles shop with a vision to provide premium quality tiles and granite at affordable prices to the people of Jaipur.',
            icon: Building2,
            theme: 'teal'
        },
        {
            year: 'Growth',
            title: 'Expanding the Collection',
            desc: 'Expanded our product range to include imported marble, granite slabs, designer tiles, and modern flooring solutions.',
            icon: TrendingUp,
            theme: 'orange'
        },
        {
            year: 'Present',
            title: 'Premium Showroom',
            desc: 'Today, we are one of Jaipur\'s most trusted tiles and granite showrooms with thousands of satisfied customers and an ever-growing collection.',
            icon: Award,
            theme: 'red'
        },
    ];

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <span>About Us</span>
                </div>
                <h1>
                    About <span className="gradient-text">Neelmani Tiles</span>
                </h1>
                <p>
                    Learn about our journey, values, and commitment to bringing you the finest tiles and granite.
                </p>
            </section>

            {/* About Content */}
            <section className="about-full">
                <div className="about-content-grid">
                    <AnimateOnScroll>
                        <div className="about-creative-visual">
                            <div className="about-image-wrapper creative-shape">
                                <img src="/images/about-team.png" alt="Neelmani Tiles Showroom" />
                                <div className="experience-badge">
                                    <span className="exp-number">10+</span>
                                    <span className="exp-text">Years of<br />Excellence</span>
                                </div>
                            </div>
                            <div className="about-decoration-dots"></div>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <div className="about-text creative-text">
                            <span className="section-label">Our Story</span>
                            <h2>
                                Building Dreams with <span className="gradient-text">Stone & Style</span>
                            </h2>
                            <p className="lead">
                                Neelmani Tiles and Granite was founded with a simple yet powerful vision — to make
                                premium quality tiles and granite accessible to everyone in Jaipur and beyond.
                            </p>
                            <p>
                                What started as a small venture has grown into one of the most trusted names in the industry.
                                Our showroom at Mansarover, Jaipur, houses an extensive collection of
                                tiles, marble, and granite from Indian and international manufacturers.
                            </p>

                            <div className="about-highlights-grid">
                                {highlights.map((h, i) => (
                                    <div key={i} className="highlight-pill">
                                        <Check size={14} className="pill-icon" />
                                        <span>{h}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="about-cta-wrapper" style={{ marginTop: '40px' }}>
                                <Link to="/services" className="btn btn-primary discover-btn">
                                    Discover More <span className="arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Journey Section */}
            <section className="core-values journey-section">
                <div className="text-center">
                    <AnimateOnScroll>
                        <span className="section-label">Our Journey</span>
                        <h2 className="section-title">
                            From Humble Beginnings to <span className="gradient-text">Excellence</span>
                        </h2>
                    </AnimateOnScroll>
                </div>
                <div className="values-grid timeline-grid">
                    {timeline.map((t, i) => (
                        <AnimateOnScroll key={i} delay={i * 0.15}>
                            <div className={`value-card journey-card ${t.theme}-journey`}>
                                <div className="journey-card-top">
                                    <div className="journey-year-pill">{t.year}</div>
                                    <div className="journey-icon-box">
                                        <t.icon size={24} />
                                    </div>
                                </div>
                                <h3 className="journey-card-title">{t.title}</h3>
                                <p className="journey-card-desc">{t.desc}</p>
                                <div className="journey-card-gradient"></div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>

            {/* Mission & Vision on About Page */}
            <section className="mission-vision" id="about-mission">
                <div className="text-center">
                    <AnimateOnScroll>
                        <span className="section-label">Mission & Vision</span>
                        <h2 className="section-title">
                            What Drives <span className="gradient-text">Us Forward</span>
                        </h2>
                    </AnimateOnScroll>
                </div>
                <div className="mv-grid">
                    <AnimateOnScroll>
                        <div className="mv-card">
                            <div className="mv-card-icon">
                                <Target size={32} color="#089F9D" />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To be Jaipur's most trusted tiles and granite provider by offering an unmatched
                                selection of premium quality products at competitive prices. We aim to simplify the
                                process of transforming spaces, providing expert guidance and personalized service
                                that exceeds customer expectations.
                            </p>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.15}>
                        <div className="mv-card">
                            <div className="mv-card-icon">
                                <Eye size={32} color="#089F9D" />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To become the leading tiles and granite showroom in Rajasthan, recognized for our
                                vast collection, exceptional customer service, and commitment to quality. We envision
                                helping thousands of families and businesses create spaces that inspire and endure for
                                generations.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <AnimateOnScroll>
                    <div className="cta-inner">
                        <h2>
                            Let's Build Something <span className="gradient-text">Beautiful Together</span>
                        </h2>
                        <p>
                            Visit our showroom and explore the finest collection of tiles and granite in Jaipur.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                <MapPin size={18} style={{ marginRight: '8px' }} /> Visit Showroom
                            </Link>
                            <a href="tel:+917877702774" className="btn btn-secondary">
                                <Phone size={18} style={{ marginRight: '8px' }} /> Call Us Now
                            </a>
                        </div>
                    </div>
                </AnimateOnScroll>
            </section>
        </>
    );
}
