import readlineSync from 'readline-sync';

const roundsCount = 3;

const createGame = (getRound, rule) => () => {
  let correctAnswersCount = 0;

  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(rule);

  while (correctAnswersCount < roundsCount) {
    const { question, correctAnswer } = getRound();

    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log(`Congratulations, ${playerName}!`);
  }
};

export default createGame;
