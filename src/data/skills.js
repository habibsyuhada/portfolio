import data from './portfolio.json';
import { getIcon } from './iconMap';

// Add icon components to skills data
const addIcons = (items) => items.map(skill => ({ ...skill, icon: getIcon(skill.icon) }));

export const skills = {
  programming: addIcons(data.skills.programming || []),
  frontend: addIcons(data.skills.frontend || []),
  backend: addIcons(data.skills.backend || []),
  database: addIcons(data.skills.database || []),
  devops: addIcons(data.skills.devops || [])
};

export const skillsCategories = [
  { id: 'programming', title: 'Programming Languages', items: skills.programming },
  { id: 'frontend', title: 'Frontend', items: skills.frontend },
  { id: 'backend', title: 'Backend Frameworks', items: skills.backend },
  { id: 'database', title: 'Databases', items: skills.database },
  { id: 'devops', title: 'DevOps & Tools', items: skills.devops }
];
