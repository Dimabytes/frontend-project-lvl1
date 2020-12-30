import createGame from '../index.js';
import getRandomInt, { gameRandomMax, gameRandomMin } from '../getRandomInt.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

function game(checkAnswer) {
  const a = getRandomInt(gameRandomMin, gameRandomMax);
  const b = getRandomInt(gameRandomMin, gameRandomMax);

  checkAnswer(`${a} ${b}`, getGcd(a, b));
}

export default createGame(game, 'Find the greatest common divisor of given numbers.');
