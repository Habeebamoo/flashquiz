export let cred = JSON.parse(localStorage.getItem('cred')) || [];

export function addCred(user, gender, category) {
  cred.pop();

  cred.push({
    user,
    gender,
    category
  });

  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('cred', JSON.stringify(cred));
}
