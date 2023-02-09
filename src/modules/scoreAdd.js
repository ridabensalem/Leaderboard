const scoreAdd = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tSjTqVfZRihvosjUtNet/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: document.querySelector('#username').value,
        score: document.querySelector('#scores').value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const addedScore = await response.json();
  return addedScore;
};
export default scoreAdd;