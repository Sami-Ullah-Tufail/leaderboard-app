import './style.css';
import * as script from './script.js'; // Import everything from script.js

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#point');
const refBtn = document.querySelector('#ref-btn');

const submitForm = async (event) => {
  event.preventDefault();
  if (!nameInput.value || !scoreInput.value) {
    return;
  }
  try {
    await script.addToList({ user: nameInput.value, score: scoreInput.value });
    nameInput.value = '';
    scoreInput.value = '';
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const fetchData = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8De87jAi3jjs/scores/');
    const data = await response.json();
    script.showScores(data.result);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

myForm.addEventListener('submit', submitForm);
refBtn.addEventListener('click', fetchData);