import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Clock, Copyright } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer" id="site-footer">
            <div className="footer-grid">
                <div className="footer-brand">
                    <h3>
                        Neelmani <span className="gradient-text">Tiles & Granite</span>
                    </h3>
                    <p>
                        Your trusted destination for premium quality tiles, marble, and granite in Jaipur.
                        Transforming spaces with elegance and excellence since years.
                    </p>
                    <div className="footer-social">
                        <a href="#" aria-label="Facebook" title="Facebook">
                            <Facebook size={18} />
                        </a>
                        <a href="#" aria-label="Instagram" title="Instagram">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Our Services</h4>
                    <ul>
                        <li><Link to="/services">Floor Tiles</Link></li>
                        <li><Link to="/services">Wall Tiles</Link></li>
                        <li><Link to="/services">Granite Slabs</Link></li>
                        <li><Link to="/services">Marble Flooring</Link></li>
                        <li><Link to="/services">Kitchen Countertops</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Info</h4>
                    <div className="footer-contact-item">
                        <span className="footer-contact-icon">
                            <MapPin size={16} color="#089F9D" />
                        </span>
                        <span>Plot No. B 9-10, Narayan Vihar B-Block, Near Utsav Garden, Mansarover, Jaipur – 302026</span>
                    </div>
                    <div className="footer-contact-item">
                        <span className="footer-contact-icon">
                            <Phone size={16} color="#089F9D" />
                        </span>
                        <span><a href="tel:+917877702774" style={{ color: '#6EC6CA' }}>+91 7877702774</a></span>
                    </div>
                    <div className="footer-contact-item">
                        <span className="footer-contact-icon">
                            <Clock size={16} color="#089F9D" />
                        </span>
                        <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    <Copyright size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                    Copyright 2026 | - Neelmani Tiles and Granite | All Rights Reserved | Powered by{' '}
                    <a href="https://shapesway.in" target="_blank" rel="noopener" style={{ color: '#28a745' }}>
                        Shapesway Technologies Pvt. Ltd.
                    </a>
                </p>
            </div>
        </footer>
    );
}
