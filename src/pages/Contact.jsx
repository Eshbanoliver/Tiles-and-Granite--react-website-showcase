import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Clock, Send } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMsg = `Hello, I'm ${formData.name}.%0A%0ASubject: ${formData.subject}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0A%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/917877702774?text=${whatsappMsg}`, '_blank');
    };

    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{ backgroundImage: 'url("/contact-hero-new.png")' }}>
                <div className="page-header-container">
                    <AnimateOnScroll variant="slideUp">
                        <div className="page-header-breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <span>Contact Us</span>
                        </div>
                        <h1>
                            Contact <span className="gradient-text">Us</span>
                        </h1>
                        <p>
                            Get in touch with us. Visit our showroom or reach out via phone, WhatsApp, or the form below.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="contact-section">
                <div className="contact-grid">
                    {/* Left Column - Info */}
                    <div>
                        <AnimateOnScroll>
                            <div className="uiverse-card-container">
                                <div className="uiverse-card">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="card-inner">
                                        <div className="contact-info-card">
                                            <h3>Get In Touch</h3>

                                            <div className="contact-info-item">
                                                <div className="contact-info-icon">
                                                    <MapPin size={20} color="#089F9D" />
                                                </div>
                                                <div className="contact-info-text">
                                                    <h4>Visit Our Showroom</h4>
                                                    <p>
                                                        Plot No. B 9-10, Narayan Vihar B-Block, Near Utsav Garden,
                                                        Mansarover, Jaipur – 302026
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="contact-info-item">
                                                <div className="contact-info-icon">
                                                    <Phone size={20} color="#089F9D" />
                                                </div>
                                                <div className="contact-info-text">
                                                    <h4>Call Us</h4>
                                                    <p>
                                                        <a href="tel:+917877702774">+91 7877702774</a>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="contact-info-item">
                                                <div className="contact-info-icon">
                                                    <MessageCircle size={20} color="#089F9D" />
                                                </div>
                                                <div className="contact-info-text">
                                                    <h4>WhatsApp</h4>
                                                    <p>
                                                        <a
                                                            href="https://wa.me/917877702774?text=Hello%2C%20I%20am%20interested%20in%20your%20tiles%20and%20granite%20products."
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            +91 7877702774
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="contact-info-item">
                                                <div className="contact-info-icon">
                                                    <Clock size={20} color="#089F9D" />
                                                </div>
                                                <div className="contact-info-text">
                                                    <h4>Business Hours</h4>
                                                    <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
                                                    <p>Sunday: By Appointment</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Map */}
                        <AnimateOnScroll delay={0.2}>
                            <div className="contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7630300283577!2d75.75072507543833!3d26.87926897666709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5ff07e79d93%3A0x105862e45701e4dc!2sNeelmani%20Tiles%20%26%20Granite!5e0!3m2!1sen!2sin!4v1772270167950!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Neelmani Tiles & Granite Location"
                                ></iframe>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Right Column - Form */}
                    <div>
                        <AnimateOnScroll delay={0.1}>
                            <div className="uiverse-card-container">
                                <div className="uiverse-card">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="card-inner">
                                        <div className="contact-form-container">
                                            <h3>Send Us a Message</h3>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
                                                Fill in the form below and we'll get back to you via WhatsApp.
                                            </p>

                                            <form onSubmit={handleSubmit} id="contact-form">
                                                <div className="form-group">
                                                    <label htmlFor="name">Full Name *</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter your full name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group-row">
                                                    <div className="form-group">
                                                        <label htmlFor="phone">Phone Number *</label>
                                                        <input
                                                            type="tel"
                                                            id="phone"
                                                            name="phone"
                                                            placeholder="+91 XXXXX XXXXX"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email (Optional)</label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            placeholder="your@email.com"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="subject">Subject *</label>
                                                    <input
                                                        type="text"
                                                        id="subject"
                                                        name="subject"
                                                        placeholder="e.g. Need tiles for kitchen"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="message">Message *</label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        rows="5"
                                                        placeholder="Tell us about your requirements..."
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                    ></textarea>
                                                </div>

                                                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                                    <MessageCircle size={18} style={{ marginRight: '8px' }} /> Send via WhatsApp
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <AnimateOnScroll>
                    <div className="cta-inner">
                        <h2>
                            We'd Love to <span className="gradient-text">Hear From You</span>
                        </h2>
                        <p>
                            Whether you have a question about our products or need help choosing the right tiles, we're here for you.
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:+917877702774" className="btn btn-primary">
                                <Phone size={18} style={{ marginRight: '8px' }} /> Call Now
                            </a>
                            <a
                                href="https://wa.me/917877702774?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
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
