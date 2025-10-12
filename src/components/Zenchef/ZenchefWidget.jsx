// src/components/Zenchef/ZenchefWidget.jsx
import { useEffect } from 'react';

function ZenchefWidget() {
  useEffect(() => {
    // Charger le script Zenchef une seule fois
    const script = document.getElementById('zenchef-sdk');
    
    if (!script) {
      const newScript = document.createElement('script');
      newScript.id = 'zenchef-sdk';
      newScript.src = 'https://sdk.zenchef.com/v1/sdk.min.js';
      newScript.async = true;
      newScript.onload = () => {
        // Initialiser le widget une fois que le script est chargé
        if (window.ZenchefWidget) {
          window.ZenchefWidget.init();
        }
      };
      document.body.appendChild(newScript);
    } else {
      // Si le script est déjà chargé, on réinitialise le widget
      if (window.ZenchefWidget) {
        window.ZenchefWidget.init();
      }
    }
  }, []);

  return (
    <div
      className="zc-widget-config"
      data-restaurant="379069"
      data-open="2000"
      id="zenchef-widget"
      role="region"
      aria-label="Widget de réservation Zenchef pour Mimosa restaurant"
      title="Réservez votre table chez Mimosa"
    />
  );
}

export default ZenchefWidget;