import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../assets/images/logo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    const handleNavigate = (path) => {
        navigate(path);
        setMenuOpen(false); // Close dropdown when a link is clicked
    };

    return (
        <header data-component="header">
            <div className="main-cnt">
                {/* Left: Brand Logo & Title */}
                <div className="header-left" onClick={() => handleNavigate('/')}>
                    {/* <img className="header-logo" src={logo} alt="JAStify Studio Logo" /> */}
                    <span className="header-app-name">
                        <span style={{ color: '#ff3d3c', marginRight:'1px' }}>JAS</span>tify Studio
                    </span>
                </div>

                {/* Desktop Center Navigation (Visible on desktop screens) */}
                <nav className="header-nav-desktop">
                    <span 
                        className={`header-section-option ${isActive('/') ? 'active' : ''}`} 
                        onClick={() => handleNavigate('/')}
                    >
                        Home
                    </span>
                    <span 
                        className={`header-section-option ${isActive('/templates') ? 'active' : ''}`} 
                        onClick={() => handleNavigate('/templates')}
                    >
                        Templates
                    </span>
                    <span 
                        className={`header-section-option ${isActive('/about') ? 'active' : ''}`} 
                        onClick={() => handleNavigate('/about')}
                    >
                        About
                    </span>
                    <span 
                        className={`header-section-option ${isActive('/contact') ? 'active' : ''}`} 
                        onClick={() => handleNavigate('/contact')}
                    >
                        Contact
                    </span>
                </nav>

                {/* Right: Hamburger Button (Visible on mobile) */}
                <div className="header-right">
                    <button 
                        type="button"
                        className={`hamburger-btn ${menuOpen ? 'is-open' : ''}`}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu (Guaranteed to show below header on click) */}
            {menuOpen && (
                <div className="header-nav-mobile">
                    <span 
                        className={`header-section-option ${isActive('/') ? 'active' : ''}`} 
                        onClick={() => handleNavigate('/')}
                    >
                        Home
                    </span>
                    <span 
                        className={`header-section-option ${isActive('/templates') ? 'active' : ''}`} 
                        onClick={() => handleNavigate('/templates')}
                    >
                        Templates
                    </span>
                    <span 
                        className={`header-section-option ${isActive('/about') ? 'active' : ''}`} 
                        onClick={() => handleNavigate('/about')}
                    >
                        About
                    </span>
                    <span 
                        className={`header-section-option ${isActive('/contact') ? 'active' : ''}`} 
                        onClick={() => handleNavigate('/contact')}
                    >
                        Contact
                    </span>
                </div>
            )}
        </header>
    );
}

export default Header;