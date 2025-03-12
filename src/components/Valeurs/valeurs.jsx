import React, { useState, useEffect } from "react";
import { useIntersectionObserver } from "../../utils/animationUtils";

function Valeurs() {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [cardRef1, isCard1Visible] = useIntersectionObserver();
  const [cardRef2, isCard2Visible] = useIntersectionObserver();
  const [cardRef3, isCard3Visible] = useIntersectionObserver();
  const [cardRef4, isCard4Visible] = useIntersectionObserver();
  const [isMobile, setIsMobile] = useState(false);
  
  // Détection des appareils mobiles
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Vérifier au chargement initial
    checkIsMobile();
    
    // Ajouter un écouteur d'événement pour les changements de taille
    window.addEventListener('resize', checkIsMobile);
    
    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section className="valeurs" id="valeurs">
      <div 
        ref={headerRef}
        className={`valeurs-header ${isHeaderVisible ? 'animate-fadeInDown' : 'invisible'}`}
      >
        <h1>Nos <span className="highlight-title">Valeurs</span></h1>
      </div>
      <div className="valeurs-container">
        <div 
          ref={cardRef1}
          className={`valeur-card ${isCard1Visible ? 'animate-zoomIn' : 'invisible'} ${!isMobile ? 'delay-100' : ''}`}
        >
          <div className="valeur-circle">F</div>
          <h2>Fraîcheur</h2>
          <p>On ne badine pas avec les ingrédients. On se fournit chez les voisins et on mise sur la fraîcheur. La carte change à chaque saison !</p>
        </div>
        <div 
          ref={cardRef2}
          className={`valeur-card ${isCard2Visible ? 'animate-zoomIn' : 'invisible'} ${!isMobile ? 'delay-200' : ''}`}
        >
          <div className="valeur-circle">C</div>
          <h2>Créativité</h2>
          <p>On adore jouer avec les saveurs et les associations audacieuses et créer des plats uniques qui feront danser vos papilles !</p>
        </div>
        <div 
          ref={cardRef3}
          className={`valeur-card ${isCard3Visible ? 'animate-zoomIn' : 'invisible'} ${!isMobile ? 'delay-300' : ''}`}
        >
          <div className="valeur-circle">N</div>
          <h2>Naturel</h2>
          <p>On dit non aux aliments transformés et aux produits chimiques. La simplicité est au cœur de notre cuisine.</p>
        </div>
        <div 
          ref={cardRef4}
          className={`valeur-card ${isCard4Visible ? 'animate-zoomIn' : 'invisible'} ${!isMobile ? 'delay-400' : ''}`}
        >
          <div className="valeur-circle">M</div>
          <h2>Maison</h2>
          <p>Tout est fait par nos petites mains. Chaque plat est préparé avec passion et soin par nos cuisiniers passionnés, avec des techniques artisanales.</p>
        </div>
      </div>
    </section>
  );
}

export default Valeurs;