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

  return (
    <header className={`${headerClass} ${isLoaded ? 'animate-fadeInDown' : ''}`}>
      <section className="header">
        <h1 className={`brand ${isLoaded ? 'animate-fadeInLeft' : 'invisible'}`}>Mimosa</h1>
        <div className={`${menuBtnClass} ${isLoaded ? 'animate-fadeIn' : 'invisible'}`} onClick={toggleMenu}></div>
        <nav className={`${navigationClass} navigation ${isLoaded ? 'animate-fadeIn' : 'invisible'}`}>
          <ul className="nav">
            {['Histoire', 'Valeurs', 'Carte', 'Gallerie', 'Avis', 'Contact'].map((item, index) => (
              <li key={item} className={`nav-item ${isLoaded ? `animate-fadeInDown delay-${index * 100}` : 'invisible'}`}>
                <a 
                  href={item === 'Carte' ? menupdf : `#${item.toLowerCase()}`} 
                  target={item === 'Carte' ? "_blank" : ""} 
                  rel={item === 'Carte' ? "noopener noreferrer" : ""} 
                  onClick={closeMenu}
                >
                  {item}
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