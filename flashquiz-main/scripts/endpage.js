import { cred } from "../data/cred.js";
import { getCategoryImage } from "../data/image.js";

document.querySelector('.restart-quiz').addEventListener('click', () => {
  clearData();
  window.location.href = './index.html';
});

document.querySelector('.end-quiz').addEventListener('click', () => {
  clearData();
  renderEndQuizMessage();
});

function renderEndQuizMessage() {
  document.querySelector('.end-quiz-modal').style.display = 'flex';
}

const farewellMessages = [
  "Congratulations! You made it to the end! we are so proud of you for taking the challenge. Remember, learning is a lifelong journey, and we are honoured to have been part of yours, keep exploring, keep learning and keep shining",

  "That's a wrap! Thank you for joining the party! We hope you had a blast playing our quiz. if you want to play again or try a different quiz, just let us know, Until next time, stay curious and keep on quizzing",

  "Thanks for playing! It was great having you here. We hope you had fun and learned something new. Until next time"
];

let myScore = JSON.parse(localStorage.getItem('score')) || 0;

let categorySelected = '';
let username = "";

cred.forEach((cr) => {
  categorySelected = cr.category;
  username = cr.user;
});

document.querySelector('#username').value = username.toUpperCase();

renderScoreMessage();
renderFarewellMessage();

function renderScoreMessage() {
  let scoreMessageHtml = '';

  cred.forEach(user => {
    scoreMessageHtml = `
    <div class="image-container">
      <div class="image-box">
        <img src="${getCategoryImage(user.category)}">
      </div>
    </div>
    <div class="score-message">
      <div>
        <h2>Result: <span class="score" style="color: #1845ad"></span> </h2>
        <h2>Correct Answers: <span style="color: #1845ad">${myScore}</span></h2>
        <h2>Category: <span class="category-selected" style="color: #1845ad">${categorySelected}</span></span>
      </div>
    </div>
    <div class="percentage">
      <div class="circular-progress">
        <svg class="progress-ring" width="120" height="120">
          <circle class="progress-ring__background" cx="60" cy="60" r="50" />
          <circle class="progress-ring__circle" cx="60" cy="60" r="50" />
        </svg>
        <div class="progress-text">
          <span id="progress-value">0</span>%
        </div>
      </div>
    </div>
  `;
  });

  document.querySelector('.card').innerHTML = scoreMessageHtml;
};

function renderFarewellMessage() {
  let html = '';

  const random = Math.floor(Math.random() * farewellMessages.length);
  const message = farewellMessages[random];

  html = message;
  document.querySelector('.fmessage').innerHTML = html;
}

document.querySelector('.end-quiz').addEventListener('click', () => {
  clearData();
})

function setCircularProgress(percentage) {
  const circle = document.querySelector('.progress-ring__circle');
  const text = document.getElementById('progress-value');
  const stroke = document.querySelector('.progress-ring__circle');
  const score = document.querySelector('.score');

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (percentage / 100) * circumference;

  circle.style.setProperty('--progress-offset', offset);

  text.textContent = percentage;

  if (percentage < 30) {
    stroke.style.stroke = 'red';
    score.textContent = 'Poor';
  } else if (percentage < 50) {
    stroke.style.stroke = 'tomato';
    score.textContent = 'Fair';
  } else if (percentage < 70) {
    stroke.style.stroke = 'rgb(11, 11, 250)';
    score.textContent = 'Good';
  } else if (percentage < 90) {
    stroke.style.stroke = 'yellow';
    score.textContent = 'Very Good';
  } else {
    stroke.style.stroke = '#4caf50';
    score.textContent = 'Excellent';
  }
}

displayProgress();

function displayProgress() {
  const score = myScore * 4;
  setCircularProgress(score);
}

function clearData() {
  localStorage.removeItem('result');
  localStorage.removeItem('quizIndex')
  localStorage.removeItem('score');
  localStorage.removeItem('cred');
}