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
  document.getElementById(id).addEventListener('click', () => {
    openCloseMenu();
  });
}
const ids = ['onclick-open', 'onclick-close', 'onclick-portfolio', 'onclick-about', 'onclick-contact'];
ids.forEach(addevent);
const projects = {
  project0: {
    name: 'Creative Anime Convention',
    description: 'Creative Anime Convetion 2022 is the gathering of everything anime and otaku culture, celebrating the many aspects of Japanese pop culture and its influence on the world,taking place in Algeria.',
    longDescription: 'Creative Anime Convention or CAC offers tons of fun and educational workshops, live conferences from big and influential figures of the anime industry, new anime series and movies announcements, trailers and exclusive debut screenings, live concerts and musical performances, and many more events awaiting you across 3 days from Thursday, February 24th to Saturday, February 26th, 2022 in Sahat Chouhada, Algeirs, Algeria.',
    featuredImage: 'src/cac.png',
    languages: ['html', 'css', 'scss', 'JavaScript'],
    linkLive: 'https://mirouhml.github.io/anime-convention-project',
    linkSource: 'https://github.com/mirouhml/anime-convention-project',
    type: 'featured',
  },
  project1: {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'src/project-image.svg',
    languages: ['html', 'bootstrap', 'Ruby', 'css'],
    linkLive: 'https://mirouhml.github.io/portfolio/index.html',
    linkSource: 'https://github.com/mirouhml/portfolio',
    type: 'normal',
  },
  project2: {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'src/project-image.svg',
    languages: ['html', 'bootstrap', 'Ruby'],
    linkLive: 'https://mirouhml.github.io/portfolio/index.html',
    linkSource: 'https://github.com/mirouhml/portfolio',
    type: 'normal',
  },
  project3: {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'src/project-image.svg',
    languages: ['html', 'bootstrap', 'Ruby'],
    linkLive: 'https://mirouhml.github.io/portfolio/index.html',
    linkSource: 'https://github.com/mirouhml/portfolio',
    type: 'normal',
  },
  project4: {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'src/project-image.svg',
    languages: ['html', 'bootstrap', 'Ruby'],
    linkLive: 'https://mirouhml.github.io/portfolio/index.html',
    linkSource: 'https://github.com/mirouhml/portfolio',
    type: 'normal',
  },
  project5: {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'src/project-image.svg',
    languages: ['html', 'bootstrap', 'Ruby'],
    linkLive: 'https://mirouhml.github.io/portfolio/index.html',
    linkSource: 'https://github.com/mirouhml/portfolio',
    type: 'normal',
  },
  project6: {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'src/featured-project-image.svg',
    languages: ['html', 'bootstrap', 'bootstrap', 'Ruby'],
    linkLive: 'https://mirouhml.github.io/portfolio/index.html',
    linkSource: 'https://github.com/mirouhml/portfolio',
    type: 'normal',
  },
};
function createPopupWindow(project) {
  const popupTitle = document.getElementById('popup-title');
  popupTitle.textContent = project.name;
  const popupLanguages = document.getElementById('popup-languages');
  popupLanguages.innerHTML = '';
  for (let i = 0; i < project.languages.length; i += 1) {
    const language = document.createElement('li');
    const languageText = document.createTextNode(project.languages[i]);
    language.appendChild(languageText);
    popupLanguages.appendChild(language);
  }
  const popupImage = document.getElementById('popup-image');
  popupImage.setAttribute('src', project.featuredImage);
  const popupDescription = document.getElementById('popup-description-text');
  popupDescription.textContent = project.longDescription;
  const liveButton = document.getElementById('live-button');
  const linkLive = `window.open('${project.linkLive}', '_blank')`;
  liveButton.setAttribute('onclick', linkLive);
  const sourceButton = document.getElementById('source-button');
  const linkSource = `window.open('${project.linkSource}', '_blank')`;
  sourceButton.setAttribute('onclick', linkSource);
}
function openClosePopup() {
  const x = document.querySelector('.project-popup');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
  } else {
    x.style.display = 'flex';
  }
}
function createFeaturedProject(project) {
  const featuredProjectContainer = document.getElementById('featured-project');
  let projectLanguages = '';
  for (let i = 0; i < project.languages.length; i += 1) {
    projectLanguages += `<li>${project.languages[i]}</li>`;
  }
  featuredProjectContainer.innerHTML = `<img id="featured-project-image" alt="Featured project image" src="${project.featuredImage}">
                              <div id="featured-project-details">
                                  <h3 id="featured-project-title">${project.name}</h3>
                                  <p id="featured-project-description">${project.description}</p>
                                  <ul class="featured-project-languages">${projectLanguages}</ul>
                                  <button class="featured-project-button" id="featured-button" type="button">See Project</button>
                              </div>`;
  document.getElementById('featured-button').addEventListener('click', () => {
    openClosePopup();
    createPopupWindow(project);
  });
}
function projectCards(project, counter) {
  let projectLanguages = '';
  for (let i = 0; i < project.languages.length; i += 1) {
    projectLanguages += `<li>${project.languages[i]}</li>`;
  }
  const listElem = document.createElement('li');
  listElem.classList.add('project');
  listElem.id = `project${counter}`;
  if (project.featuredImage) {
    listElem.style.setProperty('--background-img', `url(${project.featuredImage})`);
  }
  listElem.innerHTML = `<div class="project-card-content">
                  <h3 class="project-title">${project.name}</h3>
                  <p class="project-description">${project.description}</p>
                  <ul class="project-languages">${projectLanguages}</ul>
                </div>
                <button class="project-button" id="project-button-${counter}" type="button">See Project</button>`;
  const projectsContainer = document.querySelector('.projects-container');
  listElem.querySelector('.project-button').addEventListener('click', () => {
    openClosePopup();
    createPopupWindow(projects[`project${counter}`]);
  });
  projectsContainer.appendChild(listElem);
}
function createProjectCards(projectList) {
  for (let i = 0; i < projectList.length; i += 1) {
    if (projectList[i].type === 'normal') { projectCards(projectList[i], i); } else { createFeaturedProject(projectList[i]); }
  }
}
function validateEmail(email, error, event) {
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const msg = document.getElementById('error-message');
    msg.innerText = error;
    msg.style.color = 'red';
    msg.style.fontSize = '12px';
  }
}
const form = document.getElementById('contact-me-form');
form.addEventListener('submit', (event) => {
  const EMAIL_INVALID = 'Please enter an email address without any upper-case letters.';
  const email = form.elements.mail;
  const emailText = email.value;
  validateEmail(emailText, EMAIL_INVALID, event);
});
function populateStorage(formText) {
  localStorage.setItem('formText', formText);
}
function fillForm() {
  const data = JSON.parse(localStorage.getItem('formText'));
  const { name } = form.elements;
  const email = form.elements.mail;
  const message = form.elements.msg;
  name.value = data.name;
  email.value = data.email;
  message.value = data.message;
}
form.addEventListener('input', () => {
  const name = form.elements.name.value;
  const email = form.elements.mail.value;
  const message = form.elements.msg.value;

  const formText = {
    name,
    email,
    message,
  };
  populateStorage(JSON.stringify(formText));
});
document.addEventListener('DOMContentLoaded', () => {
  createProjectCards(Object.values(projects));
  if (localStorage.getItem('formText')) {
    fillForm();
  }
});
document.getElementById('popup-close').addEventListener('click', () => {
  openClosePopup();
});