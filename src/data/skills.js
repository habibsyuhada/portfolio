import data from './portfolio.json';
import { getIcon } from './iconMap';

// Map skill names to icons
export const skills = {};
export const skillsCategories = [];

Object.keys(data.skills).forEach(category => {
  skills[category] = data.skills[category].map(skill => ({
    ...skill,
    icon: getIcon(skill.name)
  }));

  const titleMap = {
    programming: 'Programming Languages',
    frontend: 'Frontend',
    backend: 'Backend Frameworks',
    database: 'Databases',
    devops: 'DevOps & Tools'
  };

  skillsCategories.push({
    id: category,
    title: titleMap[category] || category,
    items: skills[category]
  });
});
