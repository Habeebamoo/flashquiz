import { addCred } from "../data/cred.js";

clearData();

function proceed() {
  const category = document.getElementById('category').value;
  const user = document.getElementById('username').value;
  const gender = document.getElementById('gender').value;

  addCred(user, gender, category);
  window.location.href = 'quiz.html';
}

function clearData() {
  localStorage.removeItem('result');
  localStorage.removeItem('quizIndex')
  localStorage.removeItem('score');
}

document.querySelector('.proceed-btn').addEventListener('click', () => {
  proceed();
});
