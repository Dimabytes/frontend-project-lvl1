import readlineSync from 'readline-sync';
import even from './games/even.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';

const maxCorrectAnswersCount = 3;

const createGame = (game, rules) => () => {
  let correctAnswersCount = 0;
  let isMistake = false;

  function checkAnswer(question, correctAnswer) {
    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer.toString() === playerAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      isMistake = true;
    }
  }

  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(rules);

  while (correctAnswersCount < maxCorrectAnswersCount && !isMistake) {
    game(checkAnswer);
  }

  if (isMistake) {
    console.log(`Let's try again, ${playerName}!`);
  } else {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export const evenGame = createGame(even, 'Answer "yes" if the number is even, otherwise answer "no".');

export const calcGame = createGame(calc, 'What is the result of the expression?');

export const gcdGame = createGame(gcd, 'Find the greatest common divisor of given numbers.');
