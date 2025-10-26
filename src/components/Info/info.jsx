import React from "react";
import { useIntersectionObserver } from "../../utils/animationUtils";

function Info() {
  const [info1Ref, isInfo1Visible] = useIntersectionObserver();
  const [info2Ref, isInfo2Visible] = useIntersectionObserver();
  const [info3Ref, isInfo3Visible] = useIntersectionObserver();

  return (
    <section className='info' id="info" aria-label="Coordonnées et horaires">
        <div 
          ref={info1Ref}
          className={isInfo1Visible ? 'animate-fadeInUp' : 'invisible'}
        >
            <h2>Contactez-nous</h2>
            <p>
              <a href="tel:+33749986884" className="phone-link" title="Appeler Mimosa Nantes">
                07 49 98 68 84
              </a>
            </p>
            <p>Réservez votre table pour un brunch à Nantes</p>
        </div>
        
        <div 
          ref={info2Ref}
          className={isInfo2Visible ? 'animate-fadeInUp delay-200' : 'invisible'}
        >
            <h2>Notre adresse à Nantes</h2>
            <address>
              <p>
                <strong>Mimosa Restaurant Brunch</strong><br />
                2 bis Rue Fénelon<br />
                44000 Nantes<br />
                <span className="metro-info">🚊 Arrêt de tram: Commerce (lignes 2 et 3)</span>
              </p>
            </address>
        </div>
        
        <div 
          ref={info3Ref}
          className={isInfo3Visible ? 'animate-fadeInUp delay-400' : 'invisible'}
        >
            <h2>Horaires d'ouverture</h2>
            <p>
              <strong>Ouvert tous les jours</strong><br />
              Lundi au Dimanche<br />
              De 11h30 à 15h<br />
              <span className="service-info">Service brunch continu</span>
            </p>
        </div>
    </section>
  );
}

export default Info;