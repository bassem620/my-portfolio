import React, { useEffect, useState } from 'react'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Nav = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    const toggleMobileMenu = _ => setMobileMenuActive(!mobileMenuActive);
    const handleNavLinkClick = (link) => setActiveLink(link);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight * 0.5 && window.scrollY < sectionTop + sectionHeight * 0.5) {
                    setActiveLink(section.getAttribute('id'));
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <div className={`nav ${mobileMenuActive ? 'active' : ''}`}>
        <div className="container">
            <div className="navBox">
                <div className="navTitle">BASSEM</div>
                <div className="navLinks">
                    <a
                    href='#home'
                    className={`navLink ${activeLink === 'home' ? 'active' : ''}`}
                    onClick={ _ => handleNavLinkClick('home')}
                    >
                    Home
                    </a>
                    <a
                    href='#about'
                    className={`navLink ${activeLink === 'about' ? 'active' : ''}`}
                    onClick={ _ => handleNavLinkClick('about')}
                    >
                    About
                    </a>
                    <a
                    href='#skills'
                    className={`navLink ${activeLink === 'skills' ? 'active' : ''}`}
                    onClick={ _ => handleNavLinkClick('skills')}
                    >
                    Skills
                    </a>
                    <a
                    href='#projects'
                    className={`navLink ${activeLink === 'projects' ? 'active' : ''}`}
                    onClick={ _ => handleNavLinkClick('projects')}
                    >
                    Projects
                    </a>
                    <a
                    href='#experience'
                    className={`navLink ${activeLink === 'experience' ? 'active' : ''}`}
                    onClick={ _ => handleNavLinkClick('experience')}
                    >
                    Experience
                    </a>
                    <a
                    href='#contact'
                    className={`navLink ${activeLink === 'contact' ? 'active' : ''}`}
                    onClick={ _ => handleNavLinkClick('contact')}
                    >
                    Contact
                    </a>
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
