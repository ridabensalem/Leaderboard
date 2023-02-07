const userName = document.querySelector('#username');
const userScores = document.querySelector('#scores');
const submitButton = document.querySelector('#submitButton');
const scoresList = document.querySelector('#scoresList');
let scores = [];

const addScore = () => {
  submitButton.addEventListener('click', () => {
    let scorePromise = new Promise((resolve, reject) => {
      let name = userName.value;
      let score = userScores.value;
      if (name === '' && score === '') {
        reject('Please enter a name');
      }
      else{
        scores.push({ name: name, score: score });
        localStorage.setItem('scores', JSON.stringify(scores)); 
      resolve('Item is added successfully');

      }

    });

    scorePromise.then(result => {
      const listData = scores.map(
        item => `<br> <li>Name: ${item.name} Score: ${item.score} <br></li>`
      );
      scoresList.innerHTML = '';
      scoresList.innerHTML += listData.join('');
    });
  });
};
if (localStorage.getItem('scores')) {
    scores = JSON.parse(localStorage.getItem('scores'));
    const listData = scores.map(
      item => `<br> <li>Name: ${item.name} Score: ${item.score} <br></li>`
    );
    scoresList.innerHTML = '';
    scoresList.innerHTML += listData.join('');
  }
export default addScore;