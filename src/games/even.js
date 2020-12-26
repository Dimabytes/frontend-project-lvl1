import getRandomInt, { gameRandomMax, gameRandomMin } from '../getRandomInt.js';

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default function even(checkAnswer) {
  const randomNumber = getRandomInt(gameRandomMin, gameRandomMax);

  checkAnswer(randomNumber, getCorrectAnswer(randomNumber));
}
