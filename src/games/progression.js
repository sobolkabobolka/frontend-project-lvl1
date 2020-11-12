import runGame from '../index.js';
import randomInteger from '../utils.js';

function makeProgression(length, start, step) {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(start + step * i);
  }
  return arr;
}

function makeRandomProgression() {
  const progressionLength = randomInteger(5, 10);
  const progressionStart = randomInteger(1, 10);
  const progressionStep = randomInteger(2, 4);
  return makeProgression(progressionLength, progressionStart, progressionStep);
}

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const pro = makeRandomProgression();
  const randomIndex = randomInteger(0, pro.length - 1);
  const answer = pro[randomIndex];
  pro[randomIndex] = '..';
  const question = pro.join(' ');

  return [question, String(answer)];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
