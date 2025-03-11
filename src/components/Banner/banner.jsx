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

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='banner'>
      <div className="overlay">
        <img 
          src={logo} 
          alt="Logo Mimosa" 
          className={`${isLoaded ? 'animate-zoomIn' : 'invisible'}`}
        />
        <div className="button-container">
          <a 
            href={menupdf} 
            className={`button ${isLoaded ? 'animate-fadeInUp delay-300' : 'invisible'}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Notre carte
          </a>
          <a 
            href="https://mimosabrunch.sumupstore.com/" 
            className={`button commander ${isLoaded ? 'animate-fadeInUp delay-400' : 'invisible'}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Commander
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;