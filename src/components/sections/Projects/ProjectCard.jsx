import { useState, useEffect, useCallback, useRef } from 'react';
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight, FaTimes, FaExpand } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

// Lightbox Modal Component
function LightboxModal({ images, currentIndex, onClose, onNext, onPrev, onGoTo }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div className={styles.lightbox} onClick={onClose}>
      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className={styles.lightboxImage}
        />

        {/* Close button */}
        <button className={styles.lightboxClose} onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={onPrev}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={onNext}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>

            {/* Dots */}
            <div className={styles.lightboxDots}>
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.lightboxDot} ${index === currentIndex ? styles.lightboxDotActive : ''}`}
                  onClick={() => onGoTo(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Image counter */}
        <div className={styles.lightboxCounter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const images = project.images || (project.image ? [project.image] : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const lightboxIndex = useRef(0);

  const goTo = useCallback((index) => {
    setCurrentIndex((index + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  // Auto-play
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, images.length, goNext]);

  const openLightbox = () => {
    lightboxIndex.current = currentIndex;
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const lightboxGoTo = useCallback((index) => {
    lightboxIndex.current = (index + images.length) % images.length;
    setCurrentIndex(lightboxIndex.current);
  }, [images.length]);

  return (
    <>
      <div className={styles.card}>
        <div
          className={styles.imageWrapper}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {images.length > 0 ? (
            <>
              <img
                src={images[currentIndex]}
                alt={`${project.title} - Image ${currentIndex + 1}`}
                className={styles.projectImage}
                onClick={openLightbox}
                style={{ cursor: 'pointer' }}
              />

              {/* Expand icon on hover */}
              <button className={styles.expandButton} onClick={openLightbox} aria-label="View full size">
                <FaExpand />
              </button>

              {/* Navigation arrows - only show if more than 1 image */}
              {images.length > 1 && (
                <>
                  <button
                    className={`${styles.navButton} ${styles.navPrev}`}
                    onClick={goPrev}
                    aria-label="Previous image"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    className={`${styles.navButton} ${styles.navNext}`}
                    onClick={goNext}
                    aria-label="Next image"
                  >
                    <FaChevronRight />
                  </button>

                  {/* Dot indicators */}
                  <div className={styles.dots}>
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className={styles.imagePlaceholder}>
              <span className={styles.projectInitials}>
                {project.title.split(' ').map(w => w[0]).join('').slice(0, 2)}
              </span>
            </div>
          )}

          {project.featured && (
            <span className={styles.featured}>Featured</span>
          )}
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.role && <p className={styles.role}>{project.role}</p>}
          <p className={styles.description}>{project.description}</p>

          <div className={styles.techStack}>
            {project.techStack.map((tech, index) => (
              <span key={index} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}
            {project.githubRepo && (
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FaGithub />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <LightboxModal
          images={images}
          currentIndex={lightboxIndex.current}
          onClose={closeLightbox}
          onNext={() => lightboxGoTo(lightboxIndex.current + 1)}
          onPrev={() => lightboxGoTo(lightboxIndex.current - 1)}
          onGoTo={lightboxGoTo}
        />
      )}
    </>
  );
}
