import { fetchJSON, renderProjects } from 'global.js';
//data in lib
const projects = await fetchJSON('lib/projects.json');
const container = document.querySelector('.projects');

renderProjects(projects, container, 'h2');
