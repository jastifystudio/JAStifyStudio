import { useState } from 'react';
import './contact.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;
        
        // Simulates message sending
        setIsSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitted(false);
        }, 4000);
    };

    const contactMethods = [
        {
            icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            ),
            title: 'Email Us',
            detail: 'justifystudio15@gmail.com',
            sub: 'Responses typically within 24 hours'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
            ),
            title: 'Our Base',
            detail: 'Abohar, Punjab, India',
            sub: 'Serving students & creators worldwide'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
            ),
            title: 'Support Hours',
            detail: 'Mon – Sat: 9:00 AM – 7:00 PM',
            sub: 'Standard Indian Time (IST)'
        }
    ];

    return (
        <div data-component="contactus">
            <div className="main-cnt">
                <Header />

                {/* Hero Header */}
                <section className="contact-hero">
                    <span className="hero-badge">Get in Touch</span>
                    <h1 className="hero-title">
                        We'd Love to Hear From <span className="highlight-text">You</span>
                    </h1>
                    <p className="hero-subtext">
                        Have a question regarding ATS templates, encountered an issue, or want to suggest a new resume layout? Send us a message and our team will get right back to you.
                    </p>
                </section>

                {/* Contact Cards Bar */}
                <section className="methods-section">
                    <div className="methods-grid">
                        {contactMethods.map((method, idx) => (
                            <div key={idx} className="method-card">
                                <div className="method-icon">{method.icon}</div>
                                <h3 className="method-title">{method.title}</h3>
                                <p className="method-detail">{method.detail}</p>
                                <span className="method-sub">{method.sub}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Form & FAQs Main Section */}
                <section className="form-section">
                    <div className="form-container">
                        {/* Left Side: Direct Contact Form */}
                        <div className="contact-form-card">
                            <h2 className="card-heading">Send Us a Message</h2>
                            <p className="card-subheading">Fill out this quick form and we'll reply to your email address.</p>

                            {isSubmitted ? (
                                <div className="success-banner">
                                    <div className="success-icon">✓</div>
                                    <h4>Thank you for reaching out!</h4>
                                    <p>Your message has been received. We'll be in touch shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row-2">
                                        <div className="form-group">
                                            <label htmlFor="name">Your Name *</label>
                                            <input 
                                                type="text" 
                                                id="name"
                                                name="name" 
                                                placeholder="e.g. John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input 
                                                type="email" 
                                                id="email"
                                                name="email" 
                                                placeholder="e.g. john@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input 
                                            type="text" 
                                            id="subject"
                                            name="subject" 
                                            placeholder="e.g. Template suggestion or bug report"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea 
                                            id="message"
                                            name="message" 
                                            rows={5}
                                            placeholder="How can we help you?"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>

                                    <button type="submit" className="submit-btn">
                                        Send Message &rarr;
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Right Side: Quick FAQs */}
                        <div className="faq-pane">
                            <h2 className="card-heading">Frequently Asked Questions</h2>
                            <div className="faq-list">
                                <div className="faq-item">
                                    <h4 className="faq-question">Are the templates really 100% free to export?</h4>
                                    <p className="faq-answer">Yes, absolutely. You can customize, preview, and download your high-resolution vector PDF resume without paying or creating an account.</p>
                                </div>
                                <div className="faq-item">
                                    <h4 className="faq-question">How do I know my resume will pass ATS screening?</h4>
                                    <p className="faq-answer">All JAStify templates are designed using standardized section headers, clean text hierarchy, and machine-readable structures verified for automated screening tools.</p>
                                </div>
                                <div className="faq-item">
                                    <h4 className="faq-question">Is my private data saved on your servers?</h4>
                                    <p className="faq-answer">No. All formatting, real-time live preview rendering, and PDF conversions happen locally on your device browser for full privacy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}

export default Contact;