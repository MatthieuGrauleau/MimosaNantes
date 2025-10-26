import React, { useEffect } from "react";
import { useIntersectionObserver } from "../../utils/animationUtils";
import "./contact.scss";

// Import des icônes Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faClock, 
  faLocationDot, 
  faPhoneVolume, 
  faCalendarAlt, 
  faHashtag,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
// Pour Instagram et Facebook qui sont des marques
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [mapRef, isMapVisible] = useIntersectionObserver();
  const [infoRef, isInfoVisible] = useIntersectionObserver();
  const [socialRef, isSocialVisible] = useIntersectionObserver();
  const [zenchefRef, isZenchefVisible] = useIntersectionObserver();

  // Charger le script Zenchef
  useEffect(() => {
    const script = document.getElementById('zenchef-sdk');
    
    if (!script) {
      const newScript = document.createElement('script');
      newScript.id = 'zenchef-sdk';
      newScript.src = 'https://sdk.zenchef.com/v1/sdk.min.js';
      newScript.async = true;
      newScript.onload = () => {
        if (window.ZenchefWidget) {
          window.ZenchefWidget.init();
        }
      };
      document.body.appendChild(newScript);
    } else {
      if (window.ZenchefWidget) {
        window.ZenchefWidget.init();
      }
    }
  }, []);

  // Fonction pour ouvrir la page de réservation Zenchef
  const handleZenchefClick = () => {
    window.open(
      'https://bookings.zenchef.com/results?rid=379069&pid=1001',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="contact" id="contact">
      <div 
        ref={titleRef}
        className={`contact-header ${isTitleVisible ? 'animate-fadeInDown' : 'invisible'}`}
      >
        <h1>Nous <span className="highlight-title">Contacter</span></h1>
        <p className="contact-subtitle">Venez nous découvrir ou réservez votre table</p>
      </div>

      <div className="contact-container">
        <div 
          ref={mapRef} 
          className={`contact-map ${isMapVisible ? 'animate-fadeInLeft' : 'invisible'}`}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.5!2d-1.5547!3d47.2180!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eea48c149fbd%3A0x8f4e4b1919620a61!2s2%20bis%20Rue%20F%C3%A9nelon%2C%2044000%20Nantes!5e0!3m2!1sfr!2sfr!4v1709292033098!5m2!1sfr!2sfr" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte de localisation Mimosa restaurant brunch à Nantes Fénelon"
          ></iframe>
        </div>
        
        <div 
          ref={infoRef}
          className={`contact-info ${isInfoVisible ? 'animate-fadeInRight' : 'invisible'}`}
        >
          <div className="info-item">
            <div className="info-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="info-content">
              <h3>
                <FontAwesomeIcon icon={faLocationDot} /> Adresse
              </h3>
              <p>2 bis Rue Fénelon<br/>44000 Nantes<br/>Arrêt de tram: Commerce</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="info-content">
              <h3>
                <FontAwesomeIcon icon={faPhoneVolume} /> Téléphone
              </h3>
              <p><a href="tel:+33749986884" title="Appeler Mimosa pour réserver">07 49 98 68 84</a></p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="info-content">
              <h3>
                <FontAwesomeIcon icon={faCalendarAlt} /> Horaires
              </h3>
              <p>Du Lundi au Dimanche<br/>De 11h30 à 15h</p>
            </div>
          </div>
          
          <div 
            ref={socialRef}
            className={`social-links ${isSocialVisible ? 'animate-fadeInUp' : 'invisible'}`}
          >
            <h3>
              <FontAwesomeIcon icon={faHashtag} /> Suivez-nous
            </h3>
            <div className="social-icons">
              <a 
                href="https://www.instagram.com/mimosanantes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                title="Suivre Mimosa sur Instagram"
                aria-label="Instagram Mimosa"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a 
                href="https://www.facebook.com/people/Mimosa-Brunch-P%C3%A2tisseries/61574192960387/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                title="Suivre Mimosa sur Facebook"
                aria-label="Facebook Mimosa"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section Zenchef - Réservation */}
      <div 
        ref={zenchefRef}
        className={`zenchef-container ${isZenchefVisible ? 'animate-fadeInUp' : 'invisible'}`}
      >
        <div className="zenchef-header">
          <FontAwesomeIcon icon={faCalendarCheck} className="zenchef-icon" />
          <h2>Réservez votre table en ligne</h2>
          <p>Réservation directe chez Mimosa - Restaurant brunch à Nantes</p>
          <button 
            className="zenchef-button"
            onClick={handleZenchefClick}
            title="Ouvrir le formulaire de réservation Zenchef"
            aria-label="Ouvrir la réservation en ligne"
            type="button"
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Réserver maintenant
          </button>
        </div>
        
        <div 
          className="zc-widget-config"
          data-restaurant="379069"
          data-open="2000"
          id="zenchef-widget"
          role="region"
          aria-label="Widget de réservation Zenchef pour Mimosa restaurant"
          title="Réservez votre table chez Mimosa"
        />
      </div>
    </section>
  );
}

export default Contact;