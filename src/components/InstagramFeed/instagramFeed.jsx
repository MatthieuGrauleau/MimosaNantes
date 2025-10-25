import React, { useState, useEffect } from "react";
import { useIntersectionObserver } from "../../utils/animationUtils";
import "./instagramFeed.scss";

function InstagramFeed() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(8);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Intersection Observer pour charger uniquement quand visible
  const [feedRef, isFeedVisible] = useIntersectionObserver({ threshold: 0.1 });

  // TOKEN SÉCURISÉ via variable d'environnement
  const accessToken = process.env.REACT_APP_INSTAGRAM_TOKEN;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setImagesPerPage(2);
      } else if (width <= 768) {
        setImagesPerPage(4);
      } else {
        setImagesPerPage(8);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [imagesPerPage]);

  // 🚀 OPTIMISATION 1 : Charger seulement quand la section est visible
  useEffect(() => {
    if (isFeedVisible && !shouldLoad) {
      setShouldLoad(true);
    }
  }, [isFeedVisible, shouldLoad]);

  useEffect(() => {
    // Ne charge pas si pas encore visible
    if (!shouldLoad) return;

    async function fetchInstagramMedia() {
      setLoading(true);
      setError(null);
      
      if (!accessToken) {
        setError("Configuration manquante. Token Instagram non défini dans les variables d'environnement.");
        setLoading(false);
        return;
      }

      try {
        // 🚀 OPTIMISATION 2 : Limiter à 24 posts au lieu de tout charger
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,children{media_url,thumbnail_url,media_type}&access_token=${accessToken}&limit=24`
        );
        
        const data = await response.json();
        
        if (data.error) {
          console.error("Erreur API Instagram:", data.error);
          
          if (data.error.code === 190) {
            setError("Token d'accès expiré. Veuillez renouveler votre token Instagram.");
          } else if (data.error.code === 100) {
            setError("Token d'accès invalide. Veuillez vérifier votre configuration.");
          } else {
            setError(`Erreur Instagram: ${data.error.message}`);
          }
          setLoading(false);
          return;
        }
        
        if (data.data && data.data.length > 0) {
          const formattedMedia = data.data
            .filter(item => item.media_type === "IMAGE" || item.media_type === "VIDEO" || item.media_type === "CAROUSEL_ALBUM")
            .map(item => {
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
                  timestamp: item.timestamp
                };
              }
              
              return {
                id: item.id,
                imageUrl: (item.media_type === "VIDEO" && item.thumbnail_url) ? item.thumbnail_url : item.media_url,
                videoUrl: item.media_type === "VIDEO" ? item.media_url : null,
                mediaType: item.media_type,
                caption: item.caption || "",
                permalink: item.permalink,
                timestamp: item.timestamp
              };
            });
          
          const sortedMedia = formattedMedia.sort((a, b) => {
            return new Date(b.timestamp) - new Date(a.timestamp);
          });
          
          setMedia(sortedMedia);
          console.log(`✅ Médias Instagram chargés: ${sortedMedia.length}`);
        }
        
      } catch (error) {
        console.error("Erreur lors du chargement des médias Instagram:", error);
        setError("Erreur de connexion. Vérifiez votre connexion internet.");
      }
      
      setLoading(false);
    }

    fetchInstagramMedia();
  }, [shouldLoad, accessToken]);

  const totalPages = Math.ceil(media.length / imagesPerPage);
  
  const getCurrentPageMedia = () => {
    const startIndex = currentPage * imagesPerPage;
    return media.slice(startIndex, startIndex + imagesPerPage);
  };
  
  const goToPreviousPage = () => {
    setCurrentPage(prev => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  
  const goToNextPage = () => {
    setCurrentPage(prev => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const truncateCaption = (caption, maxLength = 50) => {
    if (!caption) return "";
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength) + "...";
  };

  return (
    <section ref={feedRef} className="instagram-feed" id="galerie">
      <div className="instagram-header">
        <h2><span className="instagram-icon">#</span> Suivez nos créations <span className="highlight-title">@MimosaNantes</span></h2>
        <p className="instagram-subtitle">Partagez vos moments chez nous avec #MimosaNantes</p>
      </div>

      {/* 🚀 OPTIMISATION 3 : Placeholder avant chargement */}
      {!shouldLoad ? (
        <div className="instagram-placeholder">
          <p>📸 Nos dernières créations Instagram</p>
        </div>
      ) : loading ? (
        <div className="loading">Chargement des photos...</div>
      ) : error ? (
        <div className="error-container">
          <div className="error-message">
            <h3>⚠️ Problème avec le feed Instagram</h3>
            <p>{error}</p>
          </div>
        </div>
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
                    {/* 🚀 OPTIMISATION 4 : Lazy loading des images */}
                    <img 
                      src={item.imageUrl} 
                      alt={truncateCaption(item.caption, 100) || "Photo Instagram Mimosa Nantes"} 
                      className="instagram-image"
                      loading="lazy"
                      decoding="async"
                    />
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
                  role="button"
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </>
      )}
      
      <div className="instagram-cta">
        <a 
          href="https://www.instagram.com/mimosanantes" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="instagram-button"
          title="Voir plus sur Instagram - Mimosa Nantes"
        >
          Voir plus sur Instagram
        </a>
      </div>

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
                  className="lightbox-media"
                  playsInline
                  preload="metadata"
                >
                  Votre navigateur ne prend pas en charge la lecture de vidéos.
                </video>
              ) : (
                <img 
                  src={selectedMedia.imageUrl} 
                  alt={selectedMedia.caption || "Photo Instagram"} 
                  className="lightbox-media"
                  loading="lazy"
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
                title="Voir cette publication sur Instagram"
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