/* eslint-disable import/prefer-default-export */
const gameId = 'P2BvfbmisuujDRLJyYxc';
// const name = document.getElementById('username');
// const score = document.getElementById('score');
const list = document.getElementById('ul');
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');



const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const { result } = data;
  printData(result);
  return data;
};

refresh.addEventListener('click', getData);