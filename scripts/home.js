import { cred } from "../data/cred.js";
import { getCategoryImage } from "../data/image.js";

const maleAvatar = [{
  image: './assets/ava1.png'
}, {
  image: './assets/ava2.png'
}, {
  image: './assets/ava3.png'
}, {
  image: './assets/ava4.png'
}];

const femaleAvatar = [{
  image: './assets/ava6.png'
}, {
  image: './assets/ava7.png'
}];

document.querySelector('.start-btn').addEventListener('click', () => {
  localStorage.removeItem('result');
  const modal = document.querySelector('.start-quiz-modal');
  modal.style.display = 'flex';
});

document.querySelector('.exit-btn').addEventListener('click', () => {
  const modal = document.querySelector('.start-quiz-modal');
  modal.style.display = 'none';
})

renderProfile();

function renderProfile() {
  let dashboardHtml;

  cred.forEach((profile) => {
    const username = profile.user;
    const gender = profile.gender;
    const category = profile.category;
    
    dashboardHtml = `
      <div class="leadboard">
        <div class="user-image">
          <img src="${getCategoryImage(category)}">
        </div>
        <div>
          <h2>Category: <span class="blue-text">${category}</span></h2>
          <h3>No. of Questions: <span class="blue-text">25</span><h2>
          <h3>Time Available: <span class="blue-text">7mins</span></h3>
        </div>
      </div>
      <div class="profile">
        <div class="user-details">
          <h2>User: <span class="username red-text">${(username.toUpperCase())}</span></h2>
          <h2>Level: <span class="user-level red-text">Junior</span></h2>
        </div>
        <div class="user-image-cont">
          <div class="user-image">
            <img src="${getAvatar(gender)}"></img>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.dashboard').innerHTML = dashboardHtml;
}

function getAvatar(gender) {
  let avatarGroup = '';

  if(gender == 'male') {
    avatarGroup = maleAvatar;
  } else {
    avatarGroup = femaleAvatar;
  }
  const random = Math.floor(Math.random() * avatarGroup.length);
  const avatarObj = avatarGroup[random];
  const avatar = avatarObj.image;

  return avatar;
}

const accordion = [
  {
      header: 'Will there be a countdown',
      id: '001',
      body: 'Yes, there is a 7 minute countdown for each quiz session, as designed to improve users speed and efficiency'
  }, {
      header: 'Are the questions real',
      id: '002',
      body: 'Sure. As said earlier FlashQuiz communicates with Open Trivia Database to fetch you real set of questions regarding the cateogry you selected'
  }, {
      header: 'Who is the Developer',
      id: '008',
      body: 'FlashQuiz as a whole was built, developed and been managed by Habeeb Olakunle Amoo'
  }
];

renderAccordion();

function renderAccordion() {
  let accordionHtml = '';

  accordion.forEach((details) => {
    accordionHtml += `
      <div class="accordion-item">
        <div class="accordion-header head-${details.id}">
          <p>${details.header}</p>
          <span class="toggle-btn-${details.id}">+</span>
        </div>
        <div class="accordion-body body-${details.id}">
          <p>${details.body}</p>
        </div>
      </div>
    `;
  });
  
  document.querySelector('.accordion').innerHTML = accordionHtml;
};

accordion.forEach((details) => {
  let status = 'off';

  document.querySelector(`.head-${details.id}`).addEventListener('click', () => {
      let body = document.querySelector(`.body-${details.id}`);
      let toggleBtn = document.querySelector(`.toggle-btn-${details.id}`)

      if(status === 'off') {
          body.style.display = 'block';
          toggleBtn.textContent = '-';
          status = 'on';
      } else if (status === 'on') {
          body.style.display = 'none';
          toggleBtn.textContent = '+';
          status = 'off';
      }
  })
})

