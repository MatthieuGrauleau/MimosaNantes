import React, { useState, useEffect } from "react";
import "./instagramFeed.scss";

function InstagramFeed () {
  // Dans un cas réel, vous utiliseriez l'API Instagram
  // Pour cet exemple, j'utilise des données fictives
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulation du chargement des photos
  useEffect(() => {
    // Simule un appel API
    setTimeout(() => {
      // Photos fictives - remplacez par vos propres images
      const dummyPhotos = [
        {
          id: '1',
          imageUrl: 'https://via.placeholder.com/300x300',
          caption: 'Nouvelle création du jour : tarte aux fruits de saison',
          likes: 124
        },
        {
          id: '2',
          imageUrl: 'https://via.placeholder.com/300x300',
          caption: 'Notre spécialité maison',
          likes: 89
        },
        {
          id: '3',
          imageUrl: 'https://via.placeholder.com/300x300',
          caption: 'Ambiance cosy au Mimosa',
          likes: 156
        },
        {
          id: '4',
          imageUrl: 'https://via.placeholder.com/300x300',
          caption: 'Nouveautés de la carte d\'automne',
          likes: 103
        },
        {
          id: '5',
          imageUrl: 'https://via.placeholder.com/300x300',
          caption: 'Préparation en cuisine',
          likes: 78
        },
        {
          id: '6',
          imageUrl: 'https://via.placeholder.com/300x300',
          caption: 'Notre équipe vous accueille',
          likes: 112
        }
      ];
      
      setPhotos(dummyPhotos);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="instagram-feed" id="gallerie">
      <div className="instagram-header">
        <h1><span className="instagram-icon">#</span> Suivez nos créations <span className="highlight-title">@MimosaNantes</span></h1>
        <p className="instagram-subtitle">Partagez vos moments chez nous avec #MimosaNantes</p>
      </div>

      {loading ? (
        <div className="loading">Chargement des photos...</div>
      ) : (
        <div className="instagram-grid">
          {photos.map((photo) => (
            <div className="instagram-item" key={photo.id}>
              <div className="instagram-image-container">
                <img src={photo.imageUrl} alt={photo.caption} className="instagram-image" />
                <div className="instagram-overlay">
                  <div className="instagram-caption">{photo.caption}</div>
                  <div className="instagram-likes">❤️ {photo.likes}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="instagram-cta">
        <a href="https://www.instagram.com/mimosanantes" target="_blank" rel="noopener noreferrer" className="instagram-button">
          Voir plus sur Instagram
        </a>
      </div>
    </section>
  );
}

export default InstagramFeed;