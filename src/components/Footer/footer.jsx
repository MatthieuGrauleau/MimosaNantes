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
      itemScope 
      itemType="https://schema.org/Restaurant"
    >
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h3 itemProp="name">Mimosa Nantes</h3>
            <p itemProp="servesCuisine">Restaurant • Brunch • Café • Pâtisserie</p>
            <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">7 rue Bon Secours</span>, 
              <span itemProp="postalCode">44000</span> 
              <span itemProp="addressLocality">Nantes</span>
            </address>
            <p itemProp="openingHours" content="Mo-Su 11:30-15:00">
              Ouvert tous les jours de 11h30 à 15h
            </p>
            <p>
              <a href="tel:+33749986884" itemProp="telephone" title="Téléphone Mimosa">
                📞 07 49 98 68 84
              </a>
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Navigation</h3>
            <nav aria-label="Liens rapides">
              <ul>
                <li><a href="#about" title="Découvrez l'histoire de Mimosa">Notre histoire</a></li>
                <li><a href="#valeurs" title="Les valeurs du restaurant Mimosa">Nos valeurs</a></li>
                <li><a href="#galerie" title="Photos du restaurant et des plats">Galerie photos</a></li>
                <li><a href="#avis" title="Avis clients sur Mimosa Nantes">Avis clients</a></li>
                <li><a href="#contact" title="Contactez le restaurant Mimosa">Contact</a></li>
              </ul>
            </nav>
          </div>
          
          <div className="footer-section">
            <h3>Suivez-nous</h3>
            <p>Découvrez nos nouveaux brunchs et créations pâtissières</p>
            <nav className="social-links" aria-label="Réseaux sociaux">
              <a 
                href="https://www.instagram.com/mimosanantes" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram Mimosa Nantes - Photos brunch"
                itemProp="sameAs"
              >
                📸 Instagram
              </a>
              <a 
                href="https://www.facebook.com/people/Mimosa-Brunch-P%C3%A2tisseries/61574192960387/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Facebook Mimosa Nantes - Actualités"
                itemProp="sameAs"
              >
                👍 Facebook
              </a>
            </nav>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <FontAwesomeIcon icon={faCopyright} /> {currentYear} Mimosa Nantes - Restaurant Brunch. Tous droits réservés.
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