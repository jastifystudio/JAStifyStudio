import './resumeStudio.css';
import { templates } from '../../constants/template';
import Header from '../../components/header/header';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

export default function ResumeStudio() {
    const location = useLocation();
    
    // Auto-detect template passed in URL query param: /resumeStudio?template=template2
    const queryParams = new URLSearchParams(location.search);
    const initialTemplate = queryParams.get('template') || 'template1';

    const [activeTemplateId, setActiveTemplateId] = useState(initialTemplate);
    const [fullName, setFullName] = useState('Emma Chen');
    const [contactInfo, setContactInfo] = useState('Chicago, IL 60603 • (555) 555-5555 • emma@example.com');
    const [summary, setSummary] = useState('Dynamic professional dedicated to driving organizational growth, engineering scalable solutions, and streamlining cross-functional workflows.');

    const [education, setEducation] = useState([
        { id: 'edu_1', title: 'Master of Business Administration', school: 'University of California, Berkeley', date: '06/2023' },
    ]);

    const [skills, setSkills] = useState([
        { id: 'skill_1', name: 'Strategic Planning', score: 5 },
        { id: 'skill_2', name: 'Python & JavaScript', score: 5 },
        { id: 'skill_3', name: 'Project Management', score: 4 },
    ]);

    const [experience, setExperience] = useState([
        {
            id: 'exp_1',
            title: 'District Manager, 08/2024 to Present',
            company: 'Retail Nexus Group - Chicago, IL',
            bullets: 'Increased regional sales revenue by 22% across multi-unit operations.\nLed and mentored an agile team of 15 members to streamline product deliveries.'
        }
    ]);

    const [accomplishments, setAccomplishments] = useState([
        { id: 'acc_1', text: 'Awarded Top Performer of the Year 2024.' },
        { id: 'acc_2', text: 'Spearheaded operational cost reduction initiative saving $25,000 annually.' }
    ]);

    // Keep active template synced if user changes route query
    useEffect(() => {
        const tplParam = queryParams.get('template');
        if (tplParam && templates.some(t => t.id === tplParam)) {
            setActiveTemplateId(tplParam);
        }
    }, [location.search]);

    const downloadPDF = () => {
        const element = document.getElementById('resume-capture-canvas');
        if (!element) return;

        const options = {
            margin: 0,
            filename: `${fullName.trim().replace(/\s+/g, '_')}_Resume.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                useCORS: true,
                letterRendering: true
            },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(options).from(element).save();
    };

    const addEducation = () => {
        setEducation([...education, { id: 'edu_' + Date.now(), title: '', school: '', date: '' }]);
    };
    const updateEducation = (id, field, val) => {
        setEducation(education.map(i => i.id === id ? { ...i, [field]: val } : i));
    };

    const addSkill = () => {
        setSkills([...skills, { id: 'skill_' + Date.now(), name: '', score: 5 }]);
    };
    const updateSkill = (id, field, val) => {
        setSkills(skills.map(i => i.id === id ? { ...i, [field]: val } : i));
    };

    const addExperience = () => {
        setExperience([...experience, { id: 'exp_' + Date.now(), title: '', company: '', bullets: '' }]);
    };
    const updateExperience = (id, field, val) => {
        setExperience(experience.map(i => i.id === id ? { ...i, [field]: val } : i));
    };

    const addAccomplishment = () => {
        setAccomplishments([...accomplishments, { id: 'acc_' + Date.now(), text: '' }]);
    };
    const updateAccomplishment = (id, val) => {
        setAccomplishments(accomplishments.map(i => i.id === id ? { ...i, text: val } : i));
    };

    const removeItem = (id, type) => {
        if (type === 'edu') setEducation(education.filter(i => i.id !== id));
        if (type === 'skill') setSkills(skills.filter(i => i.id !== id));
        if (type === 'exp') setExperience(experience.filter(i => i.id !== id));
        if (type === 'acc') setAccomplishments(accomplishments.filter(i => i.id !== id));
    };

    const activeTemplate = templates.find(t => t.id === activeTemplateId) || templates[0];

    const getCompiledHTML = () => {
        if (!activeTemplate) return "";
        let rawHTML = activeTemplate.html;
        let rawCSS = activeTemplate.style;

        // 1. Education
        let eduHTML = "";
        education.forEach(edu => {
            if (activeTemplateId === 'template3' || activeTemplateId === 'template6') {
                eduHTML += `
                <div class="timeline-row-item split-timeline-item">
                    <div class="item-date-left item-date-pane">${edu.date || ''}</div>
                    <div class="item-node-dot"></div>
                    <div class="item-content-details item-details-pane">
                        <div class="item-title"><strong>${edu.title || ''}</strong></div>
                        <div class="item-subtitle">${edu.school || ''}</div>
                    </div>
                </div>`;
            } else {
                eduHTML += `
                <div class="item edu-item" style="margin-bottom:12px;">
                    <div class="item-title"><strong>${edu.title || ''}</strong> ${edu.date ? `(${edu.date})` : ''}</div>
                    <div class="item-subtitle">${edu.school || ''}</div>
                </div>`;
            }
        });

        // 2. Skills
        let skillsHTML = "";
        skills.forEach(item => {
            const percentage = Math.round((item.score / 6) * 100);
            if (activeTemplateId === 'template5' || activeTemplateId === 'template7') {
                skillsHTML += `<span class="skill-pill-badge outline-skill-box">${item.name}</span>`;
            } else if (activeTemplateId === 'template1' || activeTemplateId === 'template4') {
                skillsHTML += `
                <div class="skill-item skill-progress-item">
                    <div class="skill-label skill-name">${item.name}</div>
                    <div class="progress-bar bar-track"><div class="progress-fill bar-fill" style="width: ${percentage}%; height:100%;"></div></div>
                </div>`;
            } else {
                let dots = "";
                for (let i = 1; i <= 6; i++) {
                    dots += `<span class="bullet ${i <= item.score ? 'filled' : ''}" style="display:inline-block; width:9px; height:9px; border-radius:50%; background-color:${i <= item.score ? '#6a4c93' : '#e2e1e6'}; margin-right:4px;"></span>`;
                }
                skillsHTML += `
                <div class="skill-item skill-item-dotbox skill-dot-row">
                    <div class="skill-name skill-label">${item.name}</div>
                    <div class="dot-rating dot-track">${dots}</div>
                </div>`;
            }
        });

        // 3. Work History
        let expHTML = "";
        experience.forEach(exp => {
            const lines = exp.bullets.split('\n').filter(l => l.trim() !== '');
            const bulletsHTML = lines.map(l => `<li>${l}</li>`).join('');

            if (activeTemplateId === 'template3' || activeTemplateId === 'template6') {
                expHTML += `
                <div class="timeline-row-item split-timeline-item" style="margin-bottom: 20px;">
                    <div class="item-date-left item-date-pane">Experience</div>
                    <div class="item-node-dot"></div>
                    <div class="item-content-details item-details-pane">
                        <div class="item-title"><strong>${exp.title}</strong></div>
                        <div class="item-subtitle item-company">${exp.company}</div>
                        <ul class="bullet-list bullet-list-content">${bulletsHTML}</ul>
                    </div>
                </div>`;
            } else {
                expHTML += `
                <div class="job-item job-entry-item" style="margin-bottom: 20px;">
                    <div class="item-title job-meta-header"><strong>${exp.title}</strong></div>
                    <div class="item-subtitle item-company">${exp.company}</div>
                    <ul class="bullet-list">${bulletsHTML}</ul>
                </div>`;
            }
        });

        // 4. Accomplishments
        let accHTML = "";
        accomplishments.forEach(acc => {
            if (acc.text.trim() !== "") {
                accHTML += `<li>${acc.text}</li>`;
            }
        });

        const parser = new DOMParser();
        const doc = parser.parseFromString(rawHTML, 'text/html');

        const nameEl = doc.querySelector('.res-name');
        const contactEl = doc.querySelector('.res-contact');
        const summaryEl = doc.querySelector('.res-summary');
        const initialsEl = doc.querySelector('.res-initials');
        const eduEl = doc.querySelector('.res-education');
        const skillsEl = doc.querySelector('.res-skills');
        const experienceEl = doc.querySelector('.res-experience');
        const accomplishmentsEl = doc.querySelector('.res-accomplishments');

        if (nameEl) nameEl.textContent = fullName;
        if (contactEl) contactEl.textContent = contactInfo;
        if (summaryEl) summaryEl.textContent = summary;
        if (eduEl) eduEl.innerHTML = eduHTML;
        if (skillsEl) skillsEl.innerHTML = skillsHTML;
        if (experienceEl) experienceEl.innerHTML = expHTML;
        if (accomplishmentsEl) accomplishmentsEl.innerHTML = accHTML;

        if (initialsEl && fullName.trim()) {
            const initials = fullName.trim().split(" ").filter(Boolean).map(n => n[0]).slice(0, 2).join("/");
            initialsEl.textContent = initials.toUpperCase();
        }

        return `
            <style>${rawCSS}</style>
            ${doc.body.innerHTML}
        `;
    };

    return (
        <div className="resume-studio-root">
            <Header />
            
            <div className="main-inner-cnt">
                {/* Left Controls & Form Editor Sidebar */}
                <aside className="workspace-sidebar">
                    <div className="sidebar-header-card">
                        <label className="section-title-tag">Selected Template</label>
                        <select 
                            className="template-dropdown"
                            value={activeTemplateId} 
                            onChange={(e) => setActiveTemplateId(e.target.value)}
                        >
                            {templates.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                        </select>

                        <button className="btn-download" onClick={downloadPDF}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                            </svg>
                            Export to PDF
                        </button>
                    </div>

                    <h2>Personal Identity</h2>
                    <div className="control-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="e.g. Emma Chen" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="control-group">
                        <label>Contact Info Bar</label>
                        <input type="text" placeholder="Location • Phone • Email" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
                    </div>
                    <div className="control-group">
                        <label>Objective Statement</label>
                        <textarea rows={3} placeholder="Write a brief professional overview..." value={summary} onChange={(e) => setSummary(e.target.value)} />
                    </div>

                    <h2>
                        Education 
                        <button className="btn-add" onClick={addEducation}>+ Add</button>
                    </h2>
                    {education.map(item => (
                        <div key={item.id} className="interactive-card">
                            <button className="btn-delete" onClick={() => removeItem(item.id, 'edu')}>×</button>
                            <div className="control-group">
                                <label>Degree / Qualification</label>
                                <input type="text" placeholder="e.g. B.S. in Computer Science" value={item.title} onChange={(e) => updateEducation(item.id, 'title', e.target.value)} />
                            </div>
                            <div className="card-row-grid">
                                <div className="control-group">
                                    <label>Institution</label>
                                    <input type="text" placeholder="e.g. UC Berkeley" value={item.school} onChange={(e) => updateEducation(item.id, 'school', e.target.value)} />
                                </div>
                                <div className="control-group">
                                    <label>Year / Duration</label>
                                    <input type="text" placeholder="e.g. 2019 - 2023" value={item.date} onChange={(e) => updateEducation(item.id, 'date', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    ))}

                    <h2>
                        Skills Matrix 
                        <button className="btn-add" onClick={addSkill}>+ Add</button>
                    </h2>
                    {skills.map(item => (
                        <div key={item.id} className="interactive-card">
                            <button className="btn-delete" onClick={() => removeItem(item.id, 'skill')}>×</button>
                            <div className="control-group">
                                <label>Skill Name</label>
                                <input type="text" placeholder="e.g. React & TypeScript" value={item.name} onChange={(e) => updateSkill(item.id, 'name', e.target.value)} />
                            </div>
                            <label className="sub-label">Proficiency Level</label>
                            <div className="star-rating-container">
                                {[1, 2, 3, 4, 5, 6].map(num => (
                                    <span 
                                        key={num} 
                                        className={`rating-star-btn ${num <= item.score ? 'active' : ''}`} 
                                        onClick={() => updateSkill(item.id, 'score', num)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    <h2>
                        Work History 
                        <button className="btn-add" onClick={addExperience}>+ Add</button>
                    </h2>
                    {experience.map(item => (
                        <div key={item.id} className="interactive-card">
                            <button className="btn-delete" onClick={() => removeItem(item.id, 'exp')}>×</button>
                            <div className="control-group">
                                <label>Job Title & Dates</label>
                                <input type="text" placeholder="e.g. Lead Developer, 2022 - Present" value={item.title} onChange={(e) => updateExperience(item.id, 'title', e.target.value)} />
                            </div>
                            <div className="control-group">
                                <label>Company & Location</label>
                                <input type="text" placeholder="e.g. Acme Labs - New York, NY" value={item.company} onChange={(e) => updateExperience(item.id, 'company', e.target.value)} />
                            </div>
                            <div className="control-group">
                                <label>Accomplishments (one per line)</label>
                                <textarea rows={3} placeholder="Enter bullet points on separate lines..." value={item.bullets} onChange={(e) => updateExperience(item.id, 'bullets', e.target.value)} />
                            </div>
                        </div>
                    ))}

                    <h2>
                        Key Accomplishments 
                        <button className="btn-add" onClick={addAccomplishment}>+ Add</button>
                    </h2>
                    {accomplishments.map(item => (
                        <div key={item.id} className="interactive-card">
                            <button className="btn-delete" onClick={() => removeItem(item.id, 'acc')}>×</button>
                            <div className="control-group" style={{ marginBottom: 0 }}>
                                <input type="text" placeholder="e.g. Published research paper or patent..." value={item.text} onChange={(e) => updateAccomplishment(item.id, e.target.value)} />
                            </div>
                        </div>
                    ))}
                </aside>

                {/* Right Live Canvas Preview Section */}
                <main className="workspace-preview">
                    <div
                        id="resume-capture-canvas"
                        className="resume-shadow-box"
                        dangerouslySetInnerHTML={{ __html: getCompiledHTML() }}
                    />
                </main>
            </div>
        </div>
    );
}