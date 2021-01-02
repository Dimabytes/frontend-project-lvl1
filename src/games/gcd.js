import createGame from '../index.js';
import getRandomInt, { gameRandomMax, gameRandomMin } from '../getRandomInt.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

function game() {
  const a = getRandomInt(gameRandomMin, gameRandomMax);
  const b = getRandomInt(gameRandomMin, gameRandomMax);
  return {
    question: `${a} ${b}`,
    correctAnswer: getGcd(a, b),
  };
}

const rule = 'Find the greatest common divisor of given numbers.';

export default createGame(game, rule);
