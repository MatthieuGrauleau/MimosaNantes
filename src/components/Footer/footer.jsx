// src/components/Footer/footer.jsx
import React from "react";
import { useIntersectionObserver } from "../../utils/animationUtils";
import "./footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faCode, 
  faLaptopCode,
  faCopyright
} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const [footerRef, isFooterVisible] = useIntersectionObserver();

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      ref={footerRef}
      className={`footer ${isFooterVisible ? 'animate-fadeInUp' : 'invisible'}`}
    >
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Mimosa</h3>
            <p>Café • Restaurant • Brunch</p>
            <p>7 rue Bon Secours, 44000 Nantes</p>
            <p>Ouvert tous les jours de 11h30 à 15h</p>
          </div>
          
          <div className="footer-section">
            <h3>Liens rapides</h3>
            <ul>
              <li><a href="#about">Notre histoire</a></li>
              <li><a href="#valeurs">Nos valeurs</a></li>
              <li><a href="#galerie">Galerie</a></li>
              <li><a href="#avis">Avis clients</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Nous suivre</h3>
            <p>Restez connectés pour découvrir nos dernières créations et actualités</p>
            <div className="social-links">
              <a href="https://www.instagram.com/mimosanantes" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/people/Mimosa-Brunch-P%C3%A2tisseries/61574192960387/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <FontAwesomeIcon icon={faCopyright} /> {currentYear} Mimosa Nantes. Tous droits réservés.
          </div>
          
          <div className="developer-credit">
            <p>
              Conçu avec <FontAwesomeIcon icon={faHeart} className="heart-icon" /> par 
              <a href="https://grauleau-matthieu-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="developer-link">
                <FontAwesomeIcon icon={faCode} /> Matthieu Grauleau <FontAwesomeIcon icon={faLaptopCode} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;