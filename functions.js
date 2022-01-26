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
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'src/featured-project-image.svg',
    languages: ['html', 'bootstrap', 'bootstrap', 'Ruby'],
    linkLive: 'location.href=\'https://mirouhml.github.io/portfolio/index.html\'',
    linkSource: 'location.href=\'https://github.com/mirouhml/portfolio\'',
  },
  project1: {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'src/project-image.svg',
    languages: ['html', 'bootstrap', 'Ruby'],
    linkLive: 'location.href=\'https://mirouhml.github.io/portfolio/index.html\'',
    linkSource: 'location.href=\'https://github.com/mirouhml/portfolio\'',
  },
  project2: {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'src/project-image.svg',
    languages: ['html', 'bootstrap', 'Ruby', 'css'],
    linkLive: 'location.href=\'https://mirouhml.github.io/portfolio/index.html\'',
    linkSource: 'location.href=\'https://github.com/mirouhml/portfolio\'',
  },
  project3: {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'src/project-image.svg',
    languages: ['html', 'bootstrap', 'Ruby'],
    linkLive: 'location.href=\'https://mirouhml.github.io/portfolio/index.html\'',
    linkSource: 'location.href=\'https://github.com/mirouhml/portfolio\'',
  },
  project4: {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'src/project-image.svg',
    languages: ['html', 'bootstrap', 'Ruby'],
    linkLive: 'location.href=\'https://mirouhml.github.io/portfolio/index.html\'',
    linkSource: 'location.href=\'https://github.com/mirouhml/portfolio\'',
  },
  project5: {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'src/project-image.svg',
    languages: ['html', 'bootstrap', 'Ruby'],
    linkLive: 'location.href=\'https://mirouhml.github.io/portfolio/index.html\'',
    linkSource: 'location.href=\'https://github.com/mirouhml/portfolio\'',
  },
  project6: {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: 'src/project-image.svg',
    languages: ['html', 'bootstrap', 'Ruby'],
    linkLive: 'location.href=\'https://mirouhml.github.io/portfolio/index.html\'',
    linkSource: 'location.href=\'https://github.com/mirouhml/portfolio\'',
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
  liveButton.setAttribute('onclick', project.linkLive);
  const sourceButton = document.getElementById('source-button');
  sourceButton.setAttribute('onclick', project.linkSource);
}
function openClosePopup() {
  const x = document.querySelector('.project-popup');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
  } else {
    x.style.display = 'flex';
  }
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
    if (i > 0) { projectCards(projectList[i], i); }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  createProjectCards(Object.values(projects));
});
document.getElementById('featured-button').addEventListener('click', () => {
  openClosePopup();
  createPopupWindow(projects.project0);
});
document.getElementById('popup-close').addEventListener('click', () => {
  openClosePopup();
});
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
