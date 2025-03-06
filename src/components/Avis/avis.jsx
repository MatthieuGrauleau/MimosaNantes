import React from "react";
import "./avis.scss";

function Avis() {
  // Dans un cas réel, ces données pourraient venir d'une API
  const reviews = [
    {
      id: 1,
      name: "Sophie Martin",
      rating: 5,
      date: "Août 2023",
      text: "Quelle découverte ! J'ai adoré les pâtisseries, tout est fait maison et ça se sent. L'ambiance est chaleureuse et le service impeccable. Je recommande particulièrement les tartes aux fruits de saison.",
      profileImg: "https://via.placeholder.com/50"
    },
    {
      id: 2,
      name: "Thomas Dubois",
      rating: 5,
      date: "Juillet 2023",
      text: "Un vrai coup de cœur pour ce petit café-restaurant ! La cuisine est fraîche, créative et on sent la passion de la chef. J'y retourne dès que possible pour goûter le reste de la carte.",
      profileImg: "https://via.placeholder.com/50"
    },
    {
      id: 3,
      name: "Marie Leroy",
      rating: 4,
      date: "Septembre 2023",
      text: "Excellente adresse à Nantes. Cadre agréable, produits frais et de qualité. Les desserts sont à tomber par terre ! Seul petit bémol : il vaut mieux réserver car c'est souvent complet.",
      profileImg: "https://via.placeholder.com/50"
    },
    {
      id: 4,
      name: "Pierre Moreau",
      rating: 5,
      date: "Octobre 2023",
      text: "Je suis un habitué maintenant, et je ne me lasse pas de la qualité des plats et de l'accueil chaleureux d'Audrey. Un endroit authentique où l'on se sent bien.",
      profileImg: "https://via.placeholder.com/50"
    }
  ];

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

  return (
    <section className="avis" id="avis">
      <div className="avis-header">
        <h1>Ce que nos <span className="highlight-title">clients</span> disent</h1>
        <p className="avis-subtitle">Découvrez l'expérience Mimosa à travers les yeux de nos clients</p>
      </div>

      <div className="avis-container">
        {reviews.map((review) => (
          <div className="avis-card" key={review.id}>
            <div className="avis-profile">
              <div className="avis-profile-img">
                <img src={review.profileImg} alt={`${review.name}`} />
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

      <div className="avis-cta">
        <a href="https://g.co/kgs/9hVaFcz" target="_blank" rel="noopener noreferrer" className="avis-button">
          Voir tous nos avis Google
        </a>
      </div>
    </section>
  );
}

export default Avis;