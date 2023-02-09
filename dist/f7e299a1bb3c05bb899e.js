// import './style.css';
import scoreAdd from './modules/scoreAdd.js';
import { scoreRequest, display } from './modules/fetshScores.js';

const LeaderBoard = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'LeaderBoard game',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const output = await response.json();
  return output;
};
const userName = document.querySelector('#username');
const scoreValue = document.querySelector('#scores');
const submitButton = document.querySelector('#submitButton');
const refresh = document.querySelector('#refresh');
LeaderBoard();
window.addEventListener('load', () => {
  display();
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  scoreAdd();
  userName.value = '';
  scoreValue.value = '';
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  scoreRequest();
  display();
});