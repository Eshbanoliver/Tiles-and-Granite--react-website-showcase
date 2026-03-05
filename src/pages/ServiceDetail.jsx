import { useParams, Link } from 'react-router-dom';
import {
    Home,
    Layout,
    Droplets,
    UtensilsCrossed,
    Landmark,
    Gem,
    Building2,
    HardHat,
    CheckCircle2,
    Phone,
    MessageCircle,
    MapPin,
    Clock,
    Plus,
    ChevronRight,
    ArrowLeft
} from 'lucide-react';
import { useState } from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';

const serviceDetails = {
    'floor-tiles': {
        title: 'Floor Tiles',
        icon: <Home size={24} />,
        heroImg: '/images/hero-1.jpg',
        mainImg: '/images/service-living.png',
        description: 'Transform your living spaces with our premium collection of floor tiles. Designed for both elegance and endurance, our tiles offer the perfect foundation for your home or office.',
        details: 'Our floor tiles are manufactured using state-of-the-art technology to ensure they stand up to heavy foot traffic while maintaining their pristine appearance. We offer a vast selection ranging from classic ceramic to polished porcelain and heavy-duty vitrified options.',
        keyPoints: [
            'Exceptional durability and wear resistance',
            'Easy to clean and maintain',
            'Available in various sizes and finishes (Glossy, Matte, Satin)',
            'Stain and scratch resistant',
            'Perfect for living rooms, bedrooms, and hallways'
        ],
        faqs: [
            { q: 'How do I choose the right size for my room?', a: 'Generally, larger tiles make a small room look bigger. For standard rooms, 600x600mm or 800x800mm are popular choices.' },
            { q: 'Are these tiles slip-resistant?', a: 'Yes, we offer specific matte and textured finishes that provide excellent grip, making them safe for all areas.' },
            { q: 'Can I use these for outdoor spaces?', a: 'While many are suitable, we recommend our specialized heavy-duty outdoor tiles for terraces and balconies.' }
        ]
    },
    'wall-tiles': {
        title: 'Wall Tiles',
        icon: <Layout size={24} />,
        heroImg: '/images/hero-2.jpg',
        mainImg: '/images/marble-texture.png',
        description: 'Elevate your walls with our stunning range of designer wall tiles. From kitchen backsplashes to feature walls, our collection adds depth and character to any vertical surface.',
        details: 'Wall tiles are more than just protection; they are an expression of style. Our collection features a wide array of textures, 3D patterns, and artistic designs that can turn a plain wall into a masterpiece. They are easy to install and even easier to clean.',
        keyPoints: [
            'Wide range of decorative and 3D patterns',
            'Moisture and heat resistant',
            'Vibrant colors that don\'t fade over time',
            'Ideal for kitchens, bathrooms, and accent walls',
            'Hygienic and anti-fungal properties'
        ],
        faqs: [
            { q: 'Can floor tiles be used on walls?', a: 'Yes, floor tiles can be used on walls, but wall tiles are generally not recommended for floors as they aren\'t designed to bear weight.' },
            { q: 'Are they suitable for behind the stove?', a: 'Absolutely, our ceramic and porcelain wall tiles are heat resistant and very easy to wipe clean after cooking.' }
        ]
    },
    'bathroom-tiles': {
        title: 'Bathroom Tiles',
        icon: <Droplets size={24} />,
        heroImg: '/images/hero-3.jpg',
        mainImg: '/images/service-bathroom.png',
        description: 'Create your private sanctuary with our specialized bathroom tiles. We focus on safety, hygiene, and aesthetics to give you a spa-like experience at home.',
        details: 'Bathrooms require tiles that can handle constant moisture and provide safety. Our anti-skid floor tiles and matching wall patterns ensure a cohesive look while keeping you safe. Available in various themes from modern minimalist to luxury traditional.',
        keyPoints: [
            'Anti-skid technology for wet surfaces',
            'Low water absorption rates',
            'Resistant to bathroom chemicals and cleaners',
            'Matching floor and wall concepts available',
            'Bacteria resistant surfaces'
        ],
        faqs: [
            { q: 'What is anti-skid rating?', a: 'We provide tiles with R-ratings (R9-R11) that indicate the level of slip resistance. Higher is better for wet areas.' },
            { q: 'How do I prevent grout mold?', a: 'We recommend using epoxy grout and proper ventilation to keep your bathroom tiles looking new.' }
        ]
    },
    'kitchen-countertops': {
        title: 'Kitchen Countertops',
        icon: <UtensilsCrossed size={24} />,
        heroImg: '/images/hero-1.jpg',
        mainImg: '/images/service-kitchen.png',
        description: 'The heart of your home deserves the best. Our granite and marble countertops combine luxury with the ruggedness needed for everyday culinary tasks.',
        details: 'Our kitchen surfaces are hand-selected for their beauty and strength. Granite is the choice for durability, while marble offers unmatched elegance. We provide precision cutting and finishing to fit your kitchen layout perfectly.',
        keyPoints: [
            'Heat and scratch resistant surfaces',
            'Natural stone uniqueness in every slab',
            'Precision edges and polishing',
            'Easy to sanitize for food preparation',
            'Increases home resale value'
        ],
        faqs: [
            { q: 'Which is better, Marble or Granite?', a: 'Granite is generally harder and more resistant to acids/staining, making it ideal for heavy kitchen use. Marble is best for aesthetics and baking stations.' },
            { q: 'Does it require sealing?', a: 'Yes, natural stone should be professionally sealed once a year to prevent staining.' }
        ]
    },
    'granite-slabs': {
        title: 'Granite Slabs',
        icon: <Landmark size={24} />,
        heroImg: '/images/hero-2.jpg',
        mainImg: '/images/hero-showroom.png',
        description: 'Discover the raw beauty of natural granite. Our extensive collection of Indian and imported slabs offers endless possibilities for floors, stairs, and cladding.',
        details: 'Granite is one of the hardest materials on earth, making it perfect for both interior and exterior applications. We source our slabs from the finest quarries, ensuring consistent quality and stunning natural patterns.',
        keyPoints: [
            'Massive variety of colors and patterns',
            'Weather resistant for exterior use',
            'Ideal for high-traffic flooring and steps',
            'High polish retention',
            'Eco-friendly natural material'
        ],
        faqs: [
            { q: 'What sizes are available?', a: 'We have standard slab sizes as well as custom-cut options to minimize wastage for your project.' },
            { q: 'Is Indian granite better than imported?', a: 'Indian granite is world-renowned for its hardness and variety, while imported granites often offer unique colors not found locally.' }
        ]
    },
    'marble-stone': {
        title: 'Marble & Stone',
        icon: <Gem size={24} />,
        heroImg: '/images/hero-3.jpg',
        mainImg: '/images/marble-texture.png',
        description: 'Experience timeless luxury with Neelmani\'s marble and natural stone collection. Perfect for those who want their space to reflect opulence and sophisticated taste.',
        details: 'From the pristine white of Makrana to the exotic patterns of Italian marble, our collection is curated for the discerning customer. Natural stone brings a unique character to your home that no man-made material can replicate.',
        keyPoints: [
            'Premium Italian and Indian marble',
            'Unique natural veining patterns',
            'Cool to the touch - perfect for warm climates',
            'Can be re-polished multiple times',
            'Adds a sense of luxury and space'
        ],
        faqs: [
            { q: 'Does marble stain easily?', a: 'Marble is porous, so spills should be cleaned immediately. Proper sealing significantly reduces the risk of staining.' },
            { q: 'Can I use marble in the bathroom?', a: 'Yes, marble is a classic choice for bathrooms, provided it is treated with the correct finish and sealant.' }
        ]
    },
    'commercial-projects': {
        title: 'Commercial Projects',
        icon: <Building2 size={24} />,
        heroImg: '/images/hero-1.jpg',
        mainImg: '/images/service-living.png',
        description: 'We provide specialized stone and tile solutions for large-scale commercial builds. From corporate offices to retail showrooms, we deliver quality at scale.',
        details: 'Commercial spaces require materials that are not just beautiful but can withstand extreme use. We offer bulk supply, project-specific customization, and technical advisory for architects and contractors.',
        keyPoints: [
            'Bulk supply capacity for large projects',
            'Consistent quality across large batches',
            'Expert technical consultation',
            'Project-timeline-aligned delivery',
            'Materials meeting commercial building codes'
        ],
        faqs: [
            { q: 'Do you offer custom designs for brands?', a: 'Yes, we can source and cut materials to match specific brand color palettes or design requirements.' },
            { q: 'Can you handle out-of-state projects?', a: 'We have the logistics capability to supply major commercial projects across Rajasthan and neighboring regions.' }
        ]
    },
    'vitrified-tiles': {
        title: 'Vitrified Tiles',
        icon: <HardHat size={24} />,
        heroImg: '/images/hero-2.jpg',
        mainImg: '/images/hero-showroom.png',
        description: 'The modern standard for high-performance flooring. Vitrified tiles offer a near-perfect surface that is incredibly strong and virtually maintenance-free.',
        details: 'Vitrification makes tiles extremely dense and low-porous. This results in a tile that is resistant to water, stains, and mechanical stress. Our digital vitrified tiles come in realistic marble, wood, and stone finishes.',
        keyPoints: [
            'Near-zero water absorption',
            'Highly resistant to stains and scratches',
            'Precision-cut for thin grout lines',
            'Available in Full Body, Double Charged, and Glazed',
            'Consistent color and texture'
        ],
        faqs: [
            { q: 'What is Double Charge vitrified?', a: 'These tiles have a double layer of pigment, making them thicker and more durable for high-traffic areas.' },
            { q: 'Are they better than natural marble?', a: 'They offer better stain resistance and consistency, while marble offers a more unique, natural feel. It depends on your priority!' }
        ]
    }
};

export default function ServiceDetail() {
    const { serviceId } = useParams();
    const service = serviceDetails[serviceId];
    const [openFaq, setOpenFaq] = useState(null);

    if (!service) {
        return (
            <div className="container text-center" style={{ padding: '100px 20px' }}>
                <h2>Service Not Found</h2>
                <Link to="/services" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Services</Link>
            </div>
        );
    }

    return (
        <div className="service-detail-page">
            {/* HERO SECTION */}
            <section className="page-header" style={{ backgroundImage: `url("${service.heroImg}")` }}>
                <div className="page-header-container">
                    <div className="page-header-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/services">Services</Link>
                        <span>/</span>
                        <span>{service.title}</span>
                    </div>
                    <h1>
                        {service.title.split(' ').map((word, i) =>
                            i === 0 ? <span key={i}>{word} </span> : <span key={i} className="gradient-text">{word} </span>
                        )}
                    </h1>
                    <p>{service.description}</p>
                </div>
            </section>

            <section className="service-detail-content" style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 20px' }}>
                    <div className="service-grid-layout" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '50px' }}>

                        {/* LEFT SIDE - Details & Key Points */}
                        <div className="service-main-col">
                            <AnimateOnScroll>
                                <div className="detail-image-wrapper" style={{ marginBottom: '40px', borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--glass-shadow)' }}>
                                    <img src={service.mainImg} alt={service.title} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                                </div>
                                <div className="detail-info">
                                    <span className="section-label">Product Overview</span>
                                    <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Why Choose Our <span className="gradient-text">{service.title}</span>?</h2>
                                    <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.8' }}>
                                        {service.details}
                                    </p>

                                    <div className="key-points-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                                        {service.keyPoints.map((point, i) => (
                                            <div key={i} className="key-point-item" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                                <div style={{ color: 'var(--teal)', marginTop: '4px' }}><CheckCircle2 size={18} /></div>
                                                <p style={{ fontWeight: '500', color: 'var(--text-heading)' }}>{point}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        {/* RIGHT SIDE - Contact & FAQs */}
                        <div className="service-sidebar">
                            <AnimateOnScroll delay={0.2}>
                                {/* Contact Card */}
                                <div className="glass-card" style={{ padding: '32px', marginBottom: '40px', background: 'var(--glass-bg-strong)' }}>
                                    <h3 style={{ marginBottom: '20px', fontSize: '24px' }}>Inquiry Now</h3>
                                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>Get a custom quote or expert consultation for your project.</p>

                                    <div className="sidebar-contact-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div style={{ display: 'flex', gap: '15px' }}>
                                            <div style={{ background: 'rgba(8, 159, 157, 0.1)', padding: '10px', borderRadius: '10px', color: 'var(--teal)' }}><Phone size={20} /></div>
                                            <div>
                                                <p style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6 }}>Call Us</p>
                                                <a href="tel:+917877702774" style={{ fontWeight: '600' }}>+91 7877702774</a>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '15px' }}>
                                            <div style={{ background: 'rgba(37, 211, 102, 0.1)', padding: '10px', borderRadius: '10px', color: '#25D366' }}><MessageCircle size={20} /></div>
                                            <div>
                                                <p style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6 }}>WhatsApp</p>
                                                <a href="https://wa.me/917877702774" style={{ fontWeight: '600' }}>Message Now</a>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '15px' }}>
                                            <div style={{ background: 'rgba(132, 116, 161, 0.1)', padding: '10px', borderRadius: '10px', color: 'var(--purple)' }}><MapPin size={20} /></div>
                                            <div>
                                                <p style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6 }}>Location</p>
                                                <p style={{ fontWeight: '600', fontSize: '14px' }}>Mansarover, Jaipur</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '30px', justifyContent: 'center' }}>
                                        Contact Us <ChevronRight size={18} />
                                    </Link>
                                </div>

                                {/* FAQ Section */}
                                <div className="faq-sidebar">
                                    <h3 style={{ marginBottom: '20px', fontSize: '22px' }}>Common Questions</h3>
                                    <div className="sidebar-faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        {service.faqs.map((faq, i) => (
                                            <div key={i} className={`faq-item-small ${openFaq === i ? 'active' : ''}`} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '15px' }}>
                                                <div
                                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                    style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontWeight: '600', fontSize: '15px', color: 'var(--text-heading)' }}
                                                >
                                                    <span>{faq.q}</span>
                                                    <span style={{ color: 'var(--teal)', transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}><Plus size={16} /></span>
                                                </div>
                                                <div style={{ maxHeight: openFaq === i ? '200px' : '0', overflow: 'hidden', transition: 'all 0.3s ease' }}>
                                                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '10px', lineHeight: '1.6' }}>{faq.a}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="cta-section">
                <AnimateOnScroll>
                    <div className="cta-inner">
                        <div className="cta-content">
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
                    </div>
                </AnimateOnScroll>
            </section>

            {/* BACK LINK */}
            <div className="container" style={{ padding: '40px 20px', textAlign: 'center' }}>
                <Link to="/services" className="btn btn-secondary" style={{ border: 'none', background: 'transparent' }}>
                    <ArrowLeft size={18} style={{ marginRight: '8px' }} /> Back to all services
                </Link>
            </div>
        </div>
    );
}
