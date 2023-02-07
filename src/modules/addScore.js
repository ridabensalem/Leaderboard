const userName = document.querySelector('#username');
const userScores = document.querySelector('#scores');
const submitButton = document.querySelector('#submitButton');
const scoresList = document.querySelector('#scoresList');
let scores = [];

const addScore = () => {
  submitButton.addEventListener('click', () => {
    const scorePromise = new Promise((resolve, reject) => {
      const name = userName.value;
      const score = userScores.value;
      if (name === '' && score === '') {
        reject(new Error('please provide a user name or score'));
      } else {
        scores.push({ name, score });
        localStorage.setItem('scores', JSON.stringify(scores));
        resolve('Item is added successfully');
      }
    });
    // no-unused-vars-next-line
    scorePromise.then((result) => {
      const listData = scores.map(
        (item) => `<br> <li>Name: ${item.name} Score: ${item.score} <br></li>`,
      );
      scoresList.innerHTML = '';
      scoresList.innerHTML += listData.join('');
    });
  });
};
if (localStorage.getItem('scores')) {
  scores = JSON.parse(localStorage.getItem('scores'));
  const listData = scores.map(
    (item) => `<br> <li>Name: ${item.name} Score: ${item.score} <br></li>`,
  );
  scoresList.innerHTML = '';
  scoresList.innerHTML += listData.join('');
}
export default addScore;