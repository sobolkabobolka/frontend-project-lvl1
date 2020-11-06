import { runGame, randomInteger } from '../src/index.js';

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

export default function run() {
  const questionAndAnswer = () => {
    const question = randomInteger(1, 20);
    const answer = isPrime(question) === true ? 'yes' : 'no';
    return [question, answer];
  };

  runGame('Answer "yes" if given number is prime. Otherwise answer "no"..', questionAndAnswer);
}
