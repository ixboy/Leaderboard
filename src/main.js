const gameId = 'P2BvfbmisuujDRLJyYxc';
const list = document.getElementById('ul');
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');

const printData = (data) => {
  list.innerHTML = ' <li><span>Name</span> <span>score</span></li>';

  data.forEach((data) => {
    const listElem = document.createElement('li');
    const spanName = document.createElement('span');
    const spanScore = document.createElement('span');
    const { user, score } = data;
    spanName.innerText = user;
    spanScore.innerHTML = score;
    listElem.appendChild(spanName);
    listElem.appendChild(spanScore);
    list.appendChild(listElem);
  });
};

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const { result } = data;
  printData(result);
  return data;
};

const pushData = async (user, score) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ user, score }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

const getValues = (e) => {
  e.preventDefault();
  const user = e.target.parentElement.children[1].value;
  const score = e.target.parentElement.children[2].value;
  pushData(user, score);
  e.target.parentElement.children[1].value = '';
  e.target.parentElement.children[2].value = '';
};

refresh.addEventListener('click', getData);
submit.addEventListener('click', getValues);
window.addEventListener('DOMContentLoaded', getData);