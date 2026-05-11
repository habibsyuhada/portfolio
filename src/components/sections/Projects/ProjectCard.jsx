import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.projectInitials}>
            {project.title.split(' ').map(w => w[0]).join('').slice(0, 2)}
          </span>
        </div>
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
