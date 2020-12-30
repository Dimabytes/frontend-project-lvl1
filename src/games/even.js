import createGame from '../index.js';
import getRandomInt, { gameRandomMax, gameRandomMin } from '../getRandomInt.js';

const isEven = (number) => number % 2 === 0;

function game(checkAnswer) {
  const randomNumber = getRandomInt(gameRandomMin, gameRandomMax);

  checkAnswer(randomNumber, isEven(randomNumber) ? 'yes' : 'no');
}

export default createGame(game, 'Answer "yes" if the number is even, otherwise answer "no".');
