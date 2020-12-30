import createGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const minProgressionLength = 5;
const maxProgressionLength = 15;

const minStep = 1;
const maxStep = 10;

const minFirstElement = 1;
const maxFirstElement = 20;

function game(checkAnswer) {
  const step = getRandomInt(minStep, maxStep);
  const progressionLength = getRandomInt(minProgressionLength, maxProgressionLength);
  const firstElement = getRandomInt(minFirstElement, maxFirstElement);
  const array = new Array(progressionLength)
    .fill(0)
    .map((el, index) => firstElement + index * step);
  const missedElementIndex = getRandomInt(0, progressionLength);
  const missedElement = array[missedElementIndex];
  array[missedElementIndex] = '..';

  checkAnswer(array.join(' '), missedElement);
}

export default createGame(game, 'What number is missing in the progression?');
