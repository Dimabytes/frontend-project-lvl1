import readlineSync from 'readline-sync';

const roundsCount = 3;

const createGame = (game, rule) => () => {
  let correctAnswersCount = 0;

  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(rule);

  while (correctAnswersCount < roundsCount) {
    const { question, correctAnswer } = game();

    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer.toString() === playerAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
      if (correctAnswersCount === roundsCount) {
        console.log(`Congratulations, ${playerName}!`);
      }
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }
};

export default createGame;
