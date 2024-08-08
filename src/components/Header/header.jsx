// Header.js

import React, { useState, useEffect } from "react";
import "./header.scss";
import menupdf from "../../assets/img/menu.jpg";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuBtnClass = menuActive ? "menu-btn active" : "menu-btn";
  const navigationClass = menuActive ? "navigation active" : "navigation";
  const headerClass = isScrolled ? "header fixed" : "header";

  return (
    <header className={headerClass}>
      <section className="header">
        <h1 className="brand">Mimosa</h1>
        <div className={menuBtnClass} onClick={toggleMenu}></div>
        <nav className={`${navigationClass} navigation`}>
          <ul className="nav">
            <li>
              <a href="#about" onClick={closeMenu}>
                Chef
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                Valeurs 
              </a>
            </li>
            <li>
              <a href={menupdf} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                Carte
              </a>
            </li>
            <li>
              <a href="#work" onClick={closeMenu}>
                Equipe
              </a>
            </li>
            <li>
              <a href="#work" onClick={closeMenu}>
                Gallerie
              </a>
            </li>
            <li>
              <a href="#work" onClick={closeMenu}>
                Avis
              </a>
            </li>
            <li>
              <a href="#work" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
