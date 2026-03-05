import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Trophy,
    Users,
    Home as HomeIcon,
    Palette,
    Phone,
    MessageCircle,
    MapPin,
    ChevronRight,
    Star,
    Plus,
    ShieldCheck,
    Award,
    Headset,
    Truck,
    Target,
    Eye,
    Gem,
    Handshake,
    Compass,
    Tag,
    Quote
} from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Home() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const heroSlides = [
        {
            image: '/images/hero-3.jpg',
            badge: "Jaipur's Premium Showroom",
            title: 'Transform Your Space with Premium Tiles & Granite',
            subtitle: 'Discover an exquisite collection of tiles, marble, and granite at Neelmani Tiles and Granite. Elevate your home, office, or commercial space with elegance and durability.',
            primaryBtn: 'Explore Collection →',
            secondaryBtn: 'Visit Showroom'
        },
        {
            image: '/images/hero-1.jpg',
            badge: 'Modern Collection 2024',
            title: 'Exquisite Designs for Modern Living',
            subtitle: 'Looking for the perfect tiles for your dream home? Our vast collection of designer tiles and premium granite offers endless possibilities for your space.',
            primaryBtn: 'View Products →',
            secondaryBtn: 'Contact Us'
        },
        {
            image: '/images/hero-2.jpg',
            badge: 'Quality & Trust',
            title: 'Durability Meets Elegant Aesthetics',
            subtitle: 'From sturdy floor tiles to luxurious kitchen countertops, we provide high-quality materials that stand the test of time while keeping your space beautiful.',
            primaryBtn: 'Book Consultation →',
            secondaryBtn: 'Our Services'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    const faqs = [
        {
            q: 'What types of tiles do you offer?',
            a: 'We offer a comprehensive range including ceramic tiles, vitrified tiles, porcelain tiles, designer wall tiles, floor tiles, kitchen tiles, bathroom tiles, and outdoor tiles from leading brands and manufacturers.',
        },
        {
            q: 'Do you provide installation services?',
            a: 'While we specialize in supplying premium quality tiles and granite, we can connect you with experienced installation professionals who ensure flawless fitting and finishing.',
        },
        {
            q: 'Can I visit the showroom to see the collection?',
            a: 'Absolutely! Our showroom at Mansarover, Jaipur is open Mon–Sat from 9 AM to 8 PM. You can explore our extensive collection and get expert guidance on selecting the perfect tiles and granite for your project.',
        },
        {
            q: 'Do you offer granite for kitchen countertops?',
            a: 'Yes! We have a stunning collection of granite slabs perfect for kitchen countertops, bathroom vanities, and table tops. Our collection includes both Indian and imported granite varieties.',
        },
        {
            q: 'What is the pricing range for your products?',
            a: 'Our pricing is competitive and varies based on the type, brand, and quality of tiles or granite. We offer options across all budget ranges from affordable to ultra-premium, ensuring there is something for everyone.',
        },
        {
            q: 'Do you deliver outside Jaipur?',
            a: 'Yes, we can arrange delivery across Rajasthan and nearby states. Delivery charges may vary depending on the distance and order quantity. Contact us for a custom quote.',
        },
    ];

    const services = [
        {
            slug: 'floor-tiles',
            icon: '🏠',
            title: 'Floor Tiles',
            desc: 'Premium ceramic, vitrified, and porcelain floor tiles for every room.',
            img: '/images/service-living.png',
        },
        {
            slug: 'bathroom-tiles',
            icon: '🚿',
            title: 'Bathroom Tiles',
            desc: 'Elegant wall and floor tiles for luxurious bathroom transformations.',
            img: '/images/service-bathroom.png',
        },
        {
            slug: 'kitchen-countertops',
            icon: '🍽️',
            title: 'Kitchen Solutions',
            desc: 'Granite countertops and designer backsplash tiles for modern kitchens.',
            img: '/images/service-kitchen.png',
        },
    ];

    const testimonials = [
        {
            name: 'Rajesh Sharma',
            role: 'Home Owner',
            text: 'Excellent quality tiles at competitive prices. The showroom has a vast collection and the staff was very helpful in selecting the right tiles for my new home.',
            initials: 'RS',
            color: 'teal'
        },
        {
            name: 'Priya Gupta',
            role: 'Interior Designer',
            text: 'As an interior designer, I need reliable suppliers. Neelmani Tiles never disappoints — their granite collection is outstanding and delivery is always on time.',
            initials: 'PG',
            color: 'purple'
        },
        {
            name: 'Vikram Singh',
            role: 'Builder & Contractor',
            text: 'Been working with Neelmani Tiles for multiple projects. Their pricing is fair, quality is premium, and they always have the latest designs in stock.',
            initials: 'VS',
            color: 'indigo'
        },
    ];

    const coreValues = [
        { icon: <Gem size={28} />, title: 'Premium Quality', desc: 'Only the finest tiles and granite from trusted manufacturers.', color: 'blue' },
        { icon: <Handshake size={28} />, title: 'Customer First', desc: 'Your satisfaction is our top priority in every interaction.', color: 'green' },
        { icon: <Compass size={28} />, title: 'Expert Guidance', desc: 'Professional advice to help you choose the perfect products.', color: 'orange' },
        { icon: <Tag size={28} />, title: 'Best Value', desc: 'Competitive pricing without compromising on quality.', color: 'purple' },
    ];

    const whyChooseUs = [
        { title: 'Extensive Collection', desc: 'Thousands of tiles and granite options across all styles, colors, and budgets under one roof.', color: 'ocean' },
        { title: 'Premium Brands', desc: 'We stock products from India\'s and the world\'s most trusted tile and granite manufacturers.', color: 'sunset' },
        { title: 'Expert Consultation', desc: 'Our experienced team helps you find the perfect match for your space and budget.', color: 'mint' },
        { title: 'Competitive Pricing', desc: 'Direct sourcing from manufacturers ensures the best prices for our customers.', color: 'berry' },
        { title: 'Trusted Since Years', desc: 'A proven track record of delivering excellence, earning trust of thousands of happy customers.', color: 'lavender' },
        { title: 'One-Stop Solution', desc: 'From floor tiles to kitchen countertops — all types of tiles and granite available here.', color: 'sky' },
        { title: 'Quality Assurance', desc: 'Rigorous quality checks for every single piece of tile and granite to ensure long-lasting beauty.', color: 'gold' },
        { title: 'Timely Delivery', desc: 'Efficient logistics network ensuring your materials arrive on schedule for your project.', color: 'rose' },
    ];

    return (
        <>
            {/* ===== HERO SECTION ===== */}
            <section className="hero" id="hero-section">
                <div className="hero-slider">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`hero-slide ${currentSlide === index ? 'active' : ''}`}
                        >
                            <div className="hero-bg">
                                <img src={slide.image} alt={slide.title} />
                                <div className="hero-overlay"></div>
                            </div>
                            <div className="hero-content">
                                <div className="hero-text">
                                    <div className="hero-badge">
                                        <span></span> {slide.badge}
                                    </div>
                                    <h1 className="hero-title">
                                        {slide.title.split(' ').map((word, i) =>
                                            word === 'Premium' || word === 'Tiles' || word === '&' || word === 'Granite' || word === 'Modern' || word === 'Designs' || word === 'Elegant' ?
                                                <span key={i} className="gradient-text">{word} </span> : word + ' '
                                        )}
                                    </h1>
                                    <p className="hero-subtitle">
                                        {slide.subtitle}
                                    </p>
                                    <div className="hero-buttons">
                                        <Link to="/services" className="btn btn-primary">
                                            {slide.primaryBtn}
                                        </Link>
                                        <Link to="/contact" className="btn btn-secondary">
                                            {slide.secondaryBtn}
                                        </Link>
                                    </div>
                                </div>
                                <div className="hero-visual">
                                    <div className="hero-metrics-grid">
                                        {[
                                            { num: '10+', label: 'Years Experience', icon: <Trophy size={18} /> },
                                            { num: '500+', label: 'Happy Clients', icon: <Users size={18} /> },
                                            { num: '1000+', label: 'Projects Done', icon: <HomeIcon size={18} /> },
                                            { num: '5000+', label: 'Designs', icon: <Palette size={18} /> }
                                        ].map((m, i) => (
                                            <div key={i} className={`liquid-glass-card metric-${i + 1}`}>
                                                <div className="metric-icon-small">{m.icon}</div>
                                                <div className="metric-info">
                                                    <div className="metric-num-small">{m.num}</div>
                                                    <div className="metric-label-small">{m.label}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="slider-dots">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== KEY METRICS ===== */}
            <section className="metrics" id="metrics-section">
                <div className="metrics-grid">
                    {[
                        { icon: <ShieldCheck size={32} />, number: '50+', label: 'Premium Brands' },
                        { icon: <Award size={32} />, number: '100%', label: 'Quality Assurance' },
                        { icon: <Headset size={32} />, number: '24/7', label: 'Expert Support' },
                        { icon: <Truck size={32} />, number: '100%', label: 'Safe Delivery' },
                    ].map((item, i) => (
                        <AnimateOnScroll key={i} delay={i * 0.1}>
                            <div className="metric-card">
                                <div className="metric-icon">{item.icon}</div>
                                <div className="metric-number">{item.number}</div>
                                <div className="metric-label">{item.label}</div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>

            {/* ===== ABOUT PREVIEW ===== */}
            <section className="about-preview" id="about-preview-section">
                {/* Decorative background circles */}
                <div className="circle-decoration"></div>
                <div className="circle-decoration-2"></div>

                <div className="about-preview-grid">
                    <AnimateOnScroll>
                        <div className="about-preview-image">
                            <img src="/images/about-showroom.png" alt="Neelmani Tiles showroom" />
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <div>
                            <span className="section-label">About Us</span>
                            <h2 className="section-title">
                                Your Trusted Partner for <span className="gradient-text">Tiles & Granite</span>
                            </h2>
                            <p className="section-subtitle" style={{ marginBottom: '20px' }}>
                                Neelmani Tiles and Granite is Jaipur's premium destination for all types of tiles, marble,
                                and granite. With over a decade of experience, we bring you the finest collection sourced
                                from the best manufacturers across India and the world.
                            </p>
                            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
                                Our mission is to help you transform your spaces into stunning masterpieces with quality
                                products, expert guidance, and competitive pricing.
                            </p>
                            <Link to="/about" className="btn btn-primary">
                                Discover More <ChevronRight size={18} style={{ marginLeft: '4px' }} />
                            </Link>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* ===== SERVICES PREVIEW ===== */}
            <section className="services-section" id="services-section">
                <div className="text-center" style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
                    <AnimateOnScroll>
                        <span className="section-label">Our Services</span>
                        <h2 className="section-title">
                            Premium <span className="gradient-text">Tiles & Granite</span> Solutions
                        </h2>
                        <p className="section-subtitle center">
                            All types of Tiles and Granite are available here. From floor tiles to kitchen countertops,
                            we have everything you need.
                        </p>
                    </AnimateOnScroll>
                </div>
                <div className="services-grid">
                    {services.map((service, i) => (
                        <AnimateOnScroll key={i} delay={i * 0.15}>
                            <div className="service-card">
                                <div className="service-card-image">
                                    <img src={service.img} alt={service.title} />
                                </div>
                                <div className="service-card-body">
                                    <div className="service-card-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <Link to={`/services/${service.slug}`} className="btn btn-primary discover-btn" style={{ marginTop: '16px' }}>
                                        Discover More <span className="arrow">→</span>
                                    </Link>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
                <AnimateOnScroll>
                    <div className="text-center" style={{ marginTop: '40px' }}>
                        <Link to="/services" className="btn btn-primary">
                            View All Services →
                        </Link>
                    </div>
                </AnimateOnScroll>
            </section>

            {/* ===== MISSION & VISION ===== */}
            <section className="mission-vision" id="mission-vision-section">
                <div className="text-center">
                    <AnimateOnScroll>
                        <span className="section-label">Mission & Vision</span>
                        <h2 className="section-title">
                            Driven by <span className="gradient-text">Excellence</span>
                        </h2>
                    </AnimateOnScroll>
                </div>
                <div className="mv-grid">
                    <AnimateOnScroll>
                        <div className="mv-card-container teal-theme">
                            <div className="mv-card">
                                {/* Front Face */}
                                <div className="mv-card-front">
                                    <h3 className="flip-title">Our Mission</h3>
                                </div>
                                {/* Back Face */}
                                <div className="mv-card-back">
                                    <div className="mv-card-icon"><Target size={32} /></div>
                                    <h3>Our Mission</h3>
                                    <p>
                                        To be Jaipur's most trusted tiles and granite provider by offering an unmatched
                                        selection of premium quality products at competitive prices. We aim to simplify the
                                        process of transforming spaces, providing expert guidance and personalized service
                                        that exceeds customer expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.15}>
                        <div className="mv-card-container purple-theme">
                            <div className="mv-card">
                                {/* Front Face */}
                                <div className="mv-card-front">
                                    <h3 className="flip-title">Our Vision</h3>
                                </div>
                                {/* Back Face */}
                                <div className="mv-card-back">
                                    <div className="mv-card-icon"><Eye size={32} /></div>
                                    <h3>Our Vision</h3>
                                    <p>
                                        To become the leading tiles and granite showroom in Rajasthan, recognized for our
                                        vast collection, exceptional customer service, and commitment to quality. We envision
                                        helping thousands of families and businesses create spaces that inspire and endure for
                                        generations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* ===== CORE VALUES ===== */}
            <section className="core-values" id="core-values-section">
                <div className="text-center">
                    <AnimateOnScroll>
                        <span className="section-label">Core Values</span>
                        <h2 className="section-title">
                            What We <span className="gradient-text">Stand For</span>
                        </h2>
                    </AnimateOnScroll>
                </div>
                <div className="values-grid">
                    {coreValues.map((val, i) => (
                        <AnimateOnScroll key={i} delay={i * 0.1}>
                            <div className={`value-card ${val.color}-card`}>
                                <div className="value-icon">{val.icon}</div>
                                <h3>{val.title}</h3>
                                <p>{val.desc}</p>
                                <Link to="/about" className="value-btn">See more</Link>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className="why-choose" id="why-choose-section">
                <div className="text-center">
                    <AnimateOnScroll>
                        <span className="section-label">Why Choose Us</span>
                        <h2 className="section-title">
                            The <span className="gradient-text">Neelmani</span> Advantage
                        </h2>
                        <p className="section-subtitle center">
                            Here's why thousands of customers trust Neelmani Tiles and Granite for their projects.
                        </p>
                    </AnimateOnScroll>
                </div>
                <div className="why-grid">
                    {whyChooseUs.map((item, i) => (
                        <AnimateOnScroll key={i} delay={i * 0.1}>
                            <div className={`why-card ${item.color}-why`}>
                                <span className="why-number">0{i + 1}</span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="cta-section" id="cta-section">
                <AnimateOnScroll>
                    <div className="cta-inner">
                        <h2>
                            Ready to <span className="gradient-text">Transform</span> Your Space?
                        </h2>
                        <p>
                            Visit our showroom or call us today to explore the finest collection of tiles and granite in Jaipur.
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:+917877702774" className="btn btn-primary">
                                <Phone size={18} style={{ marginRight: '8px' }} /> Call Now: +91 7877702774
                            </a>
                            <a
                                href="https://wa.me/917877702774?text=Hello%2C%20I%20am%20interested%20in%20your%20tiles%20and%20granite%20products."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp"
                            >
                                <MessageCircle size={18} style={{ marginRight: '8px' }} /> WhatsApp Us
                            </a>
                            <Link to="/contact" className="btn btn-secondary">
                                <MapPin size={18} style={{ marginRight: '8px' }} /> Visit Showroom
                            </Link>
                        </div>
                    </div>
                </AnimateOnScroll>
            </section>

            {/* ===== TESTIMONIALS PREVIEW ===== */}
            <section className="testimonials-section" id="testimonials-section">
                <div className="text-center">
                    <AnimateOnScroll>
                        <span className="section-label">Testimonials</span>
                        <h2 className="section-title">
                            What Our <span className="gradient-text">Customers Say</span>
                        </h2>
                        <p className="section-subtitle center">
                            Don't just take our word for it — hear from our satisfied customers.
                        </p>
                    </AnimateOnScroll>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <AnimateOnScroll key={i} delay={i * 0.15}>
                            <div className={`testimonial-card ${t.color}-test`}>
                                <div className="test-header">
                                    <div className="test-accent-box">
                                        <div className="test-avatar-ring">
                                            <span>{t.initials}</span>
                                        </div>
                                        <div className="test-accent-corner"></div>
                                    </div>
                                    <div className="test-author-info">
                                        <h4>{t.name}</h4>
                                        <p>{t.role}</p>
                                    </div>
                                    <div className="test-quote-icon">
                                        <Quote size={40} />
                                    </div>
                                </div>
                                <div className="test-divider"></div>
                                <div className="test-content">
                                    <p>{t.text}</p>
                                </div>
                                <div className="test-footer">
                                    <div className="testimonial-stars">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} size={16} fill="#f97316" color="#f97316" />
                                        ))}
                                    </div>
                                    <div className="test-dot-accent"></div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
                <AnimateOnScroll>
                    <div className="text-center" style={{ marginTop: '40px' }}>
                        <Link to="/testimonials" className="btn btn-primary">
                            Read All Testimonials <ChevronRight size={18} style={{ marginLeft: '4px' }} />
                        </Link>
                    </div>
                </AnimateOnScroll>
            </section>

            {/* ===== FAQ SECTION ===== */}
            <section className="faq-section" id="faq-section">
                <div className="text-center">
                    <AnimateOnScroll>
                        <span className="section-label">FAQ</span>
                        <h2 className="section-title">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                        <p className="section-subtitle center">
                            Find answers to common questions about our products and services.
                        </p>
                    </AnimateOnScroll>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <AnimateOnScroll key={i} delay={i * 0.08}>
                            <div className={`faq-item ${openFaq === i ? 'active' : ''}`}>
                                <div className="faq-question" onClick={() => toggleFaq(i)}>
                                    <span>{faq.q}</span>
                                    <span className={`faq-toggle ${openFaq === i ? 'open' : ''}`}>
                                        <Plus size={20} />
                                    </span>
                                </div>
                                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
                <AnimateOnScroll>
                    <div className="text-center" style={{ marginTop: '40px' }}>
                        <Link to="/contact" className="btn btn-primary">
                            Still Have Questions? Contact Us <ChevronRight size={18} style={{ marginLeft: '4px' }} />
                        </Link>
                    </div>
                </AnimateOnScroll>
            </section>
        </>
    );
}
