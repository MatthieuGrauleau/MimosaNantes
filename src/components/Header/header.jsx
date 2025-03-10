// Header.js

import React, { useState, useEffect } from "react";
import "./header.scss";
import menupdf from "../../assets/img/menu.jpg";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    closeMenu();
  };
  
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculer la position pour centrer la section dans la fenêtre
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      const offset = section.offsetTop - ((windowHeight - sectionHeight) / 2);
      
      // Scroll vers la position calculée
      window.scrollTo({
        top: offset > 0 ? offset : 0, // Éviter les valeurs négatives
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    // Ajouter une animation au chargement de la page
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const menuBtnClass = menuActive ? "menu-btn active" : "menu-btn";
  const navigationClass = menuActive ? "navigation active" : "navigation";
  const headerClass = isScrolled ? "header fixed" : "header";

  // Map des liens de navigation avec leurs href correspondants
  const navLinks = [
    { text: 'Histoire', href: '#about', sectionId: 'about' },
    { text: 'Valeurs', href: '#valeurs', sectionId: 'valeurs' },
    { text: 'Carte', href: menupdf, target: "_blank", rel: "noopener noreferrer" },
    { text: 'Gallerie', href: '#gallerie', sectionId: 'gallerie' },
    { text: 'Avis', href: '#avis', sectionId: 'avis' },
    { text: 'Contact', href: '#contact', sectionId: 'contact' }
  ];

  return (
    <header className={`${headerClass} ${isLoaded ? 'animate-fadeInDown' : ''}`}>
      <section className="header">
        <h1 className={`brand ${isLoaded ? 'animate-fadeInLeft' : 'invisible'}`}>
          <a href="/" onClick={scrollToTop} style={{ textDecoration: 'none', color: 'inherit' }}>Mimosa</a>
        </h1>
        <div className={`${menuBtnClass} ${isLoaded ? 'animate-fadeIn' : 'invisible'}`} onClick={toggleMenu}></div>
        <nav className={`${navigationClass} navigation ${isLoaded ? 'animate-fadeIn' : 'invisible'}`}>
          <ul className="nav">
            {navLinks.map((link, index) => (
              <li key={link.text} className={`nav-item ${isLoaded ? `animate-fadeInDown delay-${index * 100}` : 'invisible'}`}>
                <a 
                  href={link.href}
                  target={link.target || ""}
                  rel={link.rel || ""}
                  onClick={link.sectionId ? (e) => scrollToSection(e, link.sectionId) : link.href.startsWith('#') ? closeMenu : null}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;