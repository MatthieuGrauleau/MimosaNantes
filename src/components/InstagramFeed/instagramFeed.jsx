import React, { useState, useEffect } from "react";
import "./instagramFeed.scss";

function InstagramFeed() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  
  // Nombre d'images à afficher par page dans le carrousel - maintenant dynamique
  const [imagesPerPage, setImagesPerPage] = useState(8);
  
  // Ton access token Instagram
  const accessToken = "IGAAQk9eLbw8xBZAE5jVm5CajBGeWRYWmt6V09XelJqVVNRMVQ2dkpfSV84NUpOUWNId3ZAyZAjhIU2MxRVhDWkVodjFBbGRMZAFl5Y0R6dnFhQ0tnRTlZAWmNaQVEwQkVuQjFGVTlZAczdweWdsejVzcU41M21VSHN6U3RBQnByMVNMcwZDZD";

  // État pour la lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    // Ajuster les images par page en fonction de la taille de l'écran
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setImagesPerPage(2); // Moins d'images sur mobile
      } else if (width <= 768) {
        setImagesPerPage(4); // 4 images sur tablettes
      } else {
        setImagesPerPage(8); // 8 images par défaut sur desktop
      }
    };

    // Appel initial
    handleResize();
    
    // Ajouter l'écouteur d'événement
    window.addEventListener('resize', handleResize);
    
    // Nettoyage
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Réinitialiser la page actuelle lorsque le nombre d'images par page change
  useEffect(() => {
    setCurrentPage(0);
  }, [imagesPerPage]);

  useEffect(() => {
    async function fetchAllInstagramMedia() {
      setLoading(true);
      let allMedia = [];
      // Ajouter children,media_type pour récupérer les albums
      // Conserver tous les champs originaux des medias pour le debugging
      let nextUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,children{media_url,thumbnail_url,media_type}&access_token=${accessToken}&limit=100`;
      
      try {
        // Continuer à charger tant qu'il y a une page suivante
        while (nextUrl) {
          const response = await fetch(nextUrl);
          const data = await response.json();
          
          if (data.error) {
            console.error("Erreur API Instagram:", data.error);
            break;
          }
          
          if (data.data && data.data.length > 0) {
            // Pour le debugging des médias reçus
            console.log("Premier média reçu:", data.data[0]);
            
            const formattedMedia = data.data
              .filter(item => item.media_type === "IMAGE" || item.media_type === "VIDEO" || item.media_type === "CAROUSEL_ALBUM")
              .map(item => {
                // Pour les albums, on prend juste la première image pour simplicité
                if (item.media_type === "CAROUSEL_ALBUM" && item.children && item.children.data && item.children.data.length > 0) {
                  const firstChild = item.children.data[0];
                  return {
                    id: item.id,
                    imageUrl: (firstChild.media_type === "VIDEO" && firstChild.thumbnail_url) ? 
                              firstChild.thumbnail_url : firstChild.media_url,
                    videoUrl: firstChild.media_type === "VIDEO" ? firstChild.media_url : null,
                    mediaType: firstChild.media_type,
                    caption: item.caption || "",
                    permalink: item.permalink,
                    timestamp: item.timestamp,
                    // Conserver tout l'objet original pour le debugging
                    originalData: item
                  };
                }
                
                return {
                  id: item.id,
                  // Utiliser thumbnail_url pour les vidéos si disponible, sinon media_url
                  imageUrl: (item.media_type === "VIDEO" && item.thumbnail_url) ? item.thumbnail_url : item.media_url,
                  videoUrl: item.media_type === "VIDEO" ? item.media_url : null,
                  mediaType: item.media_type,
                  caption: item.caption || "",
                  permalink: item.permalink,
                  timestamp: item.timestamp,
                  // Conserver tout l'objet original pour le debugging
                  originalData: item
                };
              });
            
            allMedia = [...allMedia, ...formattedMedia];
          }
          
          // Vérifier s'il y a une page suivante
          nextUrl = data.paging && data.paging.next ? data.paging.next : null;
        }
        
        // Trier les médias par date (du plus récent au plus ancien)
        const sortedMedia = allMedia.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });
        
        setMedia(sortedMedia);
        console.log(`Nombre total de médias chargés: ${sortedMedia.length}`);
      } catch (error) {
        console.error("Erreur lors du chargement des médias Instagram:", error);
      }
      
      setLoading(false);
    }

    fetchAllInstagramMedia();
  }, []);

  // Calculer le nombre total de pages pour le carrousel
  const totalPages = Math.ceil(media.length / imagesPerPage);
  
  // Obtenir les médias pour la page actuelle du carrousel
  const getCurrentPageMedia = () => {
    const startIndex = currentPage * imagesPerPage;
    return media.slice(startIndex, startIndex + imagesPerPage);
  };
  
  // Naviguer vers la page précédente
  const goToPreviousPage = () => {
    setCurrentPage(prev => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  
  // Naviguer vers la page suivante
  const goToNextPage = () => {
    setCurrentPage(prev => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Fonction pour tronquer le texte à 50 caractères
  const truncateCaption = (caption, maxLength = 50) => {
    if (!caption) return "";
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength) + "...";
  };

  return (
    <section className="instagram-feed" id="gallerie">
      <div className="instagram-header">
        <h1><span className="instagram-icon">#</span> Suivez nos créations <span className="highlight-title">@MimosaNantes</span></h1>
        <p className="instagram-subtitle">Partagez vos moments chez nous avec #MimosaNantes</p>
      </div>

      {loading ? (
        <div className="loading">Chargement des photos...</div>
      ) : (
        <>
          <div className="instagram-carousel-container">
            {media.length > 0 && (
              <button 
                className="carousel-arrow carousel-arrow-left" 
                onClick={goToPreviousPage}
                aria-label="Médias précédents"
              >
                &lt;
              </button>
            )}
            
            <div className="instagram-grid">
              {getCurrentPageMedia().map((item) => (
                <div 
                  key={item.id} 
                  className="instagram-item" 
                  onClick={() => {
                    setSelectedMedia(item);
                    setLightboxOpen(true);
                  }}
                >
                  <div className="instagram-image-container">
                    <img src={item.imageUrl} alt={item.caption} className="instagram-image" />
                    {item.mediaType === "VIDEO" && (
                      <div className="video-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    )}
                    <div className="instagram-overlay">
                      <div className="instagram-caption">{truncateCaption(item.caption)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {media.length > 0 && (
              <button 
                className="carousel-arrow carousel-arrow-right" 
                onClick={goToNextPage}
                aria-label="Médias suivants"
              >
                &gt;
              </button>
            )}
          </div>
          
          {media.length > imagesPerPage && (
            <div className="carousel-indicators">
              {Array.from({ length: totalPages }).map((_, index) => (
                <span 
                  key={index} 
                  className={`carousel-dot ${index === currentPage ? "active" : ""}`}
                  onClick={() => setCurrentPage(index)}
                />
              ))}
            </div>
          )}
        </>
      )}
      
      <div className="instagram-cta">
        <a href="https://www.instagram.com/mimosanantes" target="_blank" rel="noopener noreferrer" className="instagram-button">
          Voir plus sur Instagram
        </a>
      </div>

      {/* Lightbox améliorée avec style Instagram */}
      {lightboxOpen && selectedMedia && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close" 
              onClick={() => setLightboxOpen(false)}
              aria-label="Fermer"
            >
              &times;
            </button>
            
            <div className="media-container">
              {selectedMedia.mediaType === "VIDEO" ? (
                <video 
                  key={selectedMedia.videoUrl} 
                  src={selectedMedia.videoUrl} 
                  poster={selectedMedia.imageUrl}
                  controls 
                  autoPlay 
                  className="lightbox-media"
                  playsInline
                  preload="auto"
                >
                  Votre navigateur ne prend pas en charge la lecture de vidéos.
                </video>
              ) : (
                <img 
                  src={selectedMedia.imageUrl} 
                  alt={selectedMedia.caption} 
                  className="lightbox-media" 
                />
              )}
            </div>
            
            <div className="info-container">
              <div className="header">
                <div className="profile-pic">
                  <span className="profile-initial">M</span>
                </div>
                <span className="username">mimosanantes</span>
              </div>
              
              <div className="lightbox-caption">
                <span className="caption-username">mimosanantes</span>
                {selectedMedia.caption}
              </div>
              
              <div className="timestamp">
                {new Date(selectedMedia.timestamp).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>
              
              <a 
                href={selectedMedia.permalink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="lightbox-instagram-link"
              >
                Voir sur Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default InstagramFeed;