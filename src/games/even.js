import createGame from '../index.js';
import getRandomInt, { gameRandomMax, gameRandomMin } from '../getRandomInt.js';

const isEven = (number) => number % 2 === 0;

function game() {
  const question = getRandomInt(gameRandomMin, gameRandomMax);

  return {
    question,
    correctAnswer: isEven(question) ? 'yes' : 'no',
  };
}

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default createGame(game, rule);
