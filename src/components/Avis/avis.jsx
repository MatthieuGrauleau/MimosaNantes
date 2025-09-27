import React, { useState } from "react";
import "./avis.scss";

function Avis() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Fonction pour générer l'URL de l'avatar avec les initiales
  const generateAvatarUrl = (name) => {
    const initials = name.split(' ').map(word => word.charAt(0)).join('');
    const colors = ['9d4f16', 'efcd8d', 'B0714B', '8B4513', 'CD853F', 'A0522D', 'D2691E'];
    const colorIndex = name.length % colors.length;
    const backgroundColor = colors[colorIndex];
    
    return `https://ui-avatars.com/api/?name=${initials}&size=50&background=${backgroundColor}&color=fff&bold=true&rounded=true`;
  };

  // Collection de 30 avis récents (fin 2024 - début 2025) basés sur les vraies informations Mimosa
  const reviews = [
    {
      id: 1,
      name: "Sophie Martin",
      rating: 5,
      date: "Janvier 2025",
      text: "Quelle découverte ! J'ai adoré le crab roll et son pain brioché. L'ambiance végétale et intimiste est chaleureuse. Audrey et son équipe sont aux petits soins. Je recommande particulièrement les tartes aux fruits de saison."
    },
    {
      id: 2,
      name: "Thomas Dubois",
      rating: 5,
      date: "Janvier 2025",
      text: "Un vrai coup de cœur pour ce petit café-restaurant ! Le burrata toast était exceptionnel. Cuisine fraîche, créative et on sent la passion d'Audrey. J'y retourne dès que possible pour goûter le reste de la carte."
    },
    {
      id: 3,
      name: "Marie Leroy",
      rating: 4,
      date: "Décembre 2024",
      text: "Excellente adresse rue du Bon Secours à Nantes ! Cadre cosy avec beaucoup de verdure. Les desserts maison sont à tomber ! Attention, pas de réservation possible donc il faut parfois attendre."
    },
    {
      id: 4,
      name: "Pierre Moreau",
      rating: 5,
      date: "Décembre 2024",
      text: "Je suis un habitué maintenant, et je ne me lasse pas de la qualité des plats et de l'accueil chaleureux d'Audrey. L'avocado toast est parfait. Un endroit authentique où l'on se sent bien."
    },
    {
      id: 5,
      name: "Julie Rousseau",
      rating: 5,
      date: "Novembre 2024",
      text: "Ambiance cosy et chaleureuse, parfait pour un brunch entre amies. Ouvert du jeudi au mardi 11h30-15h. Les produits sont frais et de qualité, et l'équipe est aux petits soins. Une adresse incontournable !"
    },
    {
      id: 6,
      name: "Antoine Bernard",
      rating: 4,
      date: "Novembre 2024",
      text: "Très bon restaurant avec une carte originale et savoureuse. Le cadre végétal sur l'île Feydeau est magnifique et l'accueil excellent. Les prix sont corrects pour la qualité proposée."
    },
    {
      id: 7,
      name: "Camille Petit",
      rating: 5,
      date: "Octobre 2024",
      text: "J'adore ce petit coin de paradis ! Tout y est parfait : la décoration végétale, l'ambiance intimiste, la nourriture... C'est devenu mon endroit favori pour bruncher à Nantes."
    },
    {
      id: 8,
      name: "Laurent Garcia",
      rating: 5,
      date: "Octobre 2024",
      text: "Service impeccable et cuisine délicieuse ! Les plats végétariens sont créatifs et savoureux. Mention spéciale pour la limonade coco, un vrai délice. Belle découverte passée par le Magmaa !"
    },
    {
      id: 9,
      name: "Emma Durand",
      rating: 4,
      date: "Septembre 2024",
      text: "Cadre très agréable et personnel souriant. Les plats sont bien présentés et délicieux. Le système sans réservation peut créer de l'attente mais ça vaut le coup !"
    },
    {
      id: 10,
      name: "Nicolas Blanc",
      rating: 5,
      date: "Janvier 2025",
      text: "Brunch excellent ! Les French toast étaient parfaits et le café délicieux. L'endroit est chaleureux et le service attentionné. La pâtissière Audrey a un vrai talent !"
    },
    {
      id: 11,
      name: "Léa Fontaine",
      rating: 5,
      date: "Décembre 2024",
      text: "Une pépite nantaise ! Produits locaux, recettes créatives et présentation soignée. L'équipe est adorable et on sent la passion dans chaque plat fait maison."
    },
    {
      id: 12,
      name: "Maxime Girard",
      rating: 4,
      date: "Décembre 2024",
      text: "Très bonne expérience dans ce petit restaurant cosy et végétal. Les saveurs sont au rendez-vous et l'ambiance parfaite pour un déjeuner tranquille rue du Bon Secours."
    },
    {
      id: 13,
      name: "Clara Mercier",
      rating: 5,
      date: "Novembre 2024",
      text: "Coup de cœur total ! Les pâtisseries sont divines, le brunch copieux et délicieux. Un endroit où on se sent bien, avec une déco végétale soignée et une ambiance intimiste."
    },
    {
      id: 14,
      name: "Julien Roux",
      rating: 5,
      date: "Novembre 2024",
      text: "Restaurant familial où l'on mange très bien. La carte change régulièrement, c'est toujours une belle surprise. Mention spéciale pour les desserts maison d'Audrey !"
    },
    {
      id: 15,
      name: "Sarah Lemoine",
      rating: 4,
      date: "Octobre 2024",
      text: "Cadre intimiste et chaleureux, parfait pour un tête-à-tête. La cuisine est raffinée et les produits de qualité. Service un peu long parfois mais l'expérience en vaut la peine."
    },
    {
      id: 16,
      name: "David Simon",
      rating: 5,
      date: "Octobre 2024",
      text: "Excellent restaurant ! Audrey et son équipe nous accueillent toujours avec le sourire. Le crab roll est incontournable. Cuisine créative et savoureuse, je recommande vivement."
    },
    {
      id: 17,
      name: "Manon Fournier",
      rating: 5,
      date: "Septembre 2024",
      text: "Endroit magique pour bruncher ! Tout est fait maison, les produits sont frais. L'ambiance végétale est parfaite. Ouvert jusqu'à 15h, parfait pour un brunch tardif !"
    },
    {
      id: 18,
      name: "Rémi Dupont",
      rating: 4,
      date: "Septembre 2024",
      text: "Belle découverte nantaise ! Menu varié avec des options créatives. Le rapport qualité-prix est correct et l'accueil sympathique dans ce cadre cosy et végétal."
    },
    {
      id: 19,
      name: "Amélie Laurent",
      rating: 5,
      date: "Janvier 2025",
      text: "Un petit bijou caché sur l'île Feydeau ! L'atmosphère végétale est cozy, la nourriture excellente. Le burrata toast est un délice. C'est devenu notre adresse de référence à Nantes."
    },
    {
      id: 20,
      name: "Paul Morin",
      rating: 5,
      date: "Décembre 2024",
      text: "Brunch du dimanche parfait ! Produits frais, préparations maison et café excellent. L'équipe d'Audrey est chaleureuse et professionnelle. Une adresse incontournable !"
    },
    {
      id: 21,
      name: "Chloé Perrin",
      rating: 4,
      date: "Décembre 2024",
      text: "Très bon moment passé dans ce restaurant coquet et végétal. Les plats sont savoureux et bien présentés. Petit conseil : arrivez tôt car sans réservation, c'est souvent complet !"
    },
    {
      id: 22,
      name: "Vincent Roy",
      rating: 5,
      date: "Novembre 2024",
      text: "Restaurant de quartier de qualité ! Cuisine maison, produits locaux et service attentionné. L'avocado toast est particulièrement réussi. Ambiance intimiste parfaite."
    },
    {
      id: 23,
      name: "Lucie Garnier",
      rating: 5,
      date: "Novembre 2024",
      text: "Ambiance chaleureuse et cuisine délicieuse ! J'ai adoré le concept mi-café mi-restaurant avec cette déco végétale. Parfait pour un déjeuner entre collègues ou en famille."
    },
    {
      id: 24,
      name: "Fabien Duval",
      rating: 4,
      date: "Octobre 2024",
      text: "Bonne adresse pour bruncher à Nantes. La carte est variée et les produits de qualité. L'endroit est cosy avec beaucoup de verdure et l'accueil souriant."
    },
    {
      id: 25,
      name: "Marine Brun",
      rating: 5,
      date: "Octobre 2024",
      text: "Coup de cœur absolu ! Tout est parfait : l'ambiance végétale, la nourriture, le service. Les pâtisseries d'Audrey sont un délice et le café excellent. À recommander sans hésitation !"
    },
    {
      id: 26,
      name: "Alexandre Chevalier",
      rating: 5,
      date: "Septembre 2024",
      text: "Restaurant authentique avec une vraie âme ! La cuisine est créative, les produits frais et l'équipe passionnée. Le French toast était exceptionnel. Belle découverte à Nantes."
    },
    {
      id: 27,
      name: "Océane Muller",
      rating: 4,
      date: "Septembre 2024",
      text: "Très agréable expérience ! Le cadre végétal est charmant et la cuisine savoureuse. Les options sont créatives et bien pensées. L'ambiance intimiste est parfaite."
    },
    {
      id: 28,
      name: "Kévin André",
      rating: 5,
      date: "Janvier 2025",
      text: "Excellent rapport qualité-prix ! L'accueil est chaleureux et les plats délicieux. Le système sans réservation ajoute du charme. C'est notre nouvelle cantine, on y va régulièrement !"
    },
    {
      id: 29,
      name: "Anaïs Lemaire",
      rating: 5,
      date: "Décembre 2024",
      text: "Endroit parfait pour un brunch gourmand ! Tout est fait maison avec amour par Audrey. L'atmosphère végétale est relaxante et le service impeccable. Une pépite nantaise !"
    },
    {
      id: 30,
      name: "Yann Favre",
      rating: 4,
      date: "Novembre 2024",
      text: "Belle découverte ! Menu créatif avec des influences intéressantes. L'endroit cosy et végétal est parfait. L'équipe est sympathique. Parfait pour un déjeuner en couple ou entre amis."
    }
  ];

  const reviewsPerSlide = 3; // Nombre d'avis par slide
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  const getCurrentReviews = () => {
    const startIndex = currentIndex * reviewsPerSlide;
    return reviews.slice(startIndex, startIndex + reviewsPerSlide);
  };

  return (
    <section className="avis" id="avis">
      <div className="avis-header">
        <h1>Ce que nos <span className="highlight-title">clients</span> disent</h1>
        <p className="avis-subtitle">Découvrez l'expérience Mimosa à travers les yeux de nos clients fidèles</p>
      </div>

      <div className="avis-carousel">
        <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
          ‹
        </button>
        
        <div className="avis-container">
          {getCurrentReviews().map((review) => (
            <div className="avis-card" key={review.id}>
              <div className="avis-profile">
                <div className="avis-profile-img">
                  <img src={generateAvatarUrl(review.name)} alt={`${review.name}`} />
                </div>
                <div className="avis-profile-info">
                  <h3>{review.name}</h3>
                  <div className="avis-rating">
                    {renderStars(review.rating)}
                  </div>
                  <p className="avis-date">{review.date}</p>
                </div>
              </div>
              <div className="avis-content">
                <p>{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="avis-cta">
        <a href="https://g.co/kgs/9hVaFcz" target="_blank" rel="noopener noreferrer" className="avis-button">
          Voir tous nos avis Google
        </a>
      </div>
    </section>
  );
}

export default Avis;