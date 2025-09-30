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
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section 
      className="valeurs" 
      id="valeurs"
      aria-label="Les valeurs du restaurant Mimosa"
    >
      <div 
        ref={headerRef}
        className={`valeurs-header ${isHeaderVisible ? 'animate-fadeInDown' : 'invisible'}`}
      >
        <h2>Nos <span className="highlight-title">Valeurs</span></h2>
        <p className="valeurs-subtitle">
          Ce qui fait la différence de notre restaurant brunch à Nantes
        </p>
      </div>
      <div className="valeurs-container">
        <article 
          ref={cardRef1}
          className={`valeur-card ${isCard1Visible ? 'animate-zoomIn' : 'invisible'} ${!isMobile ? 'delay-100' : ''}`}
          itemScope 
          itemType="https://schema.org/Thing"
        >
          <div className="valeur-circle" aria-hidden="true">F</div>
          <h3 itemProp="name">Fraîcheur</h3>
          <p itemProp="description">
            On ne badine pas avec les ingrédients. On se fournit chez les producteurs locaux de Nantes et on mise sur la fraîcheur. La carte de notre restaurant change à chaque saison !
          </p>
        </article>
        
        <article 
          ref={cardRef2}
          className={`valeur-card ${isCard2Visible ? 'animate-zoomIn' : 'invisible'} ${!isMobile ? 'delay-200' : ''}`}
          itemScope 
          itemType="https://schema.org/Thing"
        >
          <div className="valeur-circle" aria-hidden="true">C</div>
          <h3 itemProp="name">Créativité</h3>
          <p itemProp="description">
            On adore jouer avec les saveurs et les associations audacieuses dans nos brunchs. Nous créons des plats uniques qui feront danser vos papilles !
          </p>
        </article>
        
        <article 
          ref={cardRef3}
          className={`valeur-card ${isCard3Visible ? 'animate-zoomIn' : 'invisible'} ${!isMobile ? 'delay-300' : ''}`}
          itemScope 
          itemType="https://schema.org/Thing"
        >
          <div className="valeur-circle" aria-hidden="true">N</div>
          <h3 itemProp="name">Naturel</h3>
          <p itemProp="description">
            On dit non aux aliments transformés et aux produits chimiques dans notre restaurant brunch. La simplicité et le naturel sont au cœur de notre cuisine.
          </p>
        </article>
        
        <article 
          ref={cardRef4}
          className={`valeur-card ${isCard4Visible ? 'animate-zoomIn' : 'invisible'} ${!isMobile ? 'delay-400' : ''}`}
          itemScope 
          itemType="https://schema.org/Thing"
        >
          <div className="valeur-circle" aria-hidden="true">M</div>
          <h3 itemProp="name">Maison</h3>
          <p itemProp="description">
            Tout est fait par nos petites mains. Chaque plat de brunch et chaque pâtisserie sont préparés avec passion et soin par nos cuisiniers, avec des techniques artisanales.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Valeurs;