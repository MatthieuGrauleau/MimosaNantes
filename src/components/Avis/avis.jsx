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

  // Collection des 12 vrais avis Google de Mimosa
  const reviews = [
    {
      id: 1,
      name: "James Ga",
      rating: 5,
      date: "Août 2025",
      text: "Quel brunch ! Une pépite. Les produits étaient goûteux, savoureux et frais. Excellent accord des aliments et surtout c'est un excellent rapport qualité prix, nous étions plus que repus. Nous nous sommes tout simplement régalés. Le service était très bon, l'équipe est accueillante. Un des brunchs où il n'y a pas de réservation sur Nantes. Nous avons eu de la chance nous n'avons pas eu à patienter bien longtemps, nous avons été vite installé à une table en terrasse."
    },
    {
      id: 2,
      name: "Marine Hecquet",
      rating: 5,
      date: "Août 2025",
      text: "Nous sommes tombés sur ce brunch par hasard et quelle bonne surprise ! Tout ce que nous avons mangé et bu étaient délicieux ! On sent que les produits utilisés sont frais et de qualité. Et pour finir le service a été chaleureux et efficace !"
    },
    {
      id: 3,
      name: "Jeannette Hecker",
      rating: 5,
      date: "Septembre 2025",
      text: "J'y suis allée deux fois et les deux fois c'était vraiment très bon. J'ai beaucoup aimé les pancakes (juste parfaits, pas écœurants du tout) et le saumon qui était excellent. La formule est très bien pensée, on sent que les produits sont frais et de qualité. L'accueil est chaleureux et agréable, ce qui rend l'expérience encore meilleure. Une super adresse pour bruncher à Nantes, je recommande vivement !"
    },
    {
      id: 4,
      name: "Barbara Barbidule",
      rating: 5,
      date: "Juillet 2025",
      text: "Un excellent brunch entre copines, dont je garde un très bon souvenir 👍🏼. Le lieu est effectivement petit, mais l'équipe se démène pour satisfaire tout le monde. Quand je lis certains avis à une étoile (le même groupe semble-t-il), j'hallucine."
    },
    {
      id: 5,
      name: "Khalid",
      rating: 5,
      date: "Avril 2025",
      text: "Vous dire qu'il s'agit du meilleur brunch de la ville serait ne faire que répéter ce qui a été largement décrit précédemment… néanmoins j'insiste haut et fort, et je le signe : vous ne regretterez absolument pas l'expérience ! Audrey et toute sa créativité en cuisine sauront satisfaire vos papilles, tout y est préparé maison et avec passion. Le couple renouvelle assez souvent la carte et par saisonnalité… le goût, la générosité, l'accueil et leur sourire se retrouvent dans leur plat et sauront vous séduire. Leur fluffy pancakes ? Dignes des meilleures adresses de la capitale à la seule différence que le prix est nettement plus abordable… le goût très largement supérieur. Ne parlons pas de leur brioche perdue qui est un total régal ! Brunchez en toute sérénité dans leur établissement !"
    },
    {
      id: 6,
      name: "Malaika Tanimou",
      rating: 5,
      date: "Juillet 2025",
      text: "Mimosa est un endroit sympathique à Nantes. Nous y avions passé un agréable moment avec mon compagnon. Il y a du choix sans qu'on s'y perde. Le personnel est accueillant. Les plats étaient très bons."
    },
    {
      id: 7,
      name: "Elsa Maisonneuve",
      rating: 4,
      date: "Juillet 2025",
      text: "Le brunch le Mimosa Fever est délicieux, nous nous sommes régalés du début à la fin! Bémol sur le fait que l'on ne puisse pas réserver, il faut arriver 30min avant l'ouverture pour avoir une place et être 2 ou 3 maximum (intérieur et terrasse petits, peu de place) et si vous arriver dans les premiers, le service est long à démarrer mais une fois lancé c'est bon! Je recommande le French Croq, moelleux à souhait et goûtu et la limonade maison citron vert basilic 🤩"
    },
    {
      id: 8,
      name: "Camille Payen",
      rating: 5,
      date: "Août 2025",
      text: "Une superbe découverte! Les plats sont copieux et delicieux, et les serveurs adorables et attentionnés. Pour un brunch de qualité, courez-y!"
    },
    {
      id: 9,
      name: "Lucile Lallemand",
      rating: 5,
      date: "Juillet 2025",
      text: "Personnel très sympathique et très arrangeant. Malgré le peu de table disponible ils acceptent volontiers les groupes de 6-8 personnes et ont à cœur que l'on soit bien reçu. La nourriture est excellente, tout est frais et fait maison. Je recommande l'adresse."
    },
    {
      id: 10,
      name: "Anne",
      rating: 5,
      date: "Mars 2025",
      text: "Brunch exceptionnel! Tout est frais et préparé devant vous, un véritable plaisir gustatif. Ambiance intimiste et douce parfait pour une virée entre amis :) Merci beaucoup pour ce super repas. En photo: avocado pancake (un vrai régale avec l'œuf poché) / une eau infusée à la framboise exceptionnelle (on aurait dit un jus), matcha et chocolat au top / salade de grenaille savoureuse (un super chaud/froid)"
    },
    {
      id: 11,
      name: "Colette Vitiello",
      rating: 5,
      date: "Mai 2025",
      text: "Un très bon brunch à la carte, il ne faut pas hésiter à venir tôt comme la réservation n'est pas possible ! Gros coup de coeur pour les pancakes à l'avocat avec l'option végé qui étaient vraiment trop bons !"
    },
    {
      id: 12,
      name: "Mathilde Mercier",
      rating: 3,
      date: "Mai 2025",
      text: "Grandes adeptes des brunch nous avons voulu tester Mimosa. Il faut s'armer de patience. Il n'y a pas de réservation possible donc le temps d'attente peut être très long. Mais l'accueil est bon et le service parfait bien qu'ils ne soient que deux et qu'on sente la fatigue chez chacun d'entre eux. Le choix et les formules sont top mais nous avons été déçues par la qualité de certains produits. Le saumon fumé était extrêmement salé, les tranches épaisses et la texture laissait penser à du saumon bas de gamme. De même déçues par le fait d'avoir de la salade toute sèche dans l'assiette qui ressemble fortement à de la salade en sachet. Les légumes rôtis avec la crème de chèvre en revanche étaient à tomber par terre, vraiment très bons tout comme le pancake, nuageux et délicieux."
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