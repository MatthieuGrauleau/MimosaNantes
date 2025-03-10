import React, { useState, useEffect } from "react";
import "./instagramFeed.scss";

function InstagramFeed() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ton access token Instagram
  const accessToken = "IGAAQk9eLbw8xBZAE5jVm5CajBGeWRYWmt6V09XelJqVVNRMVQ2dkpfSV84NUpOUWNId3ZAyZAjhIU2MxRVhDWkVodjFBbGRMZAFl5Y0R6dnFhQ0tnRTlZAWmNaQVEwQkVuQjFGVTlZAczdweWdsejVzcU41M21VSHN6U3RBQnByMVNMcwZDZD"; // Remplace avec ton token actuel

  useEffect(() => {
    async function fetchInstagramPhotos() {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`
        );
        const data = await response.json();

        if (data.data) {
          const formattedPhotos = data.data
            .filter(photo => photo.media_type === "IMAGE") // Filtrer uniquement les images
            .map(photo => ({
              id: photo.id,
              imageUrl: photo.media_url,
              caption: photo.caption || "",
              permalink: photo.permalink
            }));
          setPhotos(formattedPhotos);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des photos Instagram :", error);
      }
      setLoading(false);
    }

    fetchInstagramPhotos();
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
            <a href={photo.permalink} key={photo.id} target="_blank" rel="noopener noreferrer">
              <div className="instagram-item">
                <div className="instagram-image-container">
                  <img src={photo.imageUrl} alt={photo.caption} className="instagram-image" />
                  <div className="instagram-overlay">
                    <div className="instagram-caption">{photo.caption}</div>
                  </div>
                </div>
              </div>
            </a>
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
