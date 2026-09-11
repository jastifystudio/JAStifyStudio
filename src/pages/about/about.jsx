import { useNavigate } from 'react-router-dom';
import './about.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function About() {
    const navigate = useNavigate();

    const stats = [
        { value: '100%', label: 'Free & Open Access' },
        { value: '8+', label: 'ATS-Friendly Templates' },
        { value: '0s', label: 'Export Latency' },
        { value: '95+', label: 'ATS Compatibility Score' },
    ];

    const values = [
        {
            icon: '🎯',
            title: 'Precision ATS Formatting',
            desc: 'Every resume layout is engineered with semantic tagging, clean visual hierarchy, and machine-readable structures so candidates get noticed by automated screening tools.'
        },
        {
            icon: '⚡',
            title: 'Real-Time Visual Customization',
            desc: 'Update skills, work achievements, and educational timelines on the fly with instantaneous visual feedback and zero template layout breakage.'
        },
        {
            icon: '🔒',
            title: 'Client-Side Privacy',
            desc: 'Your professional credentials and personal data remain strictly on your local device—no invasive tracking or data harvesting.'
        },
        {
            icon: '📄',
            title: 'Pixel-Perfect Vector Exports',
            desc: 'Generate crisp, recruiter-ready PDFs designed specifically for standard letter & A4 printing without distorted margins or degraded typography.'
        }
    ];

    return (
        <div data-component="about">
            <div className="main-cnt">
                <Header />

                {/* Hero Header */}
                <section className="about-hero">
                    <span className="hero-badge">About JAStify Studio</span>
                    <h1 className="hero-title">
                        Crafting Career Gateways Through <span className="highlight-text">Smart Design</span>
                    </h1>
                    <p className="hero-subtext">
                        JAStify Studio was built with a singular mission: to democratize career success by giving job seekers and students powerful, intuitive, and ATS-optimized resume building tools without hidden paywalls.
                    </p>
                </section>

                {/* Stats Bar */}
                <section className="stats-section">
                    <div className="stats-grid">
                        {stats.map((s, idx) => (
                            <div key={idx} className="stat-card">
                                <h3 className="stat-value">{s.value}</h3>
                                <p className="stat-label">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Core Mission Story */}
                <section className="story-section">
                    <div className="story-container">
                        <div className="story-content">
                            <span className="section-tag">Our Vision</span>
                            <h2>Bridging Academic Potential & Industry Hiring</h2>
                            <p>
                                Job searching shouldn't require battling complicated formatting tools or paying monthly subscriptions just to download your own resume. 
                            </p>
                            <p>
                                <strong>JAStify Studio</strong> unites clean front-end engineering with modern recruiter standards. From minimal layouts to asymmetric split grids and timeline infographics, each template is calibrated for readability, aesthetic poise, and ATS parsing algorithms.
                            </p>
                            <div className="story-actions">
                                <button className="btn-primary" onClick={() => navigate('/templates')}>
                                    Browse Templates &rarr;
                                </button>
                                <button className="btn-secondary" onClick={() => navigate('/contact')}>
                                    Get in Touch
                                </button>
                            </div>
                        </div>

                        <div className="story-card-graphic">
                            <div className="graphic-badge">
                                <span className="badge-dot"></span>
                                Modern Architecture
                            </div>
                            <h3>Built with React & Scoped Styles</h3>
                            <ul className="tech-pills">
                                <li>React Router</li>
                                <li>Client-Side PDF Generator</li>
                                <li>Dynamic DOM Parser</li>
                                <li>Responsive CSS-in-JS</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Core Pillars / Features */}
                <section className="values-section">
                    <div className="values-container">
                        <div className="section-header-center">
                            <span className="section-tag">What Drives Us</span>
                            <h2>Why Job Seekers Rely On JAStify</h2>
                        </div>
                        <div className="values-grid">
                            {values.map((v, i) => (
                                <div key={i} className="value-card">
                                    <div className="value-icon">{v.icon}</div>
                                    <h3 className="value-title">{v.title}</h3>
                                    <p className="value-desc">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}

export default About;