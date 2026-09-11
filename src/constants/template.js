export const templates = [
    {
        categoryId: "category1",
        id: 'template1',
        name: 'Elegant Blue Accent',
        html: `<div class="tmpl-elegant-blue pdf-page-canvas">
            <div class="logo-container">
                <div class="hexagon-logo">
                    <span class="res-initials">E/C</span>
                </div>
            </div>

            <div class="header-section">
                <h1 class="res-name"></h1>
                <div class="double-line"></div>
                <div class="res-contact"></div>
            </div>

            <div class="content-group">
                <h2>Resume Objective</h2>
                <p class="res-summary"></p>
            </div>

            <div class="content-group">
                <h2>Education</h2>
                <div class="res-education list-block">
                    </div>
            </div>

            <div class="content-group">
                <h2>Skills</h2>
                <div class="res-skills skills-grid">
                    </div>
            </div>

            <div class="content-group">
                <h2>Work History</h2>
                <div class="res-experience list-block">
                    </div>
            </div>
        </div>`,
        style: `.tmpl-elegant-blue {
                    font-family: Arial, Helvetica, sans-serif;
                    color: #333333;
                    padding: 50px 45px;
                    max-width: 800px;
                    margin: auto;
                    background: #ffffff;
                    box-sizing: border-box;
                }

                /* Hexagon Emblem Design */
                .tmpl-elegant-blue .logo-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 20px;
                }
                .tmpl-elegant-blue .hexagon-logo {
                    width: 60px;
                    height: 35px;
                    background-color: #0b2c74;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .tmpl-elegant-blue .hexagon-logo::before,
                .tmpl-elegant-blue .hexagon-logo::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    width: 0;
                    height: 0;
                    border-left: 30px solid transparent;
                    border-right: 30px solid transparent;
                }
                .tmpl-elegant-blue .hexagon-logo::before {
                    top: -17px;
                    border-bottom: 17px solid #0b2c74;
                }
                .tmpl-elegant-blue .hexagon-logo::after {
                    bottom: -17px;
                    border-top: 17px solid #0b2c74;
                }
                .tmpl-elegant-blue .hexagon-logo span {
                    color: #ffffff;
                    font-family: 'Georgia', serif;
                    font-style: italic;
                    font-size: 16px;
                    z-index: 2;
                    letter-spacing: 1px;
                }

                /* Header Elements */
                .tmpl-elegant-blue .header-section {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .tmpl-elegant-blue .res-name {
                    color: #0b2c74;
                    font-size: 28px;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin: 0 0 15px 0;
                }
                .tmpl-elegant-blue .double-line {
                    border-top: 3px double #0b2c74;
                    margin: 10px 0;
                    width: 100%;
                }
                .tmpl-elegant-blue .res-contact {
                    font-size: 13.5px;
                    color: #444444;
                    margin-top: 12px;
                }

                /* Structural Layout Sections */
                .tmpl-elegant-blue .content-group {
                    margin-bottom: 25px;
                    text-align: left;
                }
                .tmpl-elegant-blue h2 {
                    color: #0b2c74;
                    font-size: 18px;
                    font-weight: bold;
                    margin: 0 0 12px 0;
                }
                .tmpl-elegant-blue p {
                    font-size: 14.5px;
                    line-height: 1.5;
                    color: #222222;
                    margin: 0;
                }

                /* Lists Block Setup */
                .tmpl-elegant-blue .list-block .item-title {
                    font-size: 14.5px;
                    color: #111111;
                }
                .tmpl-elegant-blue .list-block .item-subtitle {
                    font-size: 14px;
                    color: #222222;
                    margin-top: 3px;
                }
                .tmpl-elegant-blue .bullet-list {
                    margin: 6px 0 0 0;
                    padding-left: 20px;
                }
                .tmpl-elegant-blue .bullet-list li {
                    font-size: 14px;
                    line-height: 1.5;
                    color: #222222;
                    margin-bottom: 4px;
                }

                /* Skills Grid with Progress Visuals */
                .tmpl-elegant-blue .skills-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px 40px;
                }
                .tmpl-elegant-blue .skill-item {
                    display: flex;
                    flex-direction: column;
                }
                .tmpl-elegant-blue .skill-label {
                    font-size: 14.5px;
                    color: #222222;
                    margin-bottom: 6px;
                }
                .tmpl-elegant-blue .progress-bar {
                    width: 100%;
                    height: 4px;
                    background-color: #e0e0e0;
                    border-radius: 2px;
                    overflow: hidden;
                }
                .tmpl-elegant-blue .progress-fill {
                    height: 100%;
                    background-color: #0b2c74;
                }`
    },
    {
        categoryId: "category1",
        id: 'template2', // Fixed duplicate ID bug from 'template1'
        name: 'Warm Sand Minimalist',
        html: `<div class="tmpl-warm-sand pdf-page-canvas">
            <div class="top-banner">
                <div class="res-contact"></div>
            </div>

            <div class="identity-row">
                <h1 class="res-name"></h1>
                <div class="photo-placeholder">
                    <div class="profile-img"></div>
                </div>
            </div>

            <div class="section-row">
                <div class="section-label">Resume Objective</div>
                <div class="section-content">
                    <p class="res-summary"></p>
                </div>
            </div>

            <div class="section-row">
                <div class="section-label">Education</div>
                <div class="section-content res-education list-block">
                     </div>
            </div>

            <div class="section-row">
                <div class="section-label">Skills</div>
                <div class="section-content res-skills skills-grid">
                     </div>
            </div>

            <div class="section-row">
                <div class="section-label">Work History</div>
                <div class="section-content res-experience list-block">
                     </div>
            </div>

            <div class="section-row">
                <div class="section-label">Accomplishments</div>
                <div class="section-content">
                    <ul class="bullet-list res-accomplishments">
                         </ul>
                </div>
            </div>
        </div>`,
        style: `.tmpl-warm-sand {
                    font-family: Arial, Helvetica, sans-serif;
                    color: #333333;
                    background-color: #ffffff;
                    max-width: 800px;
                    margin: auto;
                    box-sizing: border-box;
                    padding-bottom: 40px;
                }
                
                /* Banner Accent top row */
                .tmpl-warm-sand .top-banner {
                    background-color: #f4ece1;
                    padding: 15px 40px;
                    text-align: center;
                }
                .tmpl-warm-sand .res-contact {
                    font-size: 13.5px;
                    color: #555555;
                    word-spacing: 1px;
                }

                /* Identity Frame Layout */
                .tmpl-warm-sand .identity-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 30px 40px;
                    margin-bottom: 10px;
                }
                .tmpl-warm-sand .res-name {
                    font-size: 32px;
                    font-weight: normal;
                    color: #111111;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .tmpl-warm-sand .photo-placeholder {
                    width: 100px;
                    height: 100px;
                    background-color: #e5e5e5;
                    overflow: hidden;
                }
                .tmpl-warm-sand .profile-img {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                }

                /* Asymmetric Two-Column Rows */
                .tmpl-warm-sand .section-row {
                    display: grid;
                    grid-template-columns: 200px 1fr;
                    padding: 20px 40px;
                    border-top: 1px solid #decbb4;
                    text-align: left;
                }
                .tmpl-warm-sand .section-label {
                    font-size: 13.5px;
                    font-weight: bold;
                    text-transform: uppercase;
                    color: #000000;
                    letter-spacing: 0.5px;
                    padding-top: 2px;
                }
                .tmpl-warm-sand .section-content {
                    font-size: 14px;
                    line-height: 1.5;
                    color: #333333;
                }

                /* Internal List Blocks */
                .tmpl-warm-sand .list-block > div {
                    margin-bottom: 18px;
                }
                .tmpl-warm-sand .list-block > div:last-child {
                    margin-bottom: 0;
                }
                .tmpl-warm-sand .item-title {
                    font-size: 14px;
                    color: #111111;
                }
                .tmpl-warm-sand .item-subtitle, 
                .tmpl-warm-sand .item-company {
                    font-size: 13.5px;
                    color: #555555;
                    margin-top: 3px;
                }
                .tmpl-warm-sand .bullet-list {
                    margin: 6px 0 0 0;
                    padding-left: 18px;
                }
                .tmpl-warm-sand .bullet-list li {
                    margin-bottom: 4px;
                    font-size: 13.5px;
                }

                /* Custom Skills Dot Grid Matrix */
                .tmpl-warm-sand .skills-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px 30px;
                }
                .tmpl-warm-sand .skill-item {
                    display: flex;
                    flex-direction: column;
                }
                .tmpl-warm-sand .skill-name {
                    margin-bottom: 5px;
                    font-size: 13.5px;
                }
                .tmpl-warm-sand .dot-rating {
                    display: flex;
                    gap: 4px;
                }
                .tmpl-warm-sand .dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: #e0e0e0;
                    display: inline-block;
                }
                .tmpl-warm-sand .dot.filled {
                    background-color: #decbb4;
                }`
    },
    {
        id: 'template3',
        name: 'Soft Blue Timeline Infographic',
        html: `<div class="tmpl-blue-timeline">
            <div class="timeline-container-grid">
                
                <div class="left-accent-stripe"></div>
                
                <div class="main-body-panel">
                    
                    <div class="profile-header">
                        <div class="header-text">
                            <h1 class="res-name">Lucy Liu</h1>
                            <div class="res-contact">
                                <span><span class="icon-inline">📍</span> Minneapolis, MN, 55401</span>
                                <span><span class="icon-inline">📞</span> (555)555-5555</span>
                                <span><span class="icon-inline">✉️</span> lucy@example.com</span>
                            </div>
                        </div>
                        <div class="photo-container">
                            <div class="profile-img circle-avatar"></div>
                        </div>
                    </div>

                    <div class="summary-row">
                        <p class="res-summary">Dynamic Data Analyst intern with strong Python skills, adept in SQL, improving data integrity and workflow efficiency in tech-driven projects.</p>
                    </div>

                    <div class="timeline-section-block">
                        <div class="section-badge-header">
                            <div class="badge-icon">🎓</div>
                            <h2 class="section-title-text">Education</h2>
                        </div>
                        
                        <div class="res-education data-list-timeline">
                            <div class="timeline-row-item">
                                <div class="item-date-left">2023-06</div>
                                <div class="item-content-details">
                                    <div class="item-title"><strong>Master's:</strong> Data Science</div>
                                    <div class="item-subtitle">Stanford University - Cedar Valley, MN</div>
                                </div>
                            </div>
                            <div class="timeline-row-item">
                                <div class="item-date-left">2021-05</div>
                                <div class="item-content-details">
                                    <div class="item-title"><strong>Bachelor's:</strong> Computer Science</div>
                                    <div class="item-subtitle">University of California, Berkeley - Cedar Valley, MN</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-section-block">
                        <div class="section-badge-header">
                            <div class="badge-icon">🧩</div>
                            <h2 class="section-title-text">Skills</h2>
                        </div>
                        
                        <div class="res-skills skills-grid-layout">
                            <div class="skill-item-dotbox">
                                <div class="skill-name">Data Analysis</div>
                                <div class="dot-track"><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet"></span><span class="bullet"></span></div>
                            </div>
                            <div class="skill-item-dotbox">
                                <div class="skill-name">SQL</div>
                                <div class="dot-track"><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet"></span></div>
                            </div>
                            <div class="skill-item-dotbox">
                                <div class="skill-name">Python Programming</div>
                                <div class="dot-track"><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet"></span></div>
                            </div>
                            <div class="skill-item-dotbox">
                                <div class="skill-name">Machine Learning</div>
                                <div class="dot-track"><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet"></span></div>
                            </div>
                            <div class="skill-item-dotbox">
                                <div class="skill-name">Dashboard Creation</div>
                                <div class="dot-track"><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet"></span></div>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-section-block">
                        <div class="section-badge-header">
                            <div class="badge-icon">💼</div>
                            <h2 class="section-title-text">Work History</h2>
                        </div>
                        
                        <div class="res-experience data-list-timeline">
                            <div class="timeline-row-item">
                                <div class="item-date-left">2024-08 - 2025-08</div>
                                <div class="item-content-details">
                                    <div class="item-title"><strong>Intern</strong></div>
                                    <div class="item-subtitle">AI Research Lab, Minneapolis, MN</div>
                                    <ul class="bullet-list-content">
                                        <li>Analyzed 50% more data sets monthly</li>
                                        <li>Collaborated on UI enhancements saving 20% time</li>
                                        <li>Streamlined project workflow reducing delays by 15%</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="timeline-row-item">
                                <div class="item-date-left">2023-08 - 2024-07</div>
                                <div class="item-content-details">
                                    <div class="item-title"><strong>Assistant Analyst</strong></div>
                                    <div class="item-subtitle">DataTech Solutions, Minneapolis, MN</div>
                                    <ul class="bullet-list-content">
                                        <li>Executed SQL queries improving retrieval by 30%</li>
                                        <li>Developed dashboards increasing user access by 40%</li>
                                        <li>Managed datasets enhancing data integrity by 25%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-section-block">
                        <div class="section-badge-header">
                            <div class="badge-icon">🏆</div>
                            <h2 class="section-title-text">Accomplishments</h2>
                        </div>
                        
                        <div class="data-list-timeline">
                            <div class="timeline-row-item">
                                <div class="item-date-left"></div>
                                <div></div>
                                <div class="item-content-details">
                                    <ul class="bullet-list-content no-margin-top">
                                        <li>Improved algorithm efficiency by 35%</li>
                                        <li>Led a project increasing revenue by $15K</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>`,
        style: `.tmpl-blue-timeline {
                    font-family: Arial, Helvetica, sans-serif;
                    background-color: #ffffff;
                    color: #333333;
                    max-width: 800px;
                    margin: auto;
                    box-sizing: border-box;
                    position: relative;
                }
                
                /* Two Column Canvas: Solid Left Accent Column, Right Content Column */
                .tmpl-blue-timeline .timeline-container-grid {
                    display: grid;
                    grid-template-columns: 35px 1fr;
                    min-height: 1050px;
                }
                .tmpl-blue-timeline .left-accent-stripe {
                    background-color: #a7bedc;
                    height: 100%;
                }
                .tmpl-blue-timeline .main-body-panel {
                    padding: 40px 35px 40px 15px;
                }

                /* Profile Header Area Layout */
                .tmpl-blue-timeline .profile-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                    padding-left: 20px;
                    text-align: left;
                }
                .tmpl-blue-timeline .res-name {
                    font-size: 42px;
                    color: #8fa9cf;
                    font-weight: bold;
                    margin: 0 0 15px 0;
                }
                .tmpl-blue-timeline .res-contact {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px 20px;
                    font-size: 13px;
                    color: #444444;
                }
                .tmpl-blue-timeline .icon-inline {
                    color: #8fa9cf;
                    margin-right: 2px;
                }
                .tmpl-blue-timeline .photo-container {
                    width: 95px;
                    height: 95px;
                    border-radius: 50%;
                    background-color: #e2e8f0;
                    overflow: hidden;
                }
                .tmpl-blue-timeline .circle-avatar {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                }

                /* Core Objective Summary Frame */
                .tmpl-blue-timeline .summary-row {
                    padding-left: 20px;
                    margin-bottom: 30px;
                    text-align: left;
                }
                .tmpl-blue-timeline .res-summary {
                    font-size: 13.5px;
                    line-height: 1.5;
                    color: #222222;
                }

                /* Section Header Elements with Badges */
                .tmpl-blue-timeline .timeline-section-block {
                    margin-bottom: 25px;
                    text-align: left;
                }
                .tmpl-blue-timeline .section-badge-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 15px;
                    position: relative;
                    z-index: 5;
                }
                .tmpl-blue-timeline .badge-icon {
                    width: 32px;
                    height: 32px;
                    background-color: #8fa9cf;
                    color: #ffffff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    margin-left: -31px; /* Positions badge directly on center of the vertical accent line border */
                }
                .tmpl-blue-timeline .section-title-text {
                    font-size: 18px;
                    color: #8fa9cf;
                    font-weight: bold;
                    margin: 0;
                }

                /* Timeline List Structure Setup */
                .tmpl-blue-timeline .data-list-timeline {
                    border-left: 1px solid #cbd5e1;
                    margin-left: -15px; /* Aligns line perfectly beneath the circular header badges */
                    padding-left: 0;
                }
                .tmpl-blue-timeline .timeline-row-item {
                    display: grid;
                    grid-template-columns: 110px 16px 1fr;
                    margin-bottom: 18px;
                    position: relative;
                }
                .tmpl-blue-timeline .timeline-row-item:last-child {
                    margin-bottom: 0;
                }
                
                .tmpl-blue-timeline .item-date-left {
                    text-align: right;
                    font-size: 12.5px;
                    color: #7f8c8d;
                    padding-top: 2px;
                    padding-right: 10px;
                    font-weight: 500;
                }
                .tmpl-blue-timeline .item-node-dot {
                    width: 8px;
                    height: 8px;
                    background-color: #a7bedc;
                    border-radius: 50%;
                    margin-top: 6px;
                    margin-left: -5px; /* Centers dot precisely over the timeline node line boundary */
                }
                .tmpl-blue-timeline .item-content-details {
                    padding-left: 10px;
                }
                .tmpl-blue-timeline .item-title {
                    font-size: 14px;
                    color: #111111;
                }
                .tmpl-blue-timeline .item-subtitle {
                    font-size: 13px;
                    color: #555555;
                    margin-top: 2px;
                    font-style: italic;
                }
                
                /* Text Lists contents styles */
                .tmpl-blue-timeline .bullet-list-content {
                    margin: 6px 0 0 0;
                    padding-left: 18px;
                }
                .tmpl-blue-timeline .bullet-list-content.no-margin-top {
                    margin-top: 0;
                }
                .tmpl-blue-timeline .bullet-list-content li {
                    font-size: 13px;
                    line-height: 1.5;
                    color: #444444;
                    margin-bottom: 4px;
                }

                /* Custom Skills Dot Grid Setup */
                .tmpl-blue-timeline .skills-grid-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px 40px;
                    padding-left: 20px;
                }
                .tmpl-blue-timeline .skill-item-dotbox {
                    display: flex;
                    flex-direction: column;
                }
                .tmpl-blue-timeline .skill-name {
                    font-size: 13.5px;
                    color: #222222;
                    margin-bottom: 6px;
                }
                .tmpl-blue-timeline .dot-track {
                    display: flex;
                    gap: 5px;
                }
                .tmpl-blue-timeline .bullet {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: #e2e8f0;
                    display: inline-block;
                }
                .tmpl-blue-timeline .bullet.filled {
                    background-color: #a7bedc;
                }`
    },
    {
        id: 'template4',
        name: 'Terracotta Corporate Classic',
        html: `<div class="tmpl-terracotta">
            <div class="top-accent-banner"></div>

            <div class="initials-badge-wrap">
                <div class="square-initials-box">
                    <span class="res-initials">OJ</span>
                </div>
            </div>

            <div class="name-header-block">
                <h1 class="res-name">Olivia Johnson</h1>
                <div class="divider-line"></div>
            </div>

            <div class="resume-columns-grid">
                
                <div class="left-main-column">
                    
                    <div class="content-section">
                        <div class="heading-accent-bar">
                            <h2>Resume Objective</h2>
                        </div>
                        <p class="res-summary">Detail-oriented Administrative Assistant with a keen eye for efficiency and process improvement. Proficient in managing schedules and expense tracking to enhance workplace productivity. A results-driven professional with a proven track record of cost savings and increased morale.</p>
                    </div>

                    <div class="content-section">
                        <div class="heading-accent-bar">
                            <h2>Education</h2>
                        </div>
                        <div class="res-education list-container">
                            <div class="edu-item">
                                <div class="item-title"><strong>Master's Degree</strong>, Business Administration, 05/2021</div>
                                <div class="item-sub">State University - Springfield, IL</div>
                            </div>
                            <div class="edu-item" style="margin-top: 15px;">
                                <div class="item-title"><strong>Bachelor's Degree</strong>, Administrative Studies, 06/2019</div>
                                <div class="item-sub">City College - Springfield, IL</div>
                            </div>
                        </div>
                    </div>

                    <div class="content-section">
                        <div class="heading-accent-bar">
                            <h2>Work History</h2>
                        </div>
                        <div class="res-experience list-container">
                            <div class="job-item">
                                <div class="item-title"><strong>Administrative Assistant</strong>, 03/2024 to 08/2025</div>
                                <div class="item-sub">CityFront Solutions - Springfield, IL</div>
                                <ul class="bullet-list">
                                    <li>Managed calendars and scheduled meetings, increasing efficiency by 20%</li>
                                    <li>Processed expense reports, saving $5,000 annually</li>
                                    <li>Coordinated office supply orders, reducing costs by 15%</li>
                                </ul>
                            </div>
                            <div class="job-item" style="margin-top: 20px;">
                                <div class="item-title"><strong>Office Coordinator</strong>, 01/2022 to 02/2024</div>
                                <div class="item-sub">MetroTech Global - Springfield, IL</div>
                                <ul class="bullet-list">
                                    <li>Streamlined communication across departments</li>
                                    <li>Organized team events to boost morale by 25%</li>
                                    <li>Implemented filing system, improving retrieval speed by 30%</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="content-section">
                        <div class="heading-accent-bar">
                            <h2>Accomplishments</h2>
                        </div>
                        <ul class="bullet-list res-accomplishments">
                            <li>Received employee of the month for streamlining processes</li>
                            <li>Achieved cost reduction target early by 6 months</li>
                        </ul>
                    </div>
                </div>

                <div class="right-sidebar-column">
                    
                    <div class="content-section">
                        <div class="heading-accent-bar">
                            <h2>Contact</h2>
                        </div>
                        <div class="contact-details-box res-contact">
                            <div><strong>Address:</strong> Springfield, IL 62706</div>
                            <div><strong>Phone:</strong> (555)555-5555</div>
                            <div><strong>Email:</strong> olivia@example.com</div>
                        </div>
                    </div>

                    <div class="content-section">
                        <div class="heading-accent-bar">
                            <h2>Skills</h2>
                        </div>
                        <div class="res-skills skills-stack">
                            <div class="skill-progress-item">
                                <div class="skill-name">Calendar Management</div>
                                <div class="bar-track"><div class="bar-fill" style="width: 80%;"></div></div>
                            </div>
                            <div class="skill-progress-item">
                                <div class="skill-name">Office Coordination</div>
                                <div class="bar-track"><div class="bar-fill" style="width: 85%;"></div></div>
                            </div>
                            <div class="skill-progress-item">
                                <div class="skill-name">Expense Reporting</div>
                                <div class="bar-track"><div class="bar-fill" style="width: 90%;"></div></div>
                            </div>
                            <div class="skill-progress-item">
                                <div class="skill-name">Supply Chain Management</div>
                                <div class="bar-track"><div class="bar-fill" style="width: 75%;"></div></div>
                            </div>
                            <div class="skill-progress-item">
                                <div class="skill-name">Communication</div>
                                <div class="bar-track"><div class="bar-fill" style="width: 100%;"></div></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>`,
        style: `.tmpl-terracotta {
                    font-family: Arial, Helvetica, sans-serif;
                    background-color: #ffffff;
                    color: #4a4a4a;
                    max-width: 800px;
                    margin: auto;
                    box-sizing: border-box;
                    padding-bottom: 50px;
                    position: relative;
                }
                
                /* Top colored design strip block */
                .tmpl-terracotta .top-accent-banner {
                    background-color: #f1ded9;
                    height: 50px;
                    width: 100%;
                }

                /* Initials square monogram container */
                .tmpl-terracotta .initials-badge-wrap {
                    display: flex;
                    justify-content: center;
                    margin-top: -30px;
                    margin-bottom: 20px;
                }
                .tmpl-terracotta .square-initials-box {
                    width: 65px;
                    height: 65px;
                    background-color: #ffffff;
                    border: 2px solid #8e2a15;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 0 4px #ffffff;
                }
                .tmpl-terracotta .res-initials {
                    font-family: 'Georgia', serif;
                    color: #8e2a15;
                    font-size: 24px;
                    font-weight: normal;
                    letter-spacing: 0.5px;
                }

                /* Main Header Title Typography */
                .tmpl-terracotta .name-header-block {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 0 40px;
                }
                .tmpl-terracotta .res-name {
                    font-size: 34px;
                    color: #8e2a15;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin: 0 0 15px 0;
                }
                .tmpl-terracotta .divider-line {
                    border-top: 1.5px solid #8e2a15;
                    width: 100%;
                }

                /* Grid Configuration split columns layout */
                .tmpl-terracotta .resume-columns-grid {
                    display: grid;
                    grid-template-columns: 1fr 240px;
                    gap: 40px;
                    padding: 0 40px;
                }

                /* Section Heading Title Ribbon Accents */
                .tmpl-terracotta .content-section {
                    margin-bottom: 25px;
                    text-align: left;
                }
                .tmpl-terracotta .heading-accent-bar {
                    background-color: #f1ded9;
                    padding: 4px 10px;
                    margin-bottom: 15px;
                    border-radius: 2px;
                }
                .tmpl-terracotta h2 {
                    font-size: 14px;
                    color: #8e2a15;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin: 0;
                }
                .tmpl-terracotta p {
                    font-size: 13.5px;
                    line-height: 1.6;
                    color: #4a4a4a;
                    margin: 0;
                    text-align: justify;
                }

                /* Standard Sublists styling variables */
                .tmpl-terracotta .list-container .item-title {
                    font-size: 14px;
                    color: #111111;
                }
                .tmpl-terracotta .list-container .item-sub {
                    font-size: 13.5px;
                    color: #555555;
                    margin-top: 2px;
                }
                .tmpl-terracotta .bullet-list {
                    margin: 6px 0 0 0;
                    padding-left: 18px;
                    border-bottom: 1px solid #e0e0e0;
                    padding-bottom: 12px;
                }
                .tmpl-terracotta .bullet-list:last-child,
                .tmpl-terracotta .res-accomplishments {
                    border-bottom: none;
                    padding-bottom: 0;
                }
                .tmpl-terracotta .bullet-list li {
                    font-size: 13px;
                    line-height: 1.5;
                    color: #4a4a4a;
                    margin-bottom: 4px;
                }

                /* Right panel layout specs details contact box */
                .tmpl-terracotta .contact-details-box {
                    font-size: 13px;
                    line-height: 1.8;
                    color: #4a4a4a;
                    border-bottom: 1px solid #e0e0e0;
                    padding-bottom: 15px;
                }

                /* Horizontal Progress Bars Skills styling variables */
                .tmpl-terracotta .skills-stack {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .tmpl-terracotta .skill-progress-item {
                    display: flex;
                    flex-direction: column;
                    border-bottom: 1px solid #e0e0e0;
                    padding-bottom: 8px;
                }
                .tmpl-terracotta .skill-progress-item:last-child {
                    border-bottom: none;
                }
                .tmpl-terracotta .skill-name {
                    font-size: 13px;
                    color: #222222;
                    margin-bottom: 5px;
                }
                .tmpl-terracotta .bar-track {
                    width: 100%;
                    height: 5px;
                    background-color: #e5e7eb;
                    overflow: hidden;
                }
                .tmpl-terracotta .bar-fill {
                    height: 100%;
                    background-color: #8e2a15;
                }`
    },
    {
        id: 'template5',
        name: 'Periwinkle Split Sidebar',
        html: `<div class="tmpl-periwinkle-split">
            <div class="top-banner-header">
                <h1 class="res-name">Chris Martinez</h1>
            </div>

            <div class="resume-grid-columns">
                
                <div class="left-body-panel">
                    
                    <div class="section-container">
                        <h2 class="section-heading">Resume Objective</h2>
                        <p class="res-summary">Experienced Bartender skilled in mixology, inventory management, and training staff. Proven track record of improving sales and customer satisfaction.</p>
                    </div>

                    <div class="section-container">
                        <h2 class="section-heading">Work History</h2>
                        <div class="res-experience list-wrapper">
                            <div class="job-entry-item">
                                <div class="job-meta-header"><strong>The Urban Fork - Bartender</strong></div>
                                <div class="job-location">Lakeside, CA</div>
                                <div class="job-dates-italic">08/2024 - 08/2025</div>
                                <ul class="bullet-list">
                                    <li>Prepared cocktails, boosting sales by 15%</li>
                                    <li>Managed inventory, reducing waste by 10%</li>
                                    <li>Trained new staff, improving service speed by 20%</li>
                                </ul>
                            </div>
                            
                            <div class="job-entry-item" style="margin-top: 20px;">
                                <div class="job-meta-header"><strong>Harborview Bistro - Mixologist</strong></div>
                                <div class="job-location">Lakeside, CA</div>
                                <div class="job-dates-italic">08/2023 - 07/2024</div>
                                <ul class="bullet-list">
                                    <li>Created unique drinks, increasing menu variety by 25%</li>
                                    <li>Enhanced customer experience, boosting tips by 12%</li>
                                    <li>Organized events, drawing 10% more patrons</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="section-container">
                        <h2 class="section-heading">Accomplishments</h2>
                        <ul class="bullet-list res-accomplishments">
                            <li>Improved customer satisfaction scores</li>
                            <li>Increased repeat customer rates</li>
                        </ul>
                    </div>
                </div>

                <div class="right-sidebar-panel">
                    
                    <div class="sidebar-section">
                        <h3 class="sidebar-heading">Contact</h3>
                        <div class="contact-rows-list res-contact">
                            <div class="contact-item">✉️ chris@example.com</div>
                            <div class="contact-item">📞 (555)555-5555</div>
                            <div class="contact-item">📍 Lakeside, CA 92055</div>
                        </div>
                    </div>

                    <div class="sidebar-section">
                        <h3 class="sidebar-heading">Education</h3>
                        <div class="res-education education-stack">
                            <div class="edu-block-item">
                                <div class="edu-date">05/2023</div>
                                <div class="edu-institution"><strong>New York University</strong></div>
                                <div class="edu-loc">Lakeside, CA</div>
                                <div class="edu-degree-text">Bachelor's Degree: Hospitality Management</div>
                            </div>
                            <div class="edu-block-item" style="margin-top: 15px;">
                                <div class="edu-date">06/2019</div>
                                <div class="edu-institution"><strong>Lincoln High School</strong></div>
                                <div class="edu-loc">Lakeside, CA</div>
                                <div class="edu-degree-text">High School Diploma</div>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-section">
                        <h3 class="sidebar-heading">Skills</h3>
                        <div class="res-skills pills-flex-container">
                            <span class="skill-pill-badge">Event Planning</span>
                            <span class="skill-pill-badge">Point of Sale Systems</span>
                            <span class="skill-pill-badge">Customer Service / Mixology</span>
                            <span class="skill-pill-badge">Inventory Management</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>`,
        style: `.tmpl-periwinkle-split {
                    font-family: Arial, Helvetica, sans-serif;
                    background-color: #ffffff;
                    color: #555555;
                    max-width: 800px;
                    margin: auto;
                    box-sizing: border-box;
                    padding-bottom: 40px;
                }

                /* Full Width Top Banner Header Accent */
                .tmpl-periwinkle-split .top-banner-header {
                    background-color: #a4bce4;
                    padding: 40px;
                    text-align: center;
                }
                .tmpl-periwinkle-split .res-name {
                    font-family: 'Georgia', serif;
                    color: #ffffff;
                    font-size: 36px;
                    font-weight: normal;
                    font-style: italic;
                    letter-spacing: 1.5px;
                    margin: 0;
                }

                /* Content Column Split Config Grid */
                .tmpl-periwinkle-split .resume-grid-columns {
                    display: grid;
                    grid-template-columns: 1fr 250px;
                }

                /* Left Body Canvas Layout Elements */
                .tmpl-periwinkle-split .left-body-panel {
                    padding: 30px 30px 30px 40px;
                }
                .tmpl-periwinkle-split .section-container {
                    margin-bottom: 25px;
                    border-bottom: 1px solid #e2e8f0;
                    padding-bottom: 20px;
                }
                .tmpl-periwinkle-split .section-container:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }
                .tmpl-periwinkle-split .section-heading {
                    font-family: 'Georgia', serif;
                    font-size: 16px;
                    color: #333333;
                    font-style: italic;
                    font-weight: bold;
                    margin: 0 0 12px 0;
                }
                .tmpl-periwinkle-split p {
                    font-size: 13.5px;
                    line-height: 1.5;
                    color: #555555;
                    margin: 0;
                    text-align: left;
                }

                /* Reusable lists components selectors typography styles */
                .tmpl-periwinkle-split .job-meta-header {
                    font-size: 14px;
                    color: #222222;
                    text-align: left;
                }
                .tmpl-periwinkle-split .job-location {
                    font-size: 13px;
                    color: #666666;
                    margin-top: 1px;
                }
                .tmpl-periwinkle-split .item-company {
                    text-align: left;
                }
                .tmpl-periwinkle-split .job-dates-italic {
                    font-size: 13px;
                    color: #7f8c8d;
                    font-style: italic;
                    margin-top: 2px;
                    text-align: left;
                }
                .tmpl-periwinkle-split .bullet-list {
                    margin: 6px 0 0 0;
                    padding-left: 18px;
                    text-align: left;
                }
                .tmpl-periwinkle-split .bullet-list li {
                    font-size: 13px;
                    line-height: 1.5;
                    color: #555555;
                    margin-bottom: 4px;
                    text-align: left;
                }

                /* Right Asymmetric Panels Components Layout Style specs */
                .tmpl-periwinkle-split .right-sidebar-panel {
                    background-color: #f7f9fc;
                    padding: 30px 35px 30px 25px;
                    min-height: 900px;
                }
                .tmpl-periwinkle-split .sidebar-section {
                    margin-bottom: 30px;
                    border-bottom: 1px solid #e2e8f0;
                    padding-bottom: 20px;
                    text-align: left;
                }
                .tmpl-periwinkle-split .sidebar-section:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }
                .tmpl-periwinkle-split .sidebar-heading {
                    font-family: 'Georgia', serif;
                    font-size: 15px;
                    color: #333333;
                    font-style: italic;
                    font-weight: bold;
                    margin: 0 0 15px 0;
                }

                /* Contact Row Blocks elements formats */
                .tmpl-periwinkle-split .contact-rows-list {
                    font-size: 12.5px;
                    line-height: 1.8;
                    color: #4a5568;
                }

                /* Education dynamic wrapper list metrics */
                .tmpl-periwinkle-split .edu-block-item {
                    font-size: 13px;
                    line-height: 1.4;
                }
                .tmpl-periwinkle-split .edu-date {
                    color: #7f8c8d;
                    font-weight: bold;
                    margin-bottom: 2px;
                }
                .tmpl-periwinkle-split .edu-institution {
                    color: #222222;
                }
                .tmpl-periwinkle-split .edu-loc {
                    color: #666666;
                }
                .tmpl-periwinkle-split .edu-degree-text {
                    color: #555555;
                    margin-top: 2px;
                }

                /* Capsule Badge Pill Style configurations markup elements */
                .tmpl-periwinkle-split .pills-flex-container {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .tmpl-periwinkle-split .skill-pill-badge {
                    background-color: #ffffff;
                    border: 1px solid #cbd5e1;
                    border-radius: 14px;
                    padding: 6px 14px;
                    font-size: 12.5px;
                    color: #4a5568;
                    width: max-content;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.02);
                }`
    },
    {
        id: 'template6',
        name: 'Sky Blue Left-Label Minimalist',
        html: `<div class="tmpl-skyblue-label">
            <div class="header-profile-row">
                <div class="identity-info-center">
                    <h1 class="res-name">Olivia Martinez</h1>
                    <div class="res-contact">
                        Hillcrest, NY 11511<br>
                        (555)555-5555 - olivia@example.com
                    </div>
                </div>
                <div class="avatar-photo-frame">
                    <div class="profile-img circle-avatar"></div>
                </div>
            </div>

            <div class="layout-section-row">
                <div class="left-label-pane">
                    <h2 class="section-heading-text">Resume Objective</h2>
                </div>
                <div class="right-content-pane border-top-accent">
                    <p class="res-summary">Experienced Office Assistant skilled in managing schedules and streamlining workflows, delivering 30% higher efficiency. Proficient in Microsoft Office Suite and vendor coordination, aiming to optimize operational processes.</p>
                </div>
            </div>

            <div class="layout-section-row">
                <div class="left-label-pane">
                    <h2 class="section-heading-text">Education</h2>
                </div>
                <div class="right-content-pane border-top-accent res-education list-stack-wrapper">
                    <div class="split-timeline-item">
                        <div class="item-date-pane">07/2022</div>
                        <div class="item-details-pane">
                            <div class="item-title"><strong>Associate Degree: Business Administration</strong></div>
                            <div class="item-subtitle">Hudson University - Hillcrest, NY</div>
                        </div>
                    </div>
                    <div class="split-timeline-item">
                        <div class="item-date-pane">07/2020</div>
                        <div class="item-details-pane">
                            <div class="item-title"><strong>High School Diploma: General Studies</strong></div>
                            <div class="item-subtitle">Franklin High School - Hillcrest, NY</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="layout-section-row">
                <div class="left-label-pane">
                    <h2 class="section-heading-text">Skills</h2>
                </div>
                <div class="right-content-pane border-top-accent res-skills blocks-skills-grid">
                    <div class="skill-block-item">
                        <div class="skill-name">Calendar Coordination</div>
                        <div class="segmented-track"><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick"></span><span class="block-tick"></span></div>
                    </div>
                    <div class="skill-block-item">
                        <div class="skill-name">Customer Service</div>
                        <div class="segmented-track"><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick"></span><span class="block-tick"></span></div>
                    </div>
                    <div class="skill-block-item">
                        <div class="skill-name">Office Management</div>
                        <div class="segmented-track"><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick"></span><span class="block-tick"></span></div>
                    </div>
                    <div class="skill-block-item">
                        <div class="skill-name">Data Entry</div>
                        <div class="segmented-track"><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick"></span></div>
                    </div>
                    <div class="skill-block-item">
                        <div class="skill-name">Inventory Management</div>
                        <div class="segmented-track"><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick filled"></span><span class="block-tick filled"></span></div>
                    </div>
                </div>
            </div>

            <div class="layout-section-row">
                <div class="left-label-pane">
                    <h2 class="section-heading-text">Work History</h2>
                </div>
                <div class="right-content-pane border-top-accent res-experience list-stack-wrapper">
                    <div class="split-timeline-item">
                        <div class="item-date-pane">08/2023 to 08/2025</div>
                        <div class="item-details-pane">
                            <div class="item-title"><strong>Office Assistant</strong></div>
                            <div class="item-subtitle">BrightPath Solutions – Hillcrest, NY</div>
                            <ul class="bullet-list">
                                <li>Managed schedules for 15+ team members</li>
                                <li>Reduced inbox clutter by 30% using digital tools</li>
                                <li>Streamlined quarterly inventory by 20%</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="split-timeline-item">
                        <div class="item-date-pane">08/2022 to 07/2023</div>
                        <div class="item-details-pane">
                            <div class="item-title"><strong>Administrative Associate</strong></div>
                            <div class="item-subtitle">Keystone Office Group – Hillcrest, NY</div>
                            <ul class="bullet-list">
                                <li>Trained 5 interns improving efficiency by 25%</li>
                                <li>Maintained office workflows reducing bottlenecks</li>
                                <li>Oversaw vendor payments totaling $50,000+</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="layout-section-row">
                <div class="left-label-pane">
                    <h2 class="section-heading-text">Accomplishments</h2>
                </div>
                <div class="right-content-pane border-top-accent">
                    <ul class="bullet-list res-accomplishments no-margin-top">
                        <li>Developed digital filing system saving $5,000/year</li>
                        <li>Won 'Efficiency Innovator' award in 2023</li>
                    </ul>
                </div>
            </div>
        </div>`,
        style: `.tmpl-skyblue-label {
                    font-family: Arial, Helvetica, sans-serif;
                    background-color: #ffffff;
                    color: #333333;
                    max-width: 800px;
                    margin: auto;
                    box-sizing: border-box;
                    padding: 40px;
                }

                /* Header Panel Configurations */
                .tmpl-skyblue-label .header-profile-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 35px;
                    padding-right: 15px;
                }
                .tmpl-skyblue-label .identity-info-center {
                    flex-grow: 1;
                    text-align: center;
                }
                .tmpl-skyblue-label .res-name {
                    font-size: 32px;
                    color: #3498db;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin: 0 0 15px 0;
                }
                .tmpl-skyblue-label .res-contact {
                    font-size: 14px;
                    color: #444444;
                    line-height: 1.5;
                }
                .tmpl-skyblue-label .avatar-photo-frame {
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    background-color: #e2e8f0;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .tmpl-skyblue-label .circle-avatar {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                }

                /* Row Structure: Left labels aligned with Right contents */
                .tmpl-skyblue-label .layout-section-row {
                    display: grid;
                    grid-template-columns: 160px 1fr;
                    gap: 20px;
                    margin-bottom: 20px;
                }
                .tmpl-skyblue-label .left-label-pane {
                    padding-top: 5px;
                }
                .tmpl-skyblue-label .section-heading-text {
                    font-size: 14px;
                    color: #3498db;
                    font-weight: bold;
                    text-transform: uppercase;
                    margin: 0;
                    letter-spacing: 0.3px;
                }
                .tmpl-skyblue-label .right-content-pane {
                    padding-top: 8px;
                    text-align: left;
                }
                .tmpl-skyblue-label .border-top-accent {
                    border-top: 1.5px solid #3498db;
                }
                .tmpl-skyblue-label p {
                    font-size: 13.5px;
                    line-height: 1.5;
                    color: #444444;
                    margin: 0;
                    text-align: left;
                }

                /* Stack Lists layouts inside content boxes */
                .tmpl-skyblue-label .list-stack-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .tmpl-skyblue-label .split-timeline-item {
                    display: grid;
                    grid-template-columns: 140px 1fr;
                    gap: 10px;
                }
                .tmpl-skyblue-label .item-date-pane {
                    font-size: 13.5px;
                    color: #444444;
                }
                .tmpl-skyblue-label .item-title {
                    font-size: 14px;
                    color: #111111;
                }
                .tmpl-skyblue-label .item-subtitle {
                    font-size: 13px;
                    color: #555555;
                    margin-top: 2px;
                }

                /* List Bullets settings */
                .tmpl-skyblue-label .bullet-list {
                    margin: 6px 0 0 0;
                    padding-left: 18px;
                }
                .tmpl-skyblue-label .bullet-list.no-margin-top {
                    margin-top: 0;
                }
                .tmpl-skyblue-label .bullet-list li {
                    font-size: 13px;
                    line-height: 1.5;
                    color: #444444;
                    margin-bottom: 4px;
                }

                /* Segmented Block Level Progress Bar Matrix */
                .tmpl-skyblue-label .blocks-skills-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px 30px;
                }
                .tmpl-skyblue-label .skill-block-item {
                    display: flex;
                    flex-direction: column;
                }
                .tmpl-skyblue-label .skill-name {
                    font-size: 13px;
                    color: #222222;
                    margin-bottom: 6px;
                }
                .tmpl-skyblue-label .segmented-track {
                    display: flex;
                    gap: 3px;
                }
                .tmpl-skyblue-label .block-tick {
                    flex-grow: 1;
                    height: 6px;
                    background-color: #e2e8f0;
                    display: inline-block;
                }
                .tmpl-skyblue-label .block-tick.filled {
                    background-color: #3498db;
                }`
    },
    {
        id: 'template7',
        name: 'Modern Symmetrical DevOps Grid',
        html: `<div class="tmpl-devops-grid">
            <div class="top-thin-line"></div>

            <div class="header-profile-block">
                <div class="avatar-photo-frame">
                    <div class="profile-img square-avatar"></div>
                </div>
                <div class="identity-title-box">
                    <h1 class="res-name">Diana Wu</h1>
                </div>
            </div>

            <div class="contact-strip-bar">
                <div class="double-accent-line"></div>
                <div class="res-contact">San Francisco, CA 94101 &nbsp;♦&nbsp; (555)555-5555 &nbsp;♦&nbsp; diana@example.com</div>
            </div>

            <div class="resume-split-grid">
                
                <div class="grid-column-pane">
                    
                    <div class="content-section">
                        <h2 class="flanked-heading">Professional Summary</h2>
                        <p class="res-summary">Dynamic DevOps Engineer with 8+ years in systems automation and cloud solutions. Proven track record of driving efficiency and reducing costs with innovative strategies. Skilled in optimizing CI/CD processes for superior deployment.</p>
                    </div>

                    <div class="content-section">
                        <h2 class="flanked-heading">Work History</h2>
                        <div class="res-experience list-wrapper">
                            <div class="job-entry-item">
                                <div class="job-meta-header"><strong>DevOps Engineer</strong>, 03/2022 - 08/2025</div>
                                <div class="job-company-loc"><strong>CloudOps Solutions</strong> – San Francisco, CA</div>
                                <ul class="bullet-list">
                                    <li>Increased deployment speed by 35%</li>
                                    <li>Automated CI/CD pipelines with Jenkins</li>
                                    <li>Reduced server downtime by 40%</li>
                                </ul>
                            </div>
                            <div class="job-entry-item" style="margin-top: 15px;">
                                <div class="job-meta-header"><strong>Systems Automation Specialist</strong>, 02/2017 - 02/2022</div>
                                <div class="job-company-loc"><strong>DataWave Tech</strong> – Riverside, CA</div>
                                <ul class="bullet-list">
                                    <li>Implemented cloud migration strategies</li>
                                    <li>Reduced operational costs by 20%</li>
                                    <li>Optimized monitoring tools for 15% efficiency</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="content-section">
                        <h2 class="flanked-heading">Languages</h2>
                        <div class="boxed-badges-row">
                            <span class="outline-badge">Spanish</span>
                            <span class="outline-badge">French</span>
                            <span class="outline-badge">German</span>
                        </div>
                    </div>
                </div>

                <div class="grid-column-pane">
                    
                    <div class="content-section">
                        <h2 class="flanked-heading">Skills</h2>
                        <div class="res-skills stack-boxed-skills">
                            <div class="outline-skill-box">CI/CD Integration</div>
                            <div class="outline-skill-box">Cloud Services Management</div>
                            <div class="outline-skill-box">Infrastructure as Code (IaC)</div>
                            <div class="outline-skill-box">Kubernetes & Docker</div>
                            <div class="outline-skill-box">Systems Performance Tuning</div>
                        </div>
                    </div>

                    <div class="content-section">
                        <h2 class="flanked-heading">Certifications</h2>
                        <ul class="bullet-list">
                            <li>AWS Certified DevOps Engineer - Amazon Web Services</li>
                            <li>Certified Kubernetes Administrator - CNCF</li>
                        </ul>
                    </div>

                    <div class="content-section">
                        <h2 class="flanked-heading">Education</h2>
                        <div class="res-education list-wrapper">
                            <div class="edu-entry-item">
                                <div class="item-title"><strong>Master of Science:</strong> Computer Science, 06/2016</div>
                                <div class="item-subtitle"><strong>University of California, Berkeley</strong> - Sunnyvale, CA</div>
                            </div>
                            <div class="edu-entry-item" style="margin-top: 15px;">
                                <div class="item-title"><strong>Bachelor of Science:</strong> Information Technology, 06/2014</div>
                                <div class="item-subtitle"><strong>University of Texas at Austin</strong> - Sunnyvale, CA</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>`,
        style: `.tmpl-devops-grid {
                    font-family: Arial, Helvetica, sans-serif;
                    background-color: #ffffff;
                    color: #2c3e50;
                    max-width: 800px;
                    margin: auto;
                    box-sizing: border-box;
                    padding: 40px;
                    position: relative;
                }

                /* Decorative line accents */
                .tmpl-devops-grid .top-thin-line {
                    border-top: 1.5px solid #3498db;
                    width: 100%;
                    margin-bottom: 20px;
                }

                /* Header Profile Elements layout frame */
                .tmpl-devops-grid .header-profile-block {
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                    padding: 0 10px;
                }
                .tmpl-devops-grid .avatar-photo-frame {
                    width: 75px;
                    height: 75px;
                    border-radius: 50%;
                    background-color: #e2e8f0;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .tmpl-devops-grid .square-avatar {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                }
                .tmpl-devops-grid .identity-title-box {
                    flex-grow: 1;
                    text-align: center;
                    margin-left: -75px; /* Pulls text grid baseline back to absolute visual center */
                }
                .tmpl-devops-grid .res-name {
                    font-size: 34px;
                    color: #3498db;
                    font-weight: bold;
                    letter-spacing: 0.5px;
                    margin: 0;
                }

                /* Contact strip layout rules */
                .tmpl-devops-grid .contact-strip-bar {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .tmpl-devops-grid .double-accent-line {
                    border-top: 3px double #3498db;
                    width: 100%;
                    margin-bottom: 12px;
                }
                .tmpl-devops-grid .res-contact {
                    font-size: 13px;
                    color: #444444;
                }

                /* Split Container Grid Columns */
                .tmpl-devops-grid .resume-split-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 35px;
                }
                .tmpl-devops-grid .content-section {
                    margin-bottom: 25px;
                    text-align: left;
                }

                /* Symmetrical Flanked Headings (Lines on left/right sides) */
                .tmpl-devops-grid .flanked-heading {
                    display: flex;
                    align-items: center;
                    text-align: center;
                    font-size: 14px;
                    color: #3498db;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin: 0 0 15px 0;
                }
                .tmpl-devops-grid .flanked-heading::before,
                .tmpl-devops-grid .flanked-heading::after {
                    content: '';
                    flex: 1;
                    border-bottom: 1px solid #a4bce4;
                }
                .tmpl-devops-grid .flanked-heading::before {
                    margin-right: 12px;
                }
                .tmpl-devops-grid .flanked-heading::after {
                    margin-left: 12px;
                }

                /* Typography parameters narrative paragraph boxes */
                .tmpl-devops-grid p {
                    font-size: 13.5px;
                    line-height: 1.5;
                    color: #333333;
                    margin: 0;
                    text-align: justify;
                }

                /* Work / Education structures metrics */
                .tmpl-devops-grid .job-meta-header,
                .tmpl-devops-grid .item-title {
                    font-size: 13.5px;
                    color: #111111;
                }
                .tmpl-devops-grid .job-company-loc,
                .tmpl-devops-grid .item-subtitle {
                    font-size: 13px;
                    color: #555555;
                    margin-top: 2px;
                }
                .tmpl-devops-grid .bullet-list {
                    margin: 6px 0 0 0;
                    padding-left: 16px;
                }
                .tmpl-devops-grid .bullet-list li {
                    font-size: 13px;
                    line-height: 1.5;
                    color: #444444;
                    margin-bottom: 4px;
                }

                /* Outlined Block Badges (Skills list configuration) */
                .tmpl-devops-grid .stack-boxed-skills {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .tmpl-devops-grid .outline-skill-box {
                    border: 1px solid #a4bce4;
                    padding: 6px 12px;
                    font-size: 13px;
                    color: #333333;
                    border-radius: 2px;
                    width: calc(100% - 26px);
                }

                /* Languages element alignments badge boxes */
                .tmpl-devops-grid .boxed-badges-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }
                .tmpl-devops-grid .outline-badge {
                    border: 1px solid #a4bce4;
                    padding: 5px 12px;
                    font-size: 12.5px;
                    color: #333333;
                    border-radius: 2px;
                }`
    },
    {
        id: 'template8',
        name: 'Purple Split Monospace Column',
        html: `<div class="tmpl-purple-split">
            <div class="split-layout-grid">
                
                <div class="left-purple-sidebar">
                    <div class="logo-container">
                        <div class="hexagon-logo">
                            <span class="res-initials">C/J</span>
                        </div>
                    </div>

                    <div class="identity-block">
                        <h1 class="res-name">Chris Johnson</h1>
                        <div class="underline-accent"></div>
                    </div>

                    <div class="contact-details-box res-contact">
                        <div class="contact-row">✉️ chris@example.com</div>
                        <div class="contact-row">📞 (555)555-5555</div>
                        <div class="contact-row">📍 Los Angeles, CA 90010</div>
                    </div>

                    <div class="sidebar-section">
                        <h3 class="sidebar-title">Education</h3>
                        <div class="res-education list-wrapper">
                            <div class="edu-item">
                                <div class="item-meta"><strong>Midwest State University</strong></div>
                                <div class="item-sub">Sunnyvale, CA • 05/2022</div>
                                <div class="item-degree">Master of Science: Criminal Justice</div>
                            </div>
                            <div class="edu-item" style="margin-top: 15px;">
                                <div class="item-meta"><strong>Central High School</strong></div>
                                <div class="item-sub">Sunnyvale, CA • 05/2020</div>
                                <div class="item-degree">High School Diploma: General Studies</div>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-section">
                        <h3 class="sidebar-title">Skills</h3>
                        <div class="res-skills skills-dots-column">
                            <div class="skill-dot-row">
                                <div class="skill-label">Risk Assessment</div>
                                <div class="dot-track"><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet"></span><span class="bullet"></span></div>
                            </div>
                            <div class="skill-dot-row">
                                <div class="skill-label">Emergency Response</div>
                                <div class="dot-track"><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet"></span><span class="bullet"></span></div>
                            </div>
                            <div class="skill-dot-row">
                                <div class="skill-label">Incident Reporting</div>
                                <div class="dot-track"><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet"></span><span class="bullet"></span></div>
                            </div>
                            <div class="skill-dot-row">
                                <div class="skill-label">Access Control Management</div>
                                <div class="dot-track"><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span></div>
                            </div>
                            <div class="skill-dot-row">
                                <div class="skill-label">Surveillance Systems</div>
                                <div class="dot-track"><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="right-main-body">
                    
                    <div class="main-content-section">
                        <h2 class="section-title">Resume Objective</h2>
                        <p class="res-summary">Seasoned Security Officer with 3+ years of experience reducing risks and enhancing safety measures. Expert in surveillance systems, conflict resolution, and emergency response with proven results in theft prevention and incident management.</p>
                    </div>

                    <div class="main-content-section">
                        <h2 class="section-title">Volunteer Experience</h2>
                        <div class="res-experience history-stack">
                            <div class="history-item">
                                <div class="history-header"><strong>SafeGuard Security Solutions</strong> - Security Officer</div>
                                <div class="history-meta">Los Angeles, CA • 08/2024 - 08/2025</div>
                                <ul class="bullet-list">
                                    <li>Monitored access points reducing breaches by 25%</li>
                                    <li>Implemented patrol schedules ensuring 100% coverage</li>
                                    <li>Maintained records improving incident tracking efficiency</li>
                                </ul>
                            </div>
                            <div class="history-item" style="margin-top: 20px;">
                                <div class="history-header"><strong>Fortress Retail Group</strong> - Loss Prevention Associate</div>
                                <div class="history-meta">Los Angeles, CA • 08/2022 - 07/2024</div>
                                <ul class="bullet-list">
                                    <li>Conducted surveillance saving $50K in merchandise</li>
                                    <li>Led team training decreasing theft cases by 30%</li>
                                    <li>Enhanced security systems boosting alarm accuracy</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="main-content-section">
                        <h2 class="section-title">Accomplishments</h2>
                        <ul class="bullet-list res-accomplishments">
                            <li>Instituted new security policy reducing risks by 20%</li>
                            <li>Revamped training programs boosting team competency scores</li>
                        </ul>
                    </div>

                    <div class="main-content-section">
                        <h2 class="section-title">Languages</h2>
                        <div class="languages-flex-grid">
                            <div class="lang-item">
                                <div class="lang-name">Spanish</div>
                                <div class="dot-track"><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet"></span><span class="bullet"></span><span class="bullet"></span></div>
                                <div class="lang-level">Intermediate (B1)</div>
                            </div>
                            <div class="lang-item">
                                <div class="lang-name">French</div>
                                <div class="dot-track"><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet filled"></span><span class="bullet"></span><span class="bullet"></span></div>
                                <div class="lang-level">Advanced (C1)</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>`,
        style: `.tmpl-purple-split {
                    background-color: #ffffff;
                    max-width: 800px;
                    margin: auto;
                    box-sizing: border-box;
                }

                /* Main Layout Grid Configuration Split Panels */
                .tmpl-purple-split .split-layout-grid {
                    display: grid;
                    grid-template-columns: 290px 1fr;
                    min-height: 1050px;
                }

                /* LEFT SIDEBAR SPECIFICS */
                .tmpl-purple-split .left-purple-sidebar {
                    background-color: #c3addb;
                    padding: 40px 25px;
                    color: #2c3e50;
                }

                /* Hexagon Graphic Element Markups */
                .tmpl-purple-split .logo-container {
                    display: flex;
                    justify-content: left;
                    margin-bottom: 25px;
                    padding-left: 10px;
                }
                .tmpl-purple-split .hexagon-logo {
                    width: 66px;
                    height: 38px;
                    background-color: #3b2a54;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .tmpl-purple-split .hexagon-logo::before,
                .tmpl-purple-split .hexagon-logo::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    width: 0;
                    height: 0;
                    border-left: 33px solid transparent;
                    border-right: 33px solid transparent;
                }
                .tmpl-purple-split .hexagon-logo::before {
                    top: -19px;
                    border-bottom: 19px solid #3b2a54;
                }
                .tmpl-purple-split .hexagon-logo::after {
                    bottom: -19px;
                    border-top: 19px solid #3b2a54;
                }
                .tmpl-purple-split .hexagon-logo span {
                    color: #ffffff;
                    font-family: 'Georgia', serif;
                    font-style: italic;
                    font-size: 18px;
                    z-index: 2;
                    letter-spacing: 0.5px;
                }

                /* Left Identity Block Typography */
                .tmpl-purple-split .identity-block {
                    margin-bottom: 25px;
                }
                .tmpl-purple-split .res-name {
                    font-family: 'Courier New', Courier, monospace;
                    font-weight: bold;
                    font-size: 26px;
                    text-transform: uppercase;
                    color: #222222;
                    line-height: 1.2;
                    letter-spacing: -0.5px;
                }
                .tmpl-purple-split .underline-accent {
                    border-bottom: 1.5px solid #222222;
                    width: 45px;
                    margin-top: 10px;
                }

                /* Contact Rows list formatting specs */
                .tmpl-purple-split .contact-details-box {
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 12px;
                    line-height: 1.8;
                    color: #3b2a54;
                    margin-bottom: 35px;
                    text-align: left;
                }

                /* Sidebar Sub-Section Labels and Cards text layouts */
                .tmpl-purple-split .sidebar-section {
                    margin-bottom: 30px;
                    text-align: left;
                }
                .tmpl-purple-split .sidebar-title {
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 14px;
                    text-transform: uppercase;
                    color: #222222;
                    border-bottom: 1px solid #3b2a54;
                    padding-bottom: 4px;
                    margin-bottom: 12px;
                    letter-spacing: 0.5px;
                }
                .tmpl-purple-split .edu-item {
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 12px;
                    line-height: 1.4;
                    color: #222222;
                }
                .tmpl-purple-split .item-sub {
                    color: #555555;
                    font-size: 11px;
                    margin: 2px 0;
                }
                .tmpl-purple-split .item-degree {
                    font-style: italic;
                    color: #3b2a54;
                }

                /* Custom Left Skills matrix indicator dots configurations */
                .tmpl-purple-split .skills-dots-column {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .tmpl-purple-split .skill-dot-row {
                    display: flex;
                    flex-direction: column;
                }
                .tmpl-purple-split .skill-label {
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 12px;
                    color: #444444;
                    margin-bottom: 4px;
                }

                /* RIGHT MAIN BODY CANVAS SPECIFICS */
                .tmpl-purple-split .right-main-body {
                    padding: 40px 30px 40px 35px;
                    background-color: #fcfbfe;
                }
                .tmpl-purple-split .main-content-section {
                    margin-bottom: 35px;
                }
                .tmpl-purple-split .section-title {
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 15px;
                    text-transform: uppercase;
                    color: #222222;
                    font-weight: bold;
                    letter-spacing: 0.3px;
                    margin: 0 0 15px 0;
                }
                .tmpl-purple-split p {
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 12.5px;
                    line-height: 1.6;
                    color: #555555;
                    text-align: justify;
                    margin: 0;
                    text-align: left;
                }

                /* Experience/History listings text format models */
                .tmpl-purple-split .history-item {
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 13px;
                }
                .tmpl-purple-split .history-header {
                    color: #222222;
                    text-align: left;
                }
                .tmpl-purple-split .history-meta {
                    color: #7f8c8d;
                    font-size: 11.5px;
                    margin-top: 2px;
                    text-align: left;
                }
                .tmpl-purple-split .bullet-list {
                    margin: 6px 0 0 0;
                    padding-left: 15px;
                    text-align: left;
                }
                .tmpl-purple-split .bullet-list li {
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 12px;
                    line-height: 1.5;
                    color: #555555;
                    margin-bottom: 4px;
                }

                /* Languages grid layout specifications with descriptive lower labels */
                .tmpl-purple-split .languages-flex-grid {
                    display: flex;
                    gap: 40px;
                }
                .tmpl-purple-split .lang-item {
                    font-family: 'Courier New', Courier, monospace;
                    display: flex;
                    flex-direction: column;
                    font-size: 12.5px;
                    text-align: left;
                }
                .tmpl-purple-split .lang-name {
                    color: #555555;
                    margin-bottom: 4px;
                }
                .tmpl-purple-split .lang-level {
                    font-size: 11px;
                    color: #7f8c8d;
                    margin-top: 4px;
                }

                /* Reusable generic rating matrix dot rules classes (Used across left & right panels) */
                .tmpl-purple-split .dot-track {
                    display: flex;
                    gap: 4px;
                }
                .tmpl-purple-split .bullet {
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    background-color: #e2e1e6;
                    display: inline-block;
                }
                .tmpl-purple-split .bullet.filled {
                    background-color: #6a4c93;
                }`
    },
    // {
    //     id: 'template9',
    //     name: 'Federal Clean Minimalist',
    //     html: `<div class="tmpl-federal-clean">
    //         <div class="header-identity-section">
    //             <h1 class="res-name">Penelope Davis</h1>
    //             <div class="res-contact">(H) (555) 555-5555 &bull; (C) (555) 555-5555 &bull; example@example.com &bull; City, State 12345</div>
    //         </div>

    //         <div class="content-section-group">
    //             <h2 class="section-main-title">Professional Summary</h2>
    //             <div class="info-narrative-text">
    //                 <p class="res-summary">Use this section as your "elevator pitch" - a concise explanation of why you're the right person for the job. Emphasize top skills (including personal traits that tell employers how you approach work), specific expertise, and any notable work experiences that match what the potential job needs. Keep this section to two to three sentences.</p>
    //             </div>
    //         </div>

    //         <div class="content-section-group">
    //             <h2 class="section-main-title">Work History</h2>
    //             <div class="res-experience work-history-timeline">
                    
    //                 <div class="history-asymmetric-row">
    //                     <div class="meta-left-column">
    //                         <div class="job-date-range">Jun 2018 - Current</div>
    //                         <div class="job-location-details">Company City, Company State</div>
    //                     </div>
    //                     <div class="details-right-column">
    //                         <div class="job-role-meta"><strong>Position / Company</strong></div>
    //                         <div class="federal-meta-metrics">
    //                             <div>Salary: Your yearly wages.</div>
    //                             <div>Hours per week: 40</div>
    //                             <div>GS: Your general score.</div>
    //                             <div>Supervisor: Elliot Smith (555-555-5555)</div>
    //                             <div>Yes/No, you may/may not contact the supervisor.</div>
    //                         </div>
    //                         <ul class="bullet-list">
    //                             <li>Work backward, with your current or most recent job first.</li>
    //                             <li>Focus on major responsibilities and work achievements rather than daily tasks.</li>
    //                             <li>Summarize your experience with three to five punchy bullet points for each job listing.</li>
    //                         </ul>
    //                     </div>
    //                 </div>

    //                 <div class="history-asymmetric-row">
    //                     <div class="meta-left-column">
    //                         <div class="job-date-range">Jun 2015 - May 2018</div>
    //                         <div class="job-location-details">Company City, Company State</div>
    //                     </div>
    //                     <div class="details-right-column">
    //                         <div class="job-role-meta"><strong>Position / Company</strong></div>
    //                         <div class="federal-meta-metrics">
    //                             <div>Salary: Your yearly wages.</div>
    //                             <div>Hours per week: 40</div>
    //                             <div>GS: Your general score.</div>
    //                             <div>Supervisor: Elliot Smith (555-555-5555)</div>
    //                             <div>Yes/No, you may/may not contact the supervisor.</div>
    //                         </div>
    //                         <ul class="bullet-list">
    //                             <li>Highlight skills and tasks that relate to the job you're applying to.</li>
    //                             <li>Use action verbs that give your achievements more power (e.g., "Managed team of 15 employees" instead of "Was responsible for a team of 15 employees").</li>
    //                         </ul>
    //                     </div>
    //                 </div>

    //             </div>
    //         </div>
    //     </div>`,
    //     style: `.tmpl-federal-clean {
    //                 font-family: Arial, Helvetica, sans-serif;
    //                 background-color: #ffffff;
    //                 color: #555555;
    //                 max-width: 800px;
    //                 margin: auto;
    //                 box-sizing: border-box;
    //                 padding: 50px 45px;
    //             }

    //             /* Center Header Area Layout */
    //             .tmpl-federal-clean .header-identity-section {
    //                 text-align: center;
    //                 margin-bottom: 35px;
    //             }
    //             .tmpl-federal-clean .res-name {
    //                 font-family: 'Arial Black', Gadget, sans-serif;
    //                 font-size: 36px;
    //                 color: #4a4a4a;
    //                 text-transform: uppercase;
    //                 letter-spacing: 0.5px;
    //                 margin: 0 0 12px 0;
    //             }
    //             .tmpl-federal-clean .res-contact {
    //                 font-size: 13.5px;
    //                 color: #3498db;
    //                 word-spacing: 1px;
    //             }

    //             /* Main Content Structural Sections Blocks */
    //             .tmpl-federal-clean .content-section-group {
    //                 margin-bottom: 30px;
    //             }
    //             .tmpl-federal-clean .section-main-title {
    //                 font-size: 15px;
    //                 color: #4a4a4a;
    //                 font-weight: bold;
    //                 text-transform: uppercase;
    //                 letter-spacing: 0.5px;
    //                 border-bottom: 1px solid #cbd5e1;
    //                 padding-bottom: 6px;
    //                 margin: 0 0 15px 0;
    //             }

    //             /* Generic text blocks blocks format parameters */
    //             .tmpl-federal-clean .info-narrative-text p {
    //                 font-size: 13.5px;
    //                 line-height: 1.6;
    //                 color: #555555;
    //                 margin: 0 0 8px 0;
    //             }
    //             .tmpl-federal-clean .info-narrative-text p:last-child {
    //                 margin-bottom: 0;
    //             }
    //             .tmpl-federal-clean .res-summary {
    //                 text-align: justify;
    //             }

    //             /* Work History Asymmetric Rows Splitting */
    //             .tmpl-federal-clean .work-history-timeline {
    //                 display: flex;
    //                 flex-direction: column;
    //                 gap: 25px;
    //             }
    //             .tmpl-federal-clean .history-asymmetric-row {
    //                 display: grid;
    //                 grid-template-columns: 200px 1fr;
    //                 gap: 15px;
    //             }

    //             /* Left Sidebar Column Specs */
    //             .tmpl-federal-clean .meta-left-column {
    //                 font-size: 13.5px;
    //                 color: #7f8c8d;
    //                 line-height: 1.4;
    //             }
    //             .tmpl-federal-clean .job-location-details {
    //                 margin-top: 2px;
    //             }

    //             /* Right Main Content Column Specs */
    //             .tmpl-federal-clean .details-right-column {
    //                 font-size: 14px;
    //                 line-height: 1.5;
    //             }
    //             .tmpl-federal-clean .job-role-meta {
    //                 color: #222222;
    //                 margin-bottom: 4px;
    //             }
    //             .tmpl-federal-clean .federal-meta-metrics {
    //                 font-size: 13.5px;
    //                 color: #555555;
    //                 margin-bottom: 8px;
    //                 line-height: 1.4;
    //             }

    //             /* Bullet lists items formats layout models */
    //             .tmpl-federal-clean .bullet-list {
    //                 margin: 6px 0 0 0;
    //                 padding-left: 18px;
    //             }
    //             .tmpl-federal-clean .bullet-list li {
    //                 font-size: 13.5px;
    //                 line-height: 1.5;
    //                 color: #555555;
    //                 margin-bottom: 5px;
    //             }`
    // },
    {
        id: 'template10',
        name: 'Vibrant Sky Block Sidebar',
        html: `<div class="tmpl-sky-block">
            <div class="top-blue-header">
                <h1 class="res-name">Randal Webster</h1>
                <div class="res-contact">example@example.com &nbsp;|&nbsp; H: (555) 555-5555 &nbsp;|&nbsp; C: (555) 555-5555 &nbsp;|&nbsp; City, State 12345</div>
            </div>

            <div class="resume-body-grid">
                
                <div class="grid-section-row">
                    <div class="left-box-pane">
                        <div class="heading-outline-box">Professional Summary</div>
                    </div>
                    <div class="right-data-pane">
                        <p class="res-summary">Use this section as your "elevator pitch" - a concise explanation of why you're the right person for the job. Emphasize top skills (including personal traits that tell employers how you approach work), specific expertise, and any notable work experiences that match what the potential job needs. Keep this section to two to three sentences.</p>
                    </div>
                </div>

                <div class="grid-section-row">
                    <div class="left-box-pane">
                        <div class="heading-outline-box">Skills</div>
                    </div>
                    <div class="right-data-pane res-skills columns-skills-list">
                        <ul class="bullet-list no-margin-top">
                            <li>Review the job posting and pick out key skills.</li>
                            <li>Feature skills of your own that match these key skills.</li>
                            <li>Your resume format determines how large your skills section is.</li>
                        </ul>
                        <ul class="bullet-list no-margin-top">
                            <li>Feature skills that are valuable in your profession.</li>
                            <li>Present a combination of hard skills and soft skills.</li>
                            <li>For recommendations on top skills, visit our pages.</li>
                        </ul>
                    </div>
                </div>

                <div class="grid-section-row">
                    <div class="left-box-pane">
                        <div class="heading-outline-box">Work History</div>
                    </div>
                    <div class="right-data-pane res-experience experiences-stack">
                        <div class="job-log-item">
                            <div class="job-meta-header"><strong>Position</strong> / Company - Company City, Company State &nbsp;/&nbsp; 06.201 - Current</div>
                            <ul class="bullet-list">
                                <li>Work backward, with your current or most recent job first.</li>
                                <li>Focus on major responsibilities and work achievements rather than daily tasks.</li>
                                <li>Summarize your experience with three to five punchy bullet points for each job listing.</li>
                            </ul>
                        </div>

                        <div class="job-log-item">
                            <div class="job-meta-header"><strong>Position</strong> / Company - Company City, Company State &nbsp;/&nbsp; 06.201 - 05.201</div>
                            <ul class="bullet-list">
                                <li>Highlight skills and tasks that relate to the job you're applying to.</li>
                                <li>Use action verbs that give your achievements more power (e.g., "Managed team of 15 employees").</li>
                                <li>Give your accomplishments more weight by using numbers and metrics.</li>
                            </ul>
                        </div>

                        <div class="job-log-item">
                            <div class="job-meta-header"><strong>Position</strong> / Company - Company City, Company State &nbsp;/&nbsp; 07.201 - 06.201</div>
                            <ul class="bullet-list">
                                <li>If you're switching career fields, emphasize "transferable skills" that make sense in the new job.</li>
                                <li>Unless you're applying to a job that requires extensive experience, limit your work history to the last ten years.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>`,
        style: `.tmpl-sky-block {
                    font-family: Arial, Helvetica, sans-serif;
                    background-color: #ffffff;
                    color: #555555;
                    max-width: 800px;
                    margin: auto;
                    box-sizing: border-box;
                    padding-bottom: 50px;
                }

                /* Full-width colored header banner */
                .tmpl-sky-block .top-blue-header {
                    background-color: #158be4;
                    padding: 35px 40px;
                    text-align: center;
                    color: #ffffff;
                }
                .tmpl-sky-block .res-name {
                    font-size: 38px;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin: 0 0 12px 0;
                }
                .tmpl-sky-block .res-contact {
                    font-size: 13.5px;
                    color: #e3f2fd;
                    letter-spacing: 0.3px;
                }

                /* Content Layout Base System Grid */
                .tmpl-sky-block .resume-body-grid {
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    gap: 35px;
                }
                .tmpl-sky-block .grid-section-row {
                    display: grid;
                    grid-template-columns: 190px 1fr;
                    gap: 30px;
                }

                /* Left box frame label setup */
                .tmpl-sky-block .left-box-pane {
                    padding-top: 2px;
                }
                .tmpl-sky-block .heading-outline-box {
                    border: 1px solid #7f8c8d;
                    padding: 10px;
                    font-size: 13px;
                    color: #333333;
                    text-transform: uppercase;
                    font-weight: bold;
                    letter-spacing: 0.5px;
                    text-align: center;
                    min-height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    line-height: 1.3;
                }

                /* Right panel layout rules */
                .tmpl-sky-block .right-data-pane {
                    font-size: 13.5px;
                    line-height: 1.5;
                    color: #555555;
                    text-align: left;
                }
                .tmpl-sky-block p {
                    margin: 0;
                    text-align: justify;
                }

                /* Stack layouts for list modules */
                .tmpl-sky-block .experiences-stack {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .tmpl-sky-block .job-meta-header {
                    font-size: 13.5px;
                    color: #333333;
                    margin-bottom: 4px;
                }

                /* Special layout rules for parallel double bullet columns inside skills */
                .tmpl-sky-block .columns-skills-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }

                /* Standard bullet tracking parameters */
                .tmpl-sky-block .bullet-list {
                    margin: 5px 0 0 0;
                    padding-left: 16px;
                }
                .tmpl-sky-block .bullet-list.no-margin-top {
                    margin-top: 0;
                }
                .tmpl-sky-block .bullet-list li {
                    font-size: 13px;
                    line-height: 1.5;
                    color: #555555;
                    margin-bottom: 5px;
                }`
    }
];
