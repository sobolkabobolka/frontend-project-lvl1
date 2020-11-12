import runGame from '../index.js';
import randomInteger from '../utils.js';

const calc = (num1, op, num2) => {
  let result;

  if (op === '+') {
    result = num1 + num2;
  }
  if (op === '-') {
    result = num1 - num2;
  }
  if (op === '*') {
    result = num1 * num2;
  }

  return String(result);
};

const description = 'What is the result of the expression?';
const getQuestionAndAnswer = () => {
  const num1 = randomInteger(1, 10);
  const num2 = randomInteger(1, 10);
  const ops = ['+', '-', '*'];
  const op = ops[randomInteger(0, 3)];
  const question = `${num1} ${op} ${num2}`;

  const correctAnswer = calc(num1, op, num2);

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
