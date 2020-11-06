import { runGame, randomInteger } from '../src/index.js';

function findGcd(firstNum, secondNum) {
  if (firstNum === secondNum) {
    return secondNum;
  }

  const min = firstNum > secondNum ? secondNum : firstNum;
  const max = firstNum < secondNum ? secondNum : firstNum;

  let result;

  for (let i = min; i > 0; i -= 1) {
    if (min % i === 0 && max % i === 0) {
      result = i;
      break;
    }
  }

  return result;
}

export default function run() {
  const questionAndAnswer = () => {
    const num1 = randomInteger(1, 10);
    const num2 = randomInteger(1, 10);
    const question = `${num1}, ${num2}`;
    const answer = findGcd(num1, num2);
    return [question, answer];
  };

  runGame('Find the greatest common divisor of given numbers.', questionAndAnswer);
}
