import { projects } from '../../../data/projects';
import Section from '../../ui/Section/Section';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
