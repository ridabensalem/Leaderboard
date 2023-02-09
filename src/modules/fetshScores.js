const scoreRequest = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tSjTqVfZRihvosjUtNet/scores/',
  );
  const scoreValue = await response.json();
  return scoreValue.result;
};

const list = document.querySelector('#scoresList');

const display = async () => {
  const data = await scoreRequest();
  list.innerHTML = '';
  data.forEach((value) => {
    const renderData = `
      <div>
      <div>${value.user}</div>
      <div>${value.score}</div>
      </div>`;
    list.insertAdjacentHTML('beforeend', renderData);
  });
};
export { scoreRequest, display };