/* eslint-disable import/prefer-default-export */
const gameId = 'P2BvfbmisuujDRLJyYxc';
// const name = document.getElementById('username');
// const score = document.getElementById('score');
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

refresh.addEventListener('click', getData);