import getRandomInt, { gameRandomMax, gameRandomMin } from '../getRandomInt.js';

const getCorrectAnswer = (a, b) => {
  if (!b) {
    return a;
  }

  return getCorrectAnswer(b, a % b);
};

export default function gcd(checkAnswer) {
  const a = getRandomInt(gameRandomMin, gameRandomMax);
  const b = getRandomInt(gameRandomMin, gameRandomMax);

  checkAnswer(`${a} ${b}`, getCorrectAnswer(a, b));
}
