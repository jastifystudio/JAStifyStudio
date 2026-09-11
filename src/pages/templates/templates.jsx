import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './templates.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { templates } from '../../constants/template'; // adjust path to template.js

function injectPreviewContent(htmlString) {
    if (!htmlString) return '';

    return htmlString
        // Inject name if empty
        .replace(/<h1 class="res-name"><\/h1>/g, '<h1 class="res-name">Jonathan Davis</h1>')
        .replace(/<div class="res-contact"><\/div>/g, '<div class="res-contact">San Francisco, CA &bull; (555) 019-2834 &bull; jonathan@example.com</div>')
        // Inject summary if empty
        .replace(
            /<p class="res-summary"><\/p>/g,
            '<p class="res-summary">Results-driven Software Engineer with 4+ years of experience designing scalable applications, optimizing database performance, and writing clean, maintainable code.</p>'
        )
        // Inject education if empty
        .replace(
            /<div class="([^"]*res-education[^"]*)">\s*<\/div>/g,
            `<div class="$1">
                <div>
                    <div class="item-title"><strong>B.S. in Computer Science</strong></div>
                    <div class="item-subtitle">University of California, Berkeley &bull; 2019 - 2023</div>
                </div>
            </div>`
        )
        // Inject skills if empty (works for both progress bars and dot ratings)
        .replace(
            /<div class="([^"]*res-skills[^"]*)">\s*<\/div>/g,
            `<div class="$1">
                <div class="skill-item">
                    <span class="skill-label skill-name">JavaScript & React</span>
                    <div class="progress-bar"><div class="progress-fill" style="width: 90%;"></div></div>
                    <div class="dot-rating"><span class="dot filled"></span><span class="dot filled"></span><span class="dot filled"></span><span class="dot filled"></span><span class="dot"></span></div>
                </div>
                <div class="skill-item">
                    <span class="skill-label skill-name">Python & SQL</span>
                    <div class="progress-bar"><div class="progress-fill" style="width: 85%;"></div></div>
                    <div class="dot-rating"><span class="dot filled"></span><span class="dot filled"></span><span class="dot filled"></span><span class="dot filled"></span><span class="dot filled"></span></div>
                </div>
            </div>`
        )
        // Inject work history if empty
        .replace(
            /<div class="([^"]*res-experience[^"]*)">\s*<\/div>/g,
            `<div class="$1">
                <div>
                    <div class="item-title"><strong>Software Engineer</strong> &bull; TechCorp Inc.</div>
                    <div class="item-subtitle">2023 - Present &bull; San Francisco, CA</div>
                    <ul class="bullet-list">
                        <li>Architected scalable REST APIs reducing system latency by 28%.</li>
                        <li>Collaborated with product teams to roll out modern customer portals.</li>
                    </ul>
                </div>
            </div>`
        )
        // Inject accomplishments if empty
        .replace(
            /<ul class="([^"]*res-accomplishments[^"]*)">\s*<\/ul>/g,
            `<ul class="$1">
                <li>Awarded Employee of the Quarter for optimizing query performance by 40%.</li>
                <li>Completed Certified Solutions Architect certification.</li>
            </ul>`
        );
}

function Templates() {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filters = [
        { id: 'all', label: 'All Templates' },
        { id: 'minimal', label: 'Minimalist' },
        { id: 'modern', label: 'Modern & Creative' },
        { id: 'corporate', label: 'Corporate & Classic' },
    ];

    // Filter logic based on tag or query
    const filteredTemplates = templates.filter((tpl) => {
        const matchesQuery = tpl.name.toLowerCase().includes(searchQuery.toLowerCase());
        if (activeFilter === 'all') return matchesQuery;
        if (activeFilter === 'minimal') return matchesQuery && (tpl.name.toLowerCase().includes('minimal') || tpl.name.toLowerCase().includes('sand'));
        if (activeFilter === 'modern') return matchesQuery && (tpl.name.toLowerCase().includes('timeline') || tpl.name.toLowerCase().includes('devops') || tpl.name.toLowerCase().includes('split'));
        if (activeFilter === 'corporate') return matchesQuery && (tpl.name.toLowerCase().includes('blue') || tpl.name.toLowerCase().includes('terracotta') || tpl.name.toLowerCase().includes('block'));
        return matchesQuery;
    });

    const handleSelectTemplate = (templateId) => {
        // Navigates to your resume builder with the selected template ID
        navigate(`/resumeStudio?template=${templateId}`);
    };

    return (
        <div data-component="template">
            <div className="main-cnt">
                <Header />

                {/* Hero Banner for Templates Catalog */}
                <section className="templates-hero">
                    <span className="hero-badge">Professional & ATS-Ready</span>
                    <h1 className="hero-heading">
                        Find the Perfect Template for Your <span className="highlight-text">Dream Job</span>
                    </h1>
                    <p className="hero-subtext">
                        Handcrafted, recruiter-approved designs that elevate your experience and pass applicant tracking systems seamlessly.
                    </p>

                    {/* Search & Filter Controls */}
                    <div className="templates-controls">
                        <div className="search-bar-wrap">
                            <svg className="search-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M10 2a8 8 0 0 1 6.32 12.9l4.39 4.38a1 1 0 0 1-1.42 1.42l-4.38-4.39A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search by template style or name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>

                        <div className="filter-tabs">
                            {filters.map((f) => (
                                <button
                                    key={f.id}
                                    className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(f.id)}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Templates Display Grid */}
                <section className="templates-grid-section">
                    <div className="templates-grid">
                        {filteredTemplates.map((template) => (
                            <div key={template.id} className="template-card">
                                {/* Template Mini Canvas Preview */}
                                <div className="card-preview-window">
                                    <style>{template.style}</style>
                                    <div
                                        className="preview-scaler"
                                        dangerouslySetInnerHTML={{ __html: injectPreviewContent(template.html) }}
                                    />
                                    <div className="preview-overlay">
                                        <button
                                            className="use-template-btn"
                                            onClick={() => handleSelectTemplate(template.id)}
                                        >
                                            Use This Template
                                        </button>
                                    </div>
                                </div>

                                {/* Template Meta Footer */}
                                <div className="card-info">
                                    <div className="card-title-row">
                                        <h3 className="card-title">{template.name}</h3>
                                        <span className="card-badge">ATS Score 95+</span>
                                    </div>
                                    <p className="card-desc">
                                        Tailored for professional and technical applications with structured modular sections.
                                    </p>
                                    <div className="card-action-row">
                                        <span className="template-id-label"></span>
                                        <button
                                            className="card-select-link"
                                            onClick={() => handleSelectTemplate(template.id)}
                                        >
                                            Start Editing &rarr;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredTemplates.length === 0 && (
                        <div className="no-results">
                            <h3>No templates found matching "{searchQuery}"</h3>
                            <p>Try clearing your search query or selecting "All Templates".</p>
                            <button className="clear-filter-btn" onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}>
                                Reset Filters
                            </button>
                        </div>
                    )}
                </section>

                <Footer />
            </div>
        </div>
    );
}

export default Templates;