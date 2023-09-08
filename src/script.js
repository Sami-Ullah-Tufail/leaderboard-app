const scoreList = document.querySelector('#score-list');

const addToList = async (score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8De87jAi3jjs/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
};

const showScores = (scores) => {
  scoreList.innerHTML = '';
  scores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.user}: ${score.score}`;
    listItem.classList.add('list');
    scoreList.appendChild(listItem);
  });
};

export { addToList, showScores };