import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import menupdf from "../../assets/img/menu.jpg";

function Banner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ajouter un petit délai pour que l'animation soit visible
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Ajout d'un écouteur d'événement pour s'assurer que l'image est chargée
    const img = new Image();
    img.src = logo;
    img.onload = () => setIsLoaded(true);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='banner'>
      <div className="overlay">
        <img 
          src={logo} 
          alt="Logo Mimosa" 
          className={`logo ${isLoaded ? 'animate-zoomIn' : 'invisible'}`}
        />
        <div className="button-container">
          <a 
            href={menupdf} 
            className={`button ${isLoaded ? 'animate-fadeInUp delay-300' : 'invisible'}`} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Voir notre carte"
          >
            Notre carte
          </a>
          <a 
            href="https://mimosabrunch.sumupstore.com/" 
            className={`button commander ${isLoaded ? 'animate-fadeInUp delay-400' : 'invisible'}`} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Commander en ligne"
          >
            Commander
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;