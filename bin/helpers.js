import readlineSync from 'readline-sync';

export const printWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
};

export const getPlayerName = () => readlineSync.question('May I have your name? ');

export const welcomeByName = (name) => {
  console.log(`Hello, ${name}`);
};

export const getRandomInt = (min, max) => min + Math.floor((max - min) * Math.random());
