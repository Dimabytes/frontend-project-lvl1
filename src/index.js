import readlineSync from 'readline-sync';

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

export default createGame;
