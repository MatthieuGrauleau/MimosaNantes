import React from "react";
import { useIntersectionObserver } from "../../utils/animationUtils";
import "./contact.scss";

function Contact() {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [mapRef, isMapVisible] = useIntersectionObserver();
  const [infoRef, isInfoVisible] = useIntersectionObserver();
  const [socialRef, isSocialVisible] = useIntersectionObserver();

  return (
    <section className="contact" id="contact">
      <div 
        ref={titleRef}
        className={`contact-header ${isTitleVisible ? 'animate-fadeInDown' : 'invisible'}`}
      >
        <h1>Nous <span className="highlight-title">Contacter</span></h1>
        <p className="contact-subtitle">Venez nous découvrir ou contactez-nous</p>
      </div>

      <div className="contact-container">
        <div 
          ref={mapRef} 
          className={`contact-map ${isMapVisible ? 'animate-fadeInLeft' : 'invisible'}`}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.1105766902054!2d-1.5563!3d47.2135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eea48c149fbd%3A0x8f4e4b1919620a61!2s7%20Rue%20Bon%20Secours%2C%2044000%20Nantes!5e0!3m2!1sfr!2sfr!4v1709292033098!5m2!1sfr!2sfr" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte de localisation Mimosa"
          ></iframe>
        </div>
        
        <div 
          ref={infoRef}
          className={`contact-info ${isInfoVisible ? 'animate-fadeInRight' : 'invisible'}`}
        >
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info-content">
              <h3>Adresse</h3>
              <p>7 rue Bon Secours<br/>44000 Nantes<br/>Arrêt de tram: Bouffay</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="info-content">
              <h3>Téléphone</h3>
              <p><a href="tel:0622323872">06 22 32 38 72</a></p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="info-content">
              <h3>Horaires</h3>
              <p>Du Ludni au Dimanche<br/>De 11h30 à 15h</p>
            </div>
          </div>
          
          <div 
            ref={socialRef}
            className={`social-links ${isSocialVisible ? 'animate-fadeInUp' : 'invisible'}`}
          >
            <h3>Suivez-nous</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/mimosanantes" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/mimosanantes" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;