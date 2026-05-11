import { useState, useEffect, useCallback } from 'react';
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const images = project.images || (project.image ? [project.image] : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

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

  return (
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
            />

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
  );
}
