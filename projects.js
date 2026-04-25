import { fetchJSON, renderProjects } from '../global.js';
//data in lib
const projects = await fetchJSON('../lib/projects.json');
const container = document.querySelector('.projects');

renderProjects(projects, container, 'h2');

export function renderProjects(projects, containerElement, headingLevel = 'h2') {
  containerElement.innerHTML = '';
  for (let project of projects) {
    const article = document.createElement('article');

    article.innerHTML = `
      <${headingLevel}>${project.title}</${headingLevel}>
      <img src="${project.image}" alt="${project.title}">
      <p>${project.description}</p>
    `;

    containerElement.appendChild(article);
  }
}