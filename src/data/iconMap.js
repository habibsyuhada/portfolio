import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGitAlt,
  FaDocker,
  FaNpm,
  FaGithub
} from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiVite, SiPostman, SiFigma, SiTailwindcss } from 'react-icons/si';

export const iconMap = {
  // Font Awesome
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGitAlt,
  FaDocker,
  FaNpm,
  FaGithub,

  // Dev Icons
  DiMongodb,
  DiMysql,

  // Simple Icons
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiPostman,
  SiFigma
};

export function getIcon(iconName) {
  return iconMap[iconName] || FaJs;
}
