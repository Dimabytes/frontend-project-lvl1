import getRandomInt from '../getRandomInt.js';

const operators = ['*', '-', '+'];

const minRandomNumber = 0;
const maxRandomNumber = 100;

const getCorrectAnswer = (number1, number2, operator) => {
  if (operator === '*') {
    return number1 * number2;
  }
  if (operator === '-') {
    return number1 - number2;
  }
  return number1 + number2;
};

export default function calc(checkAnswer) {
  const number1 = getRandomInt(minRandomNumber, maxRandomNumber);
  const number2 = getRandomInt(minRandomNumber, maxRandomNumber);
  const operator = operators[getRandomInt(0, operators.length)];

  checkAnswer(`${number1} ${operator} ${number2}`, getCorrectAnswer(number1, number2, operator));
}
