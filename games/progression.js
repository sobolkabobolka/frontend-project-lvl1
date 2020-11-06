import { runGame, randomInteger } from '../src/index.js';

function makeProgression(length, start, step) {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(start + step * i);
  }
  return arr;
}

export default function run() {
  const questionAndAnswer = () => {
    const pro = makeProgression(randomInteger(5, 10), randomInteger(1, 10), randomInteger(2, 4));
    const randomIndex = randomInteger(0, pro.length - 1);
    const answer = pro[randomIndex];
    pro[randomIndex] = '..';
    const question = pro.join(' ');

    return [question, answer];
  };

  runGame('What number is missing in the progression?', questionAndAnswer);
}
