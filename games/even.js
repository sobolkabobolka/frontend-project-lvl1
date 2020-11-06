import { runGame, randomInteger } from '../src/index.js';

export default function run() {
  const questionAndAnswer = () => {
    const question = randomInteger(1, 100);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return [question, answer];
  };

  runGame('Answer "yes" if the number is even, otherwise answer "no".', questionAndAnswer);
}
