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

const getCorrectAnswer = (number) => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

export default function prime(checkAnswer) {
  const randomNumber = getRandomInt(gameRandomMin, gameRandomMax);

  checkAnswer(randomNumber, getCorrectAnswer(randomNumber));
}
