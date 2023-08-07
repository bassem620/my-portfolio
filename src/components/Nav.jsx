import React, { useState } from 'react'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Nav = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const toggleMobileMenu = _ => setMobileMenuActive(!mobileMenuActive);
    const handleNavLinkClick = (link) => setActiveLink(link);

    return (
    <div className={`nav ${mobileMenuActive ? 'active' : ''}`}>
        <div className="container">
            <div className="navBox">
                <div className="navTitle">BASSEM</div>
                <div className="navLinks">
                    <div
                    className={`navLink ${activeLink === 'Home' ? 'active' : ''}`}
                    onClick={ _ => handleNavLinkClick('Home')}
                    >
                    Home
                    </div>
                    <div
                    className={`navLink ${activeLink === 'About' ? 'active' : ''}`}
                    onClick={ _ => handleNavLinkClick('About')}
                    >
                    About
                    </div>
                    <div
                    className={`navLink ${activeLink === 'Skills' ? 'active' : ''}`}
                    onClick={ _ => handleNavLinkClick('Skills')}
                    >
                    Skills
                    </div>
                    <div
                    className={`navLink ${activeLink === 'Projects' ? 'active' : ''}`}
                    onClick={ _ => handleNavLinkClick('Projects')}
                    >
                    Projects
                    </div>
                    <div
                    className={`navLink ${activeLink === 'Experience' ? 'active' : ''}`}
                    onClick={ _ => handleNavLinkClick('Experience')}
                    >
                    Experience
                    </div>
                    <div
                    className={`navLink ${activeLink === 'Contact' ? 'active' : ''}`}
                    onClick={ _ => handleNavLinkClick('Contact')}
                    >
                    Contact
                    </div>
                </div>
                <div className="mobileMenuToggle d-none" onClick={toggleMobileMenu}>
                    <MenuRoundedIcon />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Nav;
