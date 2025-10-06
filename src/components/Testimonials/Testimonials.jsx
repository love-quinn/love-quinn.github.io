import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import { Clapperboard, Crown, Play, Star } from "lucide-react";

const Testimonials = React.forwardRef(function Testimonials(props, ref) {
  const { content } = useContext(LanguageContext);

  // State to track the current testimonial
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  // Cycle through testimonials every 7.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % content.testimonials.length
      );
    }, 7500);
    return () => clearInterval(interval);
  }, [content.testimonials.length]);

  const currentTestimonial = content.testimonials[currentIndex];

  const handleVideoClick = (videoId) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  return (
    <section id="testimonials" className="testimonials-section" ref={ref}>
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <p className="testimonials-subtitle">{content.badge}</p>
            <Crown id="testimonials-crown" size={18}/>
          </div>
          <h2 className="testimonials-title">
            {content.title}
          </h2>
        </div>

        {/* Video Testimonials Grid */}
        <div className="video-testimonials">
          {/* <div className="video-testimonials-badge">
            <h3 className="video-testimonials-title">Depoimentos em Vídeo</h3>
            <Clapperboard size={18}/>
          </div> */}
          <div className="video-grid">
            {content.videoTestimonials.map((video) => (
              <div key={video.id} className="video-container">
                {playingVideo === video.id ? (
                  <div className="video-embed">
                    <iframe
                      src={`${video.url}?autoplay=1&rel=0`}
                      title={`Depoimento ${video.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div 
                    className="video-thumbnail"
                    onClick={() => handleVideoClick(video.id)}
                  >
                    <img 
                      src={video.thumbnail} 
                      alt={`Depoimento ${video.name}`} 
                      className="thumbnail-image"
                    />
                    <div className="play-button">
                      <Play size={48} className="play-icon" />
                    </div>
                    <div className="video-overlay"></div>
                  </div>
                )}
                <div className="video-footer">
                    <p className="video-name">{video.name}</p>
                  <div className="language-indicator">
                    {video.country === 'BR' ? (
                      <span>🇧🇷 {video.language}</span>
                    ) : (
                      <span>🇬🇧 {video.language}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written Testimonials Grid */}
        <div className="testimonials-grid">
          {content.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <h3 className="testimonial-name">{testimonial.name}</h3>
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";
export default Testimonials;
