import runGame from '../index.js';
import randomInteger from '../utils.js';

function isPrime(num) {
  let result = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}

const getQuestionAndAnswer = () => {
  const question = randomInteger(1, 20);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"..';

export default () => {
  runGame(description, getQuestionAndAnswer);
};
