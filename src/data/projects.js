import data from './portfolio.json';

export const projects = data.projects;

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id) => projects.find(p => p.id === id);
