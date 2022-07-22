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
  project5: {
    name: 'Budget Rails',
    description: 'Budget Rails is a budgeting app.',
    longDescription: 'Budget Rails is a budgeting app, it will allow you to create a budget, and track your expenses, and see how you are doing, and how you are spending your money, and you can also categorize your transactions and see how you are spending your money by category.',
    featuredImage: 'https://user-images.githubusercontent.com/20567503/180420600-9cbcaf9e-96c8-45de-ba5f-3eae61194ef0.png',
    languages: ['Ruby on Rails', 'PostgreSQL', 'TailwindCSS'],
    linkLive: 'https://mirouhml-budget-rails.herokuapp.com/',
    linkSource: 'https://github.com/mirouhml/Budget-Rails',
    type: 'normal',
  },
  project2: {
    name: 'Covid-19 Tracker Mobile App',
    description: 'Covid-19 Treacker for all countries of the world.',
    longDescription: 'This is a website that shows recent and old data of Covid-19 stats for all the countries of the world, it uses a universal API as the data source.',
    featuredImage: 'https://user-images.githubusercontent.com/20567503/167962932-1af6fbbf-5623-434d-a5e7-3adfcbc8e50d.png',
    languages: ['React', 'Redux', 'CSS'],
    linkLive: 'https://github.com/mirouhml/covid-19-tracker',
    linkSource: 'https://github.com/mirouhml/covid-19-tracker',
    type: 'normal',
  },
  project0: {
    name: 'Creative Anime Convention',
    description: 'Creative Anime Convetion 2022 is the gathering of everything anime and otaku culture, celebrating the many aspects of Japanese pop culture and its influence on the world,taking place in Algeria.',
    longDescription: 'Creative Anime Convention or CAC offers tons of fun and educational workshops, live conferences from big and influential figures of the anime industry, new anime series and movies announcements, trailers and exclusive debut screenings, live concerts and musical performances, and many more events awaiting you across 3 days from Thursday, February 24th to Saturday, February 26th, 2022 in Sahat Chouhada, Algeirs, Algeria.',
    featuredImage: 'src/cac.png',
    languages: ['html', 'css', 'scss', 'JavaScript'],
    linkLive: 'https://mirouhml.github.io/anime-convention-project',
    linkSource: 'https://github.com/mirouhml/anime-convention-project',
    type: 'normal',
  },
  project1: {
    name: 'Gotta Catch \'Em All',
    description: 'This a website for all pokémons.',
    longDescription: 'This is a web app where users can view all pokémons with their respective characteristics, abilities and types fetched from the Pokeapi. Users can like pokemon cards, view the number of likes each card has. Users can also leave comments and view comments made by others!',
    featuredImage: 'https://user-images.githubusercontent.com/20567503/157920894-57d9a062-b405-4941-9540-affbb0df6d99.png',
    languages: ['html', 'bootstrap', 'ES6', 'css'],
    linkLive: 'https://mirouhml.github.io/GottaCatchEmAll/',
    linkSource: 'https://github.com/mirouhml/GottaCatchEmAll',
    type: 'normal',
  },
  project3: {
    name: 'Space Travellers\' Hub',
    description: 'This is a web application for a company that provides commercial and scientific space travel services.',
    longDescription: 'This is a web application for a company that provides commercial and scientific space travel services. The application will use real live data from the SpaceX API, and it will allow users to book rockets and join selected space missions.',
    featuredImage: 'https://user-images.githubusercontent.com/20567503/162003030-067de73b-d04e-40ec-a8f8-65e2993db821.png',
    languages: ['React', 'Redux', 'CSS'],
    linkLive: 'https://mirouhml.github.io/mv-space-travellers/',
    linkSource: 'https://github.com/mirouhml/mv-space-travellers',
    type: 'normal',
  },
  project4: {
    name: 'Bookstore',
    description: 'This is a "Bookstore" website, where you can add books to your list and check available categories.',
    longDescription: 'This is a "Bookstore" website, where you can add books to your list and check available categories.',
    featuredImage: 'https://user-images.githubusercontent.com/20567503/161007676-c4acaed1-d848-4ae6-9321-b0e8369f3a88.png',
    languages: ['React', 'Redux', 'CSS'],
    linkLive: 'https://mirouhml.github.io/Bookstore/',
    linkSource: 'https://github.com/mirouhml/Bookstore',
    type: 'normal',
  },
  project6: {
    name: 'Al Mentoria',
    description: 'Al Mentoria is a mentors seeking app.',
    longDescription: 'Al Mentoria is a virtual space to connect with mentors that can help you with your technical as well as behavioral issues. If you are stuck somewhere and need a second look at things, make a reservation now.',
    featuredImage: 'https://user-images.githubusercontent.com/20567503/180013479-d3013553-0aa4-42d8-b938-97f58f9d5791.png',
    languages: ['React', 'Redux', 'JavaScript', 'Ruby on Rails', 'PostgreSQL', 'TailwindCSS'],
    linkLive: 'https://almentoria.herokuapp.com/',
    linkSource: 'https://github.com/mirouhml/al-mentoria-frontend',
    type: 'featured',
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
