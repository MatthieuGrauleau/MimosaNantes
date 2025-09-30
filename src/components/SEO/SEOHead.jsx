// src/components/SEO/SEOHead.jsx
import { Helmet } from 'react-helmet-async';
import logo from '../../assets/img/logo.png';

function SEOHead() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Mimosa",
    "image": [
      "https://mimosanantes.netlify.app/static/media/logo.png",
      "https://mimosanantes.netlify.app/static/media/slidertest.jpg"
    ],
    "description": "Restaurant brunch et café à Nantes. Découvrez nos brunchs créatifs et pâtisseries maison dans le quartier Bouffay. Produits frais et locaux, ouvert 7j/7.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7 rue Bon Secours",
      "addressLocality": "Nantes",
      "postalCode": "44000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.2123,
      "longitude": -1.5568
    },
    "url": "https://mimosanantes.netlify.app",
    "telephone": "+33749986884",
    "servesCuisine": ["Français", "Brunch", "Café", "Pâtisserie"],
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:30",
        "closes": "15:00"
      }
    ],
    "acceptsReservations": "True",
    "menu": "https://mimosanantes.netlify.app/static/media/menu.jpg",
    "sameAs": [
      "https://www.instagram.com/mimosanantes",
      "https://www.facebook.com/people/Mimosa-Brunch-P%C3%A2tisseries/61574192960387/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  };

  return (
    <Helmet>
      {/* Titre optimisé pour le SEO local */}
      <title>Mimosa Nantes - Brunch & Restaurant | Bouffay Centre-Ville</title>
      
      {/* Meta descriptions */}
      <meta 
        name="description" 
        content="🥐 Restaurant brunch Mimosa à Nantes ⭐ Produits frais et locaux, pâtisseries maison. Ouvert 7j/7 de 11h30 à 15h près du tram Bouffay. Réservez votre table !" 
      />
      
      {/* Mots-clés stratégiques */}
      <meta 
        name="keywords" 
        content="brunch Nantes, restaurant Nantes, brunch Bouffay, café Nantes, pâtisserie Nantes, brunch centre-ville Nantes, restaurant Bouffay, brunch weekend Nantes, meilleur brunch Nantes, brunch dimanche Nantes" 
      />
      
      {/* Géolocalisation précise */}
      <meta name="geo.region" content="FR-44" />
      <meta name="geo.placename" content="Nantes" />
      <meta name="geo.position" content="47.2123;-1.5568" />
      <meta name="ICBM" content="47.2123, -1.5568" />
      
      {/* Open Graph pour Facebook */}
      <meta property="og:type" content="restaurant" />
      <meta property="og:title" content="Mimosa - Brunch Restaurant à Nantes | Bouffay" />
      <meta 
        property="og:description" 
        content="Restaurant brunch créatif à Nantes. Produits frais, pâtisseries maison. Ouvert 7j/7 de 11h30 à 15h près du tram Bouffay." 
      />
      <meta property="og:url" content="https://mimosanantes.netlify.app" />
      <meta property="og:image" content="https://mimosanantes.netlify.app/static/media/logo.png" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Mimosa Nantes" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mimosa - Brunch Restaurant à Nantes" />
      <meta 
        name="twitter:description" 
        content="Restaurant brunch créatif à Nantes. Produits frais et locaux. Ouvert 7j/7 🥐☕" 
      />
      <meta name="twitter:image" content="https://mimosanantes.netlify.app/static/media/logo.png" />
      
      {/* Favicon */}
      <link rel="icon" href={logo} />
      
      {/* Fonts préchargées */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lustria&family=Montserrat:wght@100;300;400&display=swap"
        rel="stylesheet"
      />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://mimosanantes.netlify.app" />
      
      {/* Données structurées JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Langue */}
      <html lang="fr" />
      
      {/* Viewport et compatibilité mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#B0714B" />
    </Helmet>
  );
}

export default SEOHead;