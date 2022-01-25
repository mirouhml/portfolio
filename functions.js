function openCloseMenu() {
  const x = document.querySelector('.mobile-menu');
  const y = document.querySelector('body');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
    y.style.overflow = 'scroll';
  } else {
    x.style.display = 'flex';
    y.style.overflow = 'hidden';
  }
}
function addevent(id) {
  document.getElementById(id).addEventListener('click', function() {
    openCloseMenu();
  });
}
const ids = ['onclick-open', 'onclick-close', 'onclick-portfolio', 'onclick-about', 'onclick-contact'];
ids.forEach(addevent);

function createProjectCards(){
  const projects = {
    project1: {
      name: 'Profesional Art Printing Data',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      featuredImage: '',
      languages: ['html','bootstrap','Ruby'],
      linkLive: 'location.href=\'https://mirouhml.github.io/portfolio/index.html\'',
      linkSource: 'location.href=\'https://github.com/mirouhml/portfolio\''
    },
    project2: {
      name: 'Profesional Art Printing Data',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      featuredImage: '',
      languages: ['html','bootstrap','Ruby'],
      linkLive: 'location.href=\'https://mirouhml.github.io/portfolio/index.html\'',
      linkSource: 'location.href=\'https://github.com/mirouhml/portfolio\''
    },
    project3: {
      name: 'Profesional Art Printing Data',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      featuredImage: '',
      languages: ['html','bootstrap','Ruby'],
      linkLive: 'location.href=\'https://mirouhml.github.io/portfolio/index.html\'',
      linkSource: 'location.href=\'https://github.com/mirouhml/portfolio\''
    },
    project4: {
      name: 'Profesional Art Printing Data',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      featuredImage: '',
      languages: ['html','bootstrap','Ruby'],
      linkLive: 'location.href=\'https://mirouhml.github.io/portfolio/index.html\'',
      linkSource: 'location.href=\'https://github.com/mirouhml/portfolio\''
    },
    project5: {
      name: 'Profesional Art Printing Data',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      featuredImage: '',
      languages: ['html','bootstrap','Ruby'],
      linkLive: 'location.href=\'https://mirouhml.github.io/portfolio/index.html\'',
      linkSource: 'location.href=\'https://github.com/mirouhml/portfolio\''
    },
    project6: {
      name: 'Profesional Art Printing Data',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      featuredImage: '',
      languages: ['html','bootstrap','Ruby'],
      linkLive: 'location.href=\'https://mirouhml.github.io/portfolio/index.html\'',
      linkSource: 'location.href=\'https://github.com/mirouhml/portfolio\''
    }
  }
  let i = 0;
  for (const project in projects){
    projectCards(projects[project],i);
    i++;
  }
}

function projectCards(project,counter){
  const projectsContainer = document.querySelector('.projects-container');
  const listElem = document.createElement('li');
  listElem.setAttribute('class','project');
  const projectCard = document.createElement('div');
  projectCard.setAttribute('class','project-card-content');
  const projectTitle = document.createElement('h3');
  projectTitle.setAttribute('class','project-title');
  projectTitle.appendChild(document.createTextNode(project.name));
  const projectDescription = document.createElement('p');
  projectDescription.setAttribute('class','project-description');
  projectDescription.appendChild(document.createTextNode(project.description))
  const projectLanguages = document.createElement('ul');
  projectLanguages.setAttribute('class','project-languages');
  for (let i=0;i<project.languages.length;i++){
    const language = document.createElement('li');
    const languageText = document.createTextNode(project.languages[i]);
    language.appendChild(languageText);
    projectLanguages.appendChild(language);
  }
  const projectButton = document.createElement('button');
  projectButton.setAttribute('onclick',project.linkLive);
  projectButton.setAttribute('class','project-button');
  projectButton.setAttribute('type','button');
  projectButton.appendChild(document.createTextNode('See Project'));
  projectCard.appendChild(projectTitle);
  projectCard.appendChild(projectDescription);
  projectCard.appendChild(projectLanguages);
  if (counter == 0){
    projectButton.setAttribute('id','first-project-button');
    listElem.setAttribute('id','project1');
  }
  listElem.appendChild(projectCard);
  listElem.appendChild(projectButton);
  projectsContainer.appendChild(listElem);
}

document.addEventListener('DOMContentLoaded', function() {
  createProjectCards();
});
