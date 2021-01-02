import createGame from '../index.js';
import getRandomInt, { gameRandomMin, gameRandomMax } from '../getRandomInt.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number / 2 + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

function game() {
  const question = getRandomInt(gameRandomMin, gameRandomMax);

  return {
    question,
    correctAnswer: isPrime(question) ? 'yes' : 'no',
  };
}

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default createGame(game, rule);
