import runGame from '../index.js';
import randomInteger from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = randomInteger(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
export default () => {
  runGame(description, getQuestionAndAnswer);
};
