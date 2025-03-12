// Header.js

import React, { useState, useEffect, useCallback } from "react";
import "./header.scss";
import menupdf from "../../assets/img/menu.jpg";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  // Map des liens de navigation avec leurs href correspondants
  // Utilisation de useMemo pour éviter des re-renders inutiles
  const navLinks = React.useMemo(() => [
    { text: 'Histoire', href: '#about', sectionId: 'about' },
    { text: 'Valeurs', href: '#valeurs', sectionId: 'valeurs' },
    { text: 'Carte', href: menupdf, target: "_blank", rel: "noopener noreferrer" },
    { text: 'Gallerie', href: '#gallerie', sectionId: 'gallerie' },
    { text: 'Avis', href: '#avis', sectionId: 'avis' },
    { text: 'Contact', href: '#contact', sectionId: 'contact' }
  ], []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  // Utiliser useCallback pour la fonction handleScroll
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
    
    // Calculer la progression du scroll
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollPosition / windowHeight) * 100;
    setScrollProgress(scrolled);
    
    // Déterminer la section active
    const sections = navLinks.map(link => link.sectionId).filter(Boolean);
    
    // Trouver la section la plus proche du haut de la fenêtre
    let currentSection = '';
    let minDistance = Infinity;
    
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = sectionId;
        }
      }
    });
    
    setActiveSection(currentSection);
  }, [navLinks]);

  const handleResize = useCallback(() => {
    // Fermer le menu automatiquement si on passe en mode desktop
    if (window.innerWidth > 768) {
      setMenuActive(false);
    }
  }, []);

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
    // Exécuter handleScroll une fois au montage pour initialiser l'état
    handleScroll();
    
    // Ajouter les écouteurs d'événements
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Vérifier si on doit fermer le menu au chargement
    if (window.innerWidth > 768) {
      setMenuActive(false);
    }
    
    // Ajouter une animation au chargement de la page
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      // Nettoyer les écouteurs d'événements lors du démontage
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [handleScroll, handleResize]);

  const burgerClass = menuActive ? "menu-btn active" : "menu-btn";
  const navigationClass = menuActive ? "navigation active" : "navigation";
  const headerClass = isScrolled ? "header fixed" : "header";

  return (
    <header className={`${headerClass} ${isLoaded ? 'animate-fadeInDown' : ''}`}>
      <div className="scroll-progress">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
      
      <section className="header">
        <h1 className={`brand ${isLoaded ? 'animate-fadeInLeft' : 'invisible'}`}>
          <a href="/" onClick={scrollToTop} style={{ textDecoration: 'none', color: 'inherit' }}>Mimosa</a>
        </h1>
        
        <div className={`${burgerClass} ${isLoaded ? 'animate-fadeIn' : 'invisible'}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`${navigationClass} ${isLoaded ? 'animate-fadeIn' : 'invisible'}`}>
          <ul className="nav">
            {navLinks.map((link, index) => (
              <li key={link.text} 
                  className={`nav-item ${isLoaded ? `animate-fadeInDown delay-${index * 100}` : 'invisible'} ${link.sectionId === activeSection ? 'active' : ''}`}>
                <a 
                  href={link.href}
                  target={link.target || ""}
                  rel={link.rel || ""}
                  onClick={link.sectionId ? (e) => scrollToSection(e, link.sectionId) : link.href.startsWith('#') ? closeMenu : null}
                  className={link.sectionId === activeSection ? 'active' : ''}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      
      {menuActive && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
}

export default Header;