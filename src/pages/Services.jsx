import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Services() {
    const services = [
        {
            icon: '🏠',
            title: 'Floor Tiles',
            desc: 'Transform your floors with our premium collection of ceramic, vitrified, and porcelain tiles. Available in a wide range of sizes, patterns, and finishes for every room.',
            img: '/images/service-living.png',
        },
        {
            icon: '🧱',
            title: 'Wall Tiles',
            desc: 'Elevate your walls with exquisite designer tiles. From subtle textures to bold patterns, our wall tile collection adds character and style to any space.',
            img: '/images/marble-texture.png',
        },
        {
            icon: '🚿',
            title: 'Bathroom Tiles',
            desc: 'Create spa-like bathrooms with our specialized bathroom tile collection. Water-resistant, anti-skid, and available in stunning designs for both walls and floors.',
            img: '/images/service-bathroom.png',
        },
        {
            icon: '🍽️',
            title: 'Kitchen Countertops',
            desc: 'Premium granite and marble countertops that combine beauty with durability. Heat-resistant, scratch-proof, and available in various colors and patterns.',
            img: '/images/service-kitchen.png',
        },
        {
            icon: '🏛️',
            title: 'Granite Slabs',
            desc: 'Explore our vast collection of Indian and imported granite slabs. Perfect for countertops, flooring, stairs, and decorative elements with natural beauty.',
            img: '/images/hero-showroom.png',
        },
        {
            icon: '✨',
            title: 'Marble & Stone',
            desc: 'Timeless elegance with premium marble varieties including Italian marble, Indian marble, and natural stone. Each piece is unique and adds luxury to your space.',
            img: '/images/marble-texture.png',
        },
        {
            icon: '🏢',
            title: 'Commercial Flooring',
            desc: 'Durable and elegant flooring solutions for offices, showrooms, hotels, and commercial properties. High-traffic-resistant tiles that maintain their beauty.',
            img: '/images/service-living.png',
        },
        {
            icon: '🏗️',
            title: 'Exterior & Elevation',
            desc: 'Weather-resistant exterior tiles and elevation cladding that enhance your building\'s facade. UV-resistant and low-maintenance options available.',
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
                    Our <span className="gradient-text">Services</span>
                </h1>
                <p>
                    All types of Tiles and Granite are available here. Explore our comprehensive range of products and solutions.
                </p>
            </section>

            {/* Services Banner */}
            <section className="services-banner">
                <AnimateOnScroll>
                    <h2>
                        <span className="gradient-text">All Types of Tiles and Granite</span> Are Available Here
                    </h2>
                    <p>
                        From classic marble to modern porcelain — find everything under one roof at Neelmani Tiles and Granite.
                    </p>
                </AnimateOnScroll>
            </section>

            {/* Services Grid */}
            <section className="services-full">
                <div className="text-center" style={{ marginBottom: '48px' }}>
                    <AnimateOnScroll>
                        <span className="section-label">What We Offer</span>
                        <h2 className="section-title">
                            Complete <span className="gradient-text">Tiles & Granite</span> Solutions
                        </h2>
                        <p className="section-subtitle center">
                            Whether you're building a new home, renovating your kitchen, or designing a commercial space,
                            we have the perfect tiles and granite for you.
                        </p>
                    </AnimateOnScroll>
                </div>

                <div className="services-full-grid">
                    {services.map((service, i) => (
                        <AnimateOnScroll key={i} delay={(i % 3) * 0.15}>
                            <div className="service-full-card">
                                <div className="service-full-image">
                                    <img src={service.img} alt={service.title} />
                                </div>
                                <div className="service-full-body">
                                    <div className="service-card-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>

            {/* Brands Section */}
            <section className="core-values">
                <div className="text-center">
                    <AnimateOnScroll>
                        <span className="section-label">Our Brands</span>
                        <h2 className="section-title">
                            Premium <span className="gradient-text">Brands</span> We Stock
                        </h2>
                        <p className="section-subtitle center">
                            We partner with India's and the world's leading tile and granite manufacturers to bring you the best.
                        </p>
                    </AnimateOnScroll>
                </div>
                <div className="values-grid">
                    {[
                        { icon: '🏢', title: 'Kajaria', desc: 'India\'s No.1 tile brand with world-class quality.' },
                        { icon: '🏭', title: 'Somany', desc: 'Premium tiles known for durability and design.' },
                        { icon: '✨', title: 'Johnson', desc: 'Innovative tiles with cutting-edge technology.' },
                        { icon: '🌟', title: 'Nitco', desc: 'Italian-inspired designs with Indian craftsmanship.' },
                        { icon: '💎', title: 'RAK Ceramics', desc: 'Global brand known for premium quality.' },
                        { icon: '🏗️', title: 'Asian Granito', desc: 'Wide range of tiles and marble products.' },
                        { icon: '⭐', title: 'Simpolo', desc: 'Designer tiles for modern interiors.' },
                        { icon: '🎨', title: '& Many More', desc: 'Explore our showroom for the full collection.' },
                    ].map((brand, i) => (
                        <AnimateOnScroll key={i} delay={(i % 4) * 0.1}>
                            <div className="value-card">
                                <div className="value-icon">{brand.icon}</div>
                                <h3>{brand.title}</h3>
                                <p>{brand.desc}</p>
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
                            Need Help Choosing the <span className="gradient-text">Right Tiles?</span>
                        </h2>
                        <p>
                            Our experts are ready to guide you. Visit our showroom or call us for a free consultation.
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:+917877702774" className="btn btn-primary">
                                📞 Call: +91 7877702774
                            </a>
                            <a
                                href="https://wa.me/917877702774?text=Hello%2C%20I%20need%20help%20choosing%20tiles%20for%20my%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp"
                            >
                                💬 WhatsApp Us
                            </a>
                            <Link to="/contact" className="btn btn-secondary">
                                📍 Visit Showroom
                            </Link>
                        </div>
                    </div>
                </AnimateOnScroll>
            </section>
        </>
    );
}
