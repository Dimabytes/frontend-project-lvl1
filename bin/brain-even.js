#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  printWelcomeMessage, getPlayerName, welcomeByName, getRandomInt,
} from './helpers.js';

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const maxCorrectInARow = 3;
const minRandomNumber = 0;
const maxRandomNumber = 100;

let correctInARow = 0;
let isMistake = false;

printWelcomeMessage();
const playerName = getPlayerName();
welcomeByName(playerName);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (correctInARow !== maxCorrectInARow && !isMistake) {
  const randomNumber = getRandomInt(minRandomNumber, maxRandomNumber);
  console.log(`Question: ${randomNumber}`);

  const playerAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(randomNumber);
  if (correctAnswer === playerAnswer) {
    console.log('Correct!');
    correctInARow += 1;
  } else {
    console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    isMistake = true;
  }
}

if (isMistake) {
  console.log(`Let's try again, ${playerName}!`);
} else {
  console.log(`Congratulations, ${playerName}!`);
}
