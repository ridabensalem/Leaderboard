const scoreRequest = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/S8dMshAFuFr15IczP1T9/scores/',
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
      <div class="card_scores_lists">
      <img src="https://rb.gy/vdwyx4" alt="player">
      <p>${value.user}</p>
      <p> ${value.score}</p>
  </div>`;
    list.insertAdjacentHTML('beforeend', renderData);
  });
};
export { scoreRequest, display };
