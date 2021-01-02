import createGame from '../index.js';
import getRandomInt, { gameRandomMax, gameRandomMin } from '../getRandomInt.js';

const operators = ['*', '-', '+'];

const getCorrectAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '*':
      return number1 * number2;
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    default:
      return null;
  }
};

function game() {
  const number1 = getRandomInt(gameRandomMin, gameRandomMax);
  const number2 = getRandomInt(gameRandomMin, gameRandomMax);
  const operator = operators[getRandomInt(0, operators.length)];
  return {
    question: `${number1} ${operator} ${number2}`,
    correctAnswer: getCorrectAnswer(number1, number2, operator),
  };
}

const rule = 'What is the result of the expression?';

export default createGame(game, rule);
