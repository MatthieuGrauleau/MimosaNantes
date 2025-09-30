import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import menupdf from "../../assets/img/menu.jpg";

function Banner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    const img = new Image();
    img.src = logo;
    img.onload = () => setIsLoaded(true);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='banner' aria-label="Bannière principale Mimosa Nantes">
      <div className="overlay">
        <img 
          src={logo} 
          alt="Logo Mimosa - Restaurant Brunch Nantes Bouffay" 
          className={`logo ${isLoaded ? 'animate-zoomIn' : 'invisible'}`}
          width="600"
          height="400"
        />
        
        {/* Titre caché pour le SEO mais présent dans le DOM */}
        <h1 className="sr-only">
          Mimosa - Restaurant Brunch à Nantes | Café et Pâtisserie Maison
        </h1>
        
        <div className="button-container">
          <a 
            href={menupdf} 
            className={`button ${isLoaded ? 'animate-fadeInUp delay-300' : 'invisible'}`} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Consulter notre carte de brunch et pâtisseries"
            title="Voir la carte Mimosa - Brunch Nantes"
          >
            Notre carte
          </a>
          <a 
            href="https://mimosabrunch.sumupstore.com/" 
            className={`button commander ${isLoaded ? 'animate-fadeInUp delay-400' : 'invisible'}`} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Commander en ligne votre brunch Mimosa"
            title="Commander un brunch à Nantes - Mimosa"
          >
            Commander
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;