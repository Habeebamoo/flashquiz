import { addCred } from "../data/cred.js";

function proceed() {
  const category = document.getElementById('category').value;
  const user = document.getElementById('username').value;
  const gender = document.getElementById('gender').value;

  addCred(user, gender, category);
  window.location.href = 'quiz.html';
}

document.querySelector('.proceed-btn').addEventListener('click', () => {
  proceed();
});