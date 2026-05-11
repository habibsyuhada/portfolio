import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGitAlt,
  FaDocker,
  FaNpm,
  FaGithub,
  FaPhp,
  FaPython,
  FaJava,
  FaDatabase,
  FaCode,
  FaTerminal
} from 'react-icons/fa';
import { DiMongodb, DiMysql, DiPostgresql, DiDocker, DiLinux } from 'react-icons/di';
import {
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiPostman,
  SiFigma,
  SiTailwindcss,
  SiGoland,
  SiLaravel,
  SiCodeigniter,
  SiDotnet,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiFirebase,
  SiJenkins,
  SiGrafana,
  SiPrometheus,
  SiKubernetes,
  SiJquery,
  SiSpring
} from 'react-icons/si';

export const iconMap = {
  // Font Awesome
  FaJs, FaPhp, FaPython, FaJava, FaReact, FaNode, FaHtml5, FaCss3Alt,
  FaGitAlt, FaDocker, FaNpm, FaGithub, FaDatabase, FaCode, FaTerminal,

  // Dev Icons
  DiMongodb, DiMysql, DiPostgresql, DiDocker, DiLinux,

  // Simple Icons
  SiTypescript, SiNextdotjs, SiVite, SiPostman, SiFigma, SiTailwindcss,
  SiGoland, SiLaravel, SiCodeigniter, SiDotnet, SiFastapi, SiFlask,
  SiMysql, SiFirebase, SiJenkins, SiGrafana, SiPrometheus, SiKubernetes,
  SiJquery, SiSpring
};

// Mapping function - maps skill names to icons
export function getIcon(iconName) {
  const iconMapping = {
    // Programming Languages
    'JavaScript': FaJs,
    'PHP': FaPhp,
    'Python': FaPython,
    'C#': FaCode,
    'Go': SiGoland,
    'Java': FaJava,

    // Frontend
    'React.js': FaReact,
    'React': FaReact,
    'React Native': FaReact,
    'Next.js': SiNextdotjs,
    'HTML5': FaHtml5,
    'CSS3': FaCss3Alt,
    'jQuery': SiJquery,

    // Backend
    'Node.js': FaNode,
    'Express.js': FaNode,
    'NestJS': FaNode,
    'Laravel': SiLaravel,
    'CodeIgniter': SiCodeigniter,
    'ASP.NET': SiDotnet,
    'FastAPI': SiFastapi,
    'Flask': SiFlask,
    'Spring Boot': SiSpring,

    // Databases
    'PostgreSQL': DiPostgresql,
    'MySQL': DiMysql,
    'MongoDB': DiMongodb,
    'SQL Server': FaDatabase,
    'Firebase': SiFirebase,

    // DevOps
    'Git': FaGitAlt,
    'Docker': DiDocker,
    'Kubernetes': SiKubernetes,
    'Linux': DiLinux,
    'Jenkins': SiJenkins,
    'Grafana': SiGrafana,
    'Prometheus': SiPrometheus,
    'Bash': FaTerminal
  };

  return iconMapping[iconName] || FaCode;
}
