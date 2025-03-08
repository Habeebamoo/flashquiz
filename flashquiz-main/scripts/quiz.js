import { data } from "../data/data.js";
import { getUrl } from "../data/url.js";

if(!sessionStorage.getItem('refreshed')) {
  sessionStorage.setItem('refreshed', true);
  setTimeout(() => {
    location.reload();
  }, 2500)
}

function loadData() {  
  const url = getUrl();
  const promise =  fetch(url).then(response => response.json()).then((data) => {
    saveData(data.results);
  }).catch((error) => {
    console.log(error)
  });

  return promise;
};

function saveData(results) {
  localStorage.setItem('result', JSON.stringify(results));
}

let quizIndex = JSON.parse(localStorage.getItem('quizIndex')) || [];
let quiz;

function loadPage() {
  if(data.length == 0) {
    loadData().then(() => {
      renderQuiz()
      setInterval(() => { stopWatch() }, 18);
    });

  } else {
    renderQuiz()
    setInterval(() => { stopWatch() }, 18);
  };
}

loadPage();

function renderQuiz() {
  let quizHtml;
  let quizArray = quizIndex.length;
  quiz = data[quizArray];

  quizHtml = `
    <div class="question-screen-cont">
      <div class="question-screen">
        <p>${quiz.question}</p>
      </div>
    </div>
    <div class="answer-box">
      ${getOptions(quiz)}
    </div>
    <div class="footer">
      <div class="question-marker">
        <p>Question <span class="question-marker-span">${quizArray + 1}</span> of 25</p>
      </div>
      <div class="navigation">
        <img src="./assets/next.png" class="nxt-btn">
      </div>
    </div>
  `;

  document.querySelector('.quiz').innerHTML = quizHtml;

  document.querySelector('.nxt-btn').addEventListener('click', () => {
    quizIndex.push('index')
    localStorage.setItem('quizIndex', JSON.stringify(quizIndex));
    renderQuiz();
  })

  document.querySelectorAll('.answer-button').forEach((button) => {
    button.addEventListener('click', () => {
      const { option }  = button.dataset;
      const { correct_answer } = quiz;
  
      if(option == correct_answer) {
        saveScore();
      }
  
      document.querySelector('.answer-box').style.display = 'none';
    })
  });

  if(quizArray == 25) {
    endQuiz()
  }
}

function getOptions(quiz) {
  const answers = [];

  const correctAnswer = quiz.correct_answer;
  const incorrectAnswers = quiz.incorrect_answers;

  incorrectAnswers.forEach((incorrectAnswer) => {
    answers.push(incorrectAnswer);
  });

  answers.push(correctAnswer);

  const demoAnswer1 = [answers[0], answers[1], answers[2], answers[3]];
  const demoAnswer2 = [answers[1], answers[0], answers[2], answers[3]];
  const demoAnswer3 = [answers[2], answers[1], answers[0], answers[3]];
  const demoAnswer4 = [answers[3], answers[1], answers[2], answers[0]];
  const demoAnswer5 = [answers[0], answers[2], answers[1], answers[3]];
  const demoAnswer6 = [answers[0], answers[1], answers[3], answers[2]];
  const demoAnswer7 = [answers[0], answers[3], answers[2], answers[1]];

  const demoAnswers = [demoAnswer1, demoAnswer2, demoAnswer3, demoAnswer4, demoAnswer5, demoAnswer6, demoAnswer7];

  const random = Math.floor(Math.random() * demoAnswers.length);
  const demoAnswer = demoAnswers[random];

  return `
    <button class="answer-button" data-option="${demoAnswer[0]}">${demoAnswer[0]}</button>
    <button class="answer-button" data-option="${demoAnswer[1]}">${demoAnswer[1]}</button>
    <button class="answer-button" data-option="${demoAnswer[2]}">${demoAnswer[2]}</button>
    <button class="answer-button" data-option="${demoAnswer[3]}">${demoAnswer[3]}</button>
  `;
}

let myScore = JSON.parse(localStorage.getItem('score')) || 0;
  
function saveScore() {
  myScore++;
  localStorage.setItem('score', JSON.stringify(myScore));
}

let milsec = 59;
let secs = 59;
let mins =  6;

function stopWatch() {
  milsec--;

  if(milsec == 0) {
    milsec = 59;
    secs--;

    if(secs == 0) {
      secs = 59
      mins--
    }
  }

  let milsecSring;
  let secsString;
  let minsString;

  if(milsec < 10) {
    milsecSring = `<span class="red-text"><small>0${milsec}</small><span>`;
  } else {
    milsecSring = `<span class="red-text"><small>${milsec}</small><span>`;
  }

  if(secs < 10) {
    secsString = `<span>0${secs}<span>`;
  } else {
    secsString = `<span>${secs}<span>`
  }

  if(mins < 10) {
    minsString  = `<span>0${mins}</span>`
  } else {
    minsString = `<span>${mins}</span>`;
  }

  if(mins == 0) {
    document.querySelector('.stopwatch').innerHTML = `00:00:00`;
    endQuiz();
  } else {
    document.querySelector('.stopwatch').innerHTML = `${minsString}:${secsString}:${milsecSring}`;
  }
}

function endQuiz() {
  window.location.href = 'endpage.html';
}
