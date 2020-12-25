import getRandomInt from '../getRandomInt.js';

const minRandomNumber = 0;
const maxRandomNumber = 100;

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default function even(checkAnswer) {
  const randomNumber = getRandomInt(minRandomNumber, maxRandomNumber);

  checkAnswer(randomNumber, getCorrectAnswer(randomNumber));
}
