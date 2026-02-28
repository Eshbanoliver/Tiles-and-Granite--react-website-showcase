import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Rajesh Sharma',
            role: 'Home Owner',
            text: 'Excellent quality tiles at competitive prices. The showroom has a vast collection and the staff was very helpful in selecting the right tiles for my new home. Highly recommended!',
            initials: 'RS',
            stars: 5,
        },
        {
            name: 'Priya Gupta',
            role: 'Interior Designer',
            text: 'As an interior designer, I need reliable suppliers. Neelmani Tiles never disappoints — their granite collection is outstanding and delivery is always on time. A pleasure to work with.',
            initials: 'PG',
            stars: 5,
        },
        {
            name: 'Vikram Singh',
            role: 'Builder & Contractor',
            text: 'Been working with Neelmani Tiles for multiple projects. Their pricing is fair, quality is premium, and they always have the latest designs in stock. My go-to supplier.',
            initials: 'VS',
            stars: 5,
        },
        {
            name: 'Anita Mehra',
            role: 'Home Renovator',
            text: 'Renovated my entire kitchen with granite countertops from Neelmani. The quality is superb and the team helped me choose the perfect shade. The kitchen looks absolutely stunning now!',
            initials: 'AM',
            stars: 5,
        },
        {
            name: 'Suresh Agarwal',
            role: 'Hotel Owner',
            text: 'We needed premium tiles for our new hotel lobby and rooms. Neelmani Tiles provided an excellent selection and the tiles look magnificent. Very professional service.',
            initials: 'SA',
            stars: 5,
        },
        {
            name: 'Kavita Jain',
            role: 'Home Owner',
            text: 'First time buying tiles and I was clueless. The staff at Neelmani guided me patiently through the entire process. Got beautiful bathroom tiles at a great price. Thank you!',
            initials: 'KJ',
            stars: 5,
        },
        {
            name: 'Deepak Verma',
            role: 'Architect',
            text: 'The variety of imported and Indian tiles at Neelmani is impressive. Whether it\'s for a luxury residence or a commercial project, they have options for every requirement and budget.',
            initials: 'DV',
            stars: 5,
        },
        {
            name: 'Ritu Saxena',
            role: 'Home Owner',
            text: 'We got our living room and bedroom flooring done with Neelmani\'s vitrified tiles. The finish is flawless and the tiles are easy to maintain. Very happy with the purchase!',
            initials: 'RSx',
            stars: 4,
        },
        {
            name: 'Mohit Khandelwal',
            role: 'Real Estate Developer',
            text: 'Neelmani Tiles is our preferred supplier for all residential projects. Consistent quality, timely delivery, and competitive pricing. They understand the builder\'s needs perfectly.',
            initials: 'MK',
            stars: 5,
        },
    ];

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <span>Testimonials</span>
                </div>
                <h1>
                    Customer <span className="gradient-text">Testimonials</span>
                </h1>
                <p>
                    Read what our valued customers have to say about their experience with Neelmani Tiles and Granite.
                </p>
            </section>

            {/* Overall Rating */}
            <section className="metrics" style={{ paddingTop: '40px' }}>
                <div className="metrics-grid" style={{ maxWidth: '800px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    <AnimateOnScroll>
                        <div className="metric-card">
                            <div className="metric-number">4.9</div>
                            <div className="testimonial-stars" style={{ justifyContent: 'center', marginBottom: '4px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                            <div className="metric-label">Average Rating</div>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.1}>
                        <div className="metric-card">
                            <div className="metric-number">500+</div>
                            <div className="metric-label">Happy Customers</div>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <div className="metric-card">
                            <div className="metric-number">100%</div>
                            <div className="metric-label">Quality Commitment</div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* All Testimonials */}
            <section className="testimonials-full">
                <div className="text-center" style={{ marginBottom: '48px' }}>
                    <AnimateOnScroll>
                        <span className="section-label">Reviews</span>
                        <h2 className="section-title">
                            Trusted by <span className="gradient-text">Hundreds</span> of Customers
                        </h2>
                    </AnimateOnScroll>
                </div>

                <div className="testimonials-full-grid">
                    {testimonials.map((t, i) => (
                        <AnimateOnScroll key={i} delay={(i % 3) * 0.15}>
                            <div className="testimonial-card">
                                <div className="testimonial-quote-icon">"</div>
                                <div className="testimonial-stars">
                                    {[...Array(t.stars)].map((_, j) => (
                                        <span key={j} className="star">★</span>
                                    ))}
                                    {[...Array(5 - t.stars)].map((_, j) => (
                                        <span key={j} className="star" style={{ opacity: 0.2 }}>★</span>
                                    ))}
                                </div>
                                <p className="testimonial-text">{t.text}</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">{t.initials}</div>
                                    <div className="testimonial-author-info">
                                        <h4>{t.name}</h4>
                                        <p>{t.role}</p>
                                    </div>
                                </div>
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
                            Join Our Family of <span className="gradient-text">Satisfied Customers</span>
                        </h2>
                        <p>
                            Experience the Neelmani difference. Visit our showroom or contact us today!
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                📍 Visit Showroom
                            </Link>
                            <a href="tel:+917877702774" className="btn btn-secondary">
                                📞 Call: +91 7877702774
                            </a>
                        </div>
                    </div>
                </AnimateOnScroll>
            </section>
        </>
    );
}
