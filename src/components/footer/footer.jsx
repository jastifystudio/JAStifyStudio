import { useNavigate } from 'react-router-dom';
import './footer.css';
import logo from '../../assets/images/logo.png';

function Footer() {
    const navigate = useNavigate();

    return (
        <footer data-component="footer">
            <div className="footer-container">
                {/* Brand & About Column */}
                <div className="footer-col brand-col">
                    <div className="footer-logo-row">
                        {/* <img className="footer-logo" src={logo} alt="JAStify Studio Logo" /> */}
                        <span className="footer-app-name">
                            <span className="highlight-text" style={{marginRight:'1px'}}>JAS</span>tify Studio
                        </span>
                    </div>
                    <p className="footer-desc">
                        Empowering students and job seekers with modern, ATS-ready resume templates and creative design tools to fast-track their careers.
                    </p>
                    <div className="social-links">
                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="social-icon"
                        >
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.95 0-1.72.78-1.72 1.73s.77 1.72 1.72 1.72 1.73-.77 1.73-1.72-.78-1.73-1.73-1.73Z" />
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="social-icon"
                        >
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                            </svg>
                        </a>

                        {/* X (formerly Twitter) */}
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="X"
                            className="social-icon"
                        >
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="social-icon"
                        >
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className="footer-col">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/templates')}>Browse Templates</li>
                        <li onClick={() => navigate('/about')}>About Us</li>
                        <li onClick={() => navigate('/contact')}>Contact & Support</li>
                    </ul>
                </div>

                {/* Resources / Formats Column */}
                <div className="footer-col">
                    <h4 className="footer-heading">Features</h4>
                    <ul className="footer-links">
                        <li onClick={() => navigate('/templates')}>ATS Resume Builder</li>
                        <li onClick={() => navigate('/templates')}>Modern Portfolio Cards</li>
                        <li onClick={() => navigate('/templates')}>PDF Vector Export</li>
                        <li onClick={() => navigate('/templates')}>Live Visual Editor</li>
                    </ul>
                </div>

                {/* Newsletter & Contact Column */}
                <div className="footer-col newsletter-col">
                    <h4 className="footer-heading">Stay Updated</h4>
                    <p className="newsletter-desc">Get the latest career tips and newly released resume templates.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="newsletter-input"
                            required
                        />
                        <button type="submit" className="newsletter-btn">Subscribe</button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} JAStify Studio. All rights reserved.</p>
                <div className="bottom-links">
                    <span>Privacy Policy</span>
                    <span>•</span>
                    <span>Terms of Service</span>
                    <span>•</span>
                    <span>Help Center</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;