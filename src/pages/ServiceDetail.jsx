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
        whatIsIt: 'Floor tiles are durable, water-resistant surface coverings typically made from ceramics, stone, metal, or baked clay. They are designed to withstand mechanical stress, moisture, and foot traffic while providing aesthetic appeal to a room\'s interior.',
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
            { q: 'Can I use these for outdoor spaces?', a: 'While many are suitable, we recommend our specialized heavy-duty outdoor tiles for terraces and balconies.' },
            { q: 'How do I calculate how many tiles I need?', a: 'Measure your room area, add 10% for cutting waste and future repairs, then divide by the coverage area of one tile box.' },
            { q: 'Can these tiles be installed over existing flooring?', a: 'Yes, provided the existing surface is perfectly level, solid, and properly prepared with the right adhesive.' }
        ]
    },
    'wall-tiles': {
        title: 'Wall Tiles',
        icon: <Layout size={24} />,
        heroImg: '/images/hero-2.jpg',
        mainImg: '/images/marble-texture.png',
        whatIsIt: 'Wall tiles are thinner and lighter than floor tiles, designed specifically for vertical surfaces. They are non-load-bearing and often glazed for water resistance and decorative appeal, making them perfect for kitchens, bathrooms, and accent walls.',
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
            { q: 'Are they suitable for behind the stove?', a: 'Absolutely, our ceramic and porcelain wall tiles are heat resistant and very easy to wipe clean after cooking.' },
            { q: 'What is the best way to clean wall tiles?', a: 'A simple mixture of warm water and mild detergent works best. Avoid abrasive scrubbers that might scratch the glaze.' },
            { q: 'Do wall tiles require special adhesive?', a: 'Yes, wall-specific adhesives are designed to prevent the tiles from sliding down while the bond is setting.' },
            { q: 'Can I get 3D textured tiles?', a: 'Yes, we have a specialized collection of 3D and high-depth wall tiles that add significant visual interest to any space.' }
        ]
    },
    'bathroom-tiles': {
        title: 'Bathroom Tiles',
        icon: <Droplets size={24} />,
        heroImg: '/images/hero-3.jpg',
        mainImg: '/images/service-bathroom.png',
        whatIsIt: 'Bathroom tiles are specialized moisture-resistant tiles that prioritize safety (anti-skid) and hygiene. They are designed to withstand constant water exposure and humidity without deteriorating or losing their anti-bacterial properties.',
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
            { q: 'How do I prevent grout mold?', a: 'We recommend using epoxy grout and proper ventilation to keep your bathroom tiles looking new.' },
            { q: 'Should I use large or small tiles in a small bathroom?', a: 'Large tiles with fewer grout lines often make a small bathroom feel more spacious and are easier to clean.' },
            { q: 'Are these tiles resistant to soap scum?', a: 'Our glazed ceramic and porcelain tiles are designed to resist soap buildup and can be easily wiped clean.' },
            { q: 'Do you offer matching floor and wall designs?', a: 'Yes, we have curated "Bathroom Concepts" where the floor and wall tiles are designed to complement each other perfectly.' }
        ]
    },
    'kitchen-countertops': {
        title: 'Kitchen Countertops',
        icon: <UtensilsCrossed size={24} />,
        heroImg: '/images/hero-1.jpg',
        mainImg: '/images/service-kitchen.png',
        whatIsIt: 'Kitchen countertops are heavy-duty, flat work surfaces used for food preparation. Our countertops are made from premium natural stones like granite and marble, offering heat resistance, durability, and a luxurious finish to the heart of the home.',
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
            { q: 'Does it require sealing?', a: 'Yes, natural stone should be professionally sealed once a year to prevent staining.' },
            { q: 'Can I put hot pots directly on the surface?', a: 'Granite is highly heat-resistant, but we still recommend using trivets to avoid localized thermal shock to the stone.' },
            { q: 'How do I clean my natural stone countertop?', a: 'Use a pH-neutral cleaner or specialized stone soap. Avoid acidic cleaners like lemon or vinegar which can dull the polish.' },
            { q: 'How many edges can I choose from?', a: 'We offer various edge profiles including Bullnose, Chamfered, Ogee, and Half Bullnose to suit your design style.' }
        ]
    },
    'granite-slabs': {
        title: 'Granite Slabs',
        icon: <Landmark size={24} />,
        heroImg: '/images/hero-2.jpg',
        mainImg: '/images/hero-showroom.png',
        whatIsIt: 'Granite slabs are large, flat pieces of natural rock quarried from the earth. Known for extreme hardness and unique crystalline patterns, these slabs are cut to size for various architectural uses including flooring, wall cladding, and stairs.',
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
            { q: 'Is Indian granite better than imported?', a: 'Indian granite is world-renowned for its hardness and variety, while imported granites often offer unique colors not found locally.' },
            { q: 'Can granite be used for stairs?', a: 'Yes, its durability and ability to take an anti-skid groove make it one of the best materials for both internal and external staircases.' },
            { q: 'Does granite fade in sunlight?', a: 'No, granite is UV-stable and will not fade even when installed in direct sunlight, unlike many synthetic alternatives.' },
            { q: 'What finishes are available?', a: 'Besides high-polish, we offer Honed (matte), Leathered (textured), and Flamed finishes for different aesthetic and functional needs.' }
        ]
    },
    'marble-stone': {
        title: 'Marble & Stone',
        icon: <Gem size={24} />,
        heroImg: '/images/hero-3.jpg',
        mainImg: '/images/marble-texture.png',
        whatIsIt: 'Marble is a metamorphic rock formed from limestone, known for its soft veining and high polish. It represents the pinnacle of luxury in architectural design, offering a unique natural aesthetic where no two pieces are ever identical.',
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
            { q: 'Can I use marble in the bathroom?', a: 'Yes, marble is a classic choice for bathrooms, provided it is treated with the correct finish and sealant.' },
            { q: 'How often should marble be re-polished?', a: 'Depending on use, marble usually needs professional re-polishing every 3-5 years to maintain its brilliant shine.' },
            { q: 'Is marble suitable for flooring in high-traffic areas?', a: 'While beautiful, marble is softer than granite. It can be used for flooring but may show wear (patina) over time if traffic is extremely high.' },
            { q: 'Can you match the veins across different slabs?', a: 'Yes, we specialize in "Book-matching" where slabs are polished on opposite sides to create mirror-image patterns when laid together.' }
        ]
    },
    'commercial-projects': {
        title: 'Commercial Projects',
        icon: <Building2 size={24} />,
        heroImg: '/images/hero-1.jpg',
        mainImg: '/images/service-living.png',
        whatIsIt: 'Commercial projects involve specialized stone and tile solutions tailored for high-traffic public spaces. These products prioritize industrial-grade durability, safety compliance, and consistent aesthetics across large-scale installations.',
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
            { q: 'Can you handle out-of-state projects?', a: 'We have the logistics capability to supply major commercial projects across Rajasthan and neighboring regions.' },
            { q: 'Are your commercial tiles slip-rated for public areas?', a: 'Yes, we provide the necessary technical certifications for slip resistance required for commercial occupancy.' },
            { q: 'Do you provide bulk discounts?', a: 'Absolutely, we offer special B2B pricing for large-scale developments, builder projects, and government tenders.' },
            { q: 'Can you help with estimation for large blueprints?', a: 'Yes, our team can assist in quantity estimation directly from your architectural floor plans to ensure minimal waste.' }
        ]
    },
    'vitrified-tiles': {
        title: 'Vitrified Tiles',
        icon: <HardHat size={24} />,
        heroImg: '/images/hero-2.jpg',
        mainImg: '/images/hero-showroom.png',
        whatIsIt: 'Vitrified tiles are a type of ceramic tile with very low porosity. They are created by a process called vitrification, which gives them qualities similar to glass, making them extremely strong, stain-resistant, and virtually waterproof.',
        description: 'The modern standard for high-performance flooring. Vitrified tiles offer a near-perfect surface that is incredibly strong and virtually maintenance-free.',
        details: 'Vitrification makes tiles extremely dense and low-porous. This results in a tile that is resistant to water, stains, and mechanical stress. Our digital vitrified tiles come in realistic marble, wood, and stone finishes.',
        keyPoints: [
            'Near-zero water absorption',
            'Highly resistant to stains and scratches',
            'Precision cut for thin grout lines',
            'Available in Full Body, Double Charged, and Glazed',
            'Consistent color and texture'
        ],
        faqs: [
            { q: 'What is Double Charge vitrified?', a: 'These tiles have a double layer of pigment, making them thicker and more durable for high-traffic areas.' },
            { q: 'Are they better than natural marble?', a: 'They offer better stain resistance and consistency, while marble offers a more unique, natural feel. It depends on your priority!' },
            { q: 'What is "Full Body" vitrified?', a: 'In these tiles, the color and pattern go all the way through the tile, so if they ever chip, the damage is virtually invisible.' },
            { q: 'Do vitrified tiles need sealing?', a: 'No, vitrified tiles are non-porous and do not require any sealing or special treatment once installed.' },
            { q: 'Can they be used on walls?', a: 'Yes, their lightweight yet strong nature makes them an excellent choice for large-format wall cladding for a seamless look.' }
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
                    <AnimateOnScroll variant="slideUp">
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
                    </AnimateOnScroll>
                </div>
            </section>

            {/* WHAT IS IT SECTION */}
            <section className="about-product-info section-padding" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <AnimateOnScroll variant="slideUp">
                        <div className="what-is-it-card">
                            <h2>What is <span className="gradient-text">{service.title}</span>?</h2>
                            <p>
                                {service.whatIsIt}
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            <section className="service-detail-content section-padding">
                <div className="container">
                    <div className="service-grid-layout">

                        {/* LEFT SIDE - Details & Key Points */}
                        <div className="service-main-col">
                            <AnimateOnScroll variant="slideRight">
                                <div className="detail-image-wrapper">
                                    <img src={service.mainImg} alt={service.title} />
                                </div>
                            </AnimateOnScroll>

                            <div className="detail-info">
                                <AnimateOnScroll variant="slideUp">
                                    <span className="section-label">Product Overview</span>
                                    <h2>Why Choose Our <span className="gradient-text">{service.title}</span>?</h2>
                                    <p style={{ marginBottom: '40px' }}>
                                        {service.details}
                                    </p>
                                </AnimateOnScroll>

                                <div className="key-points-grid">
                                    {service.keyPoints.map((point, i) => (
                                        <AnimateOnScroll key={i} delay={i * 0.1} variant="scaleUp">
                                            <div className="key-point-item">
                                                <div className="key-point-icon"><CheckCircle2 size={18} /></div>
                                                <p style={{ fontWeight: '600', color: 'var(--text-heading)', margin: 0 }}>{point}</p>
                                            </div>
                                        </AnimateOnScroll>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE - Contact & FAQs */}
                        <div className="service-sidebar">
                            <AnimateOnScroll variant="slideLeft" delay={0.2}>
                                {/* Contact Card */}
                                <div className="sidebar-contact-card">
                                    <h3>Inquiry Now</h3>
                                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '25px' }}>
                                        Get a custom quote or expert consultation for your project.
                                    </p>

                                    <div className="sidebar-contact-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        <div className="contact-method">
                                            <div className="contact-icon-box" style={{ background: 'rgba(8, 159, 157, 0.1)', color: 'var(--teal)' }}>
                                                <Phone size={20} />
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6, margin: 0 }}>Call Us</p>
                                                <a href="tel:+917877702774" style={{ fontWeight: '700', fontSize: '16px' }}>+91 7877702774</a>
                                            </div>
                                        </div>
                                        <div className="contact-method">
                                            <div className="contact-icon-box" style={{ background: 'rgba(37, 211, 102, 0.1)', color: '#25D366' }}>
                                                <MessageCircle size={20} />
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6, margin: 0 }}>WhatsApp</p>
                                                <a href="https://wa.me/917877702774" style={{ fontWeight: '700', fontSize: '16px' }}>Message Now</a>
                                            </div>
                                        </div>
                                        <div className="contact-method">
                                            <div className="contact-icon-box" style={{ background: 'rgba(132, 116, 161, 0.1)', color: 'var(--purple)' }}>
                                                <MapPin size={20} />
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6, margin: 0 }}>Location</p>
                                                <p style={{ fontWeight: '700', fontSize: '15px', margin: 0 }}>Mansarover, Jaipur</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '30px', justifyContent: 'center' }}>
                                        Contact Us <ChevronRight size={18} />
                                    </Link>
                                </div>

                                {/* FAQ Section */}
                                <div className="faq-sidebar">
                                    <h3 className="faq-sidebar-title">Common Questions</h3>
                                    <div className="sidebar-faq-list">
                                        {service.faqs.map((faq, i) => (
                                            <div key={i} className={`faq-item-small ${openFaq === i ? 'active' : ''}`}>
                                                <div
                                                    className="faq-header-small"
                                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                >
                                                    <h4>{faq.q}</h4>
                                                    <span className="faq-icon-small"><Plus size={18} /></span>
                                                </div>
                                                <div className="faq-answer-small">
                                                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                                                        {faq.a}
                                                    </p>
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

            {/* BACK LINK */}
            <div className="container" style={{ padding: '0 20px 60px', textAlign: 'center' }}>
                <AnimateOnScroll variant="scaleUp">
                    <Link to="/services" className="btn btn-primary discover-btn" style={{ display: 'inline-flex', margin: '0 auto' }}>
                        <span className="arrow-left">←</span> Back to all services
                    </Link>
                </AnimateOnScroll>
            </div>

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
        </div>
    );
}
