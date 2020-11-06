#!/usr/bin/env node
import { runGame, randomInteger } from '../src/index.js';

async function run() {
  const questionAndAnswer = () => {
    const num1 = randomInteger(1, 10);
    const num2 = randomInteger(1, 10);
    const ops = ['+', '-', '*'];
    const op = ops[randomInteger(0, 3)];
    const question = `${num1} ${op} ${num2}`;

    let correctAnswer;

    if (op === '+') {
      correctAnswer = num1 + num2;
    }
    if (op === '-') {
      correctAnswer = num1 - num2;
    }
    if (op === '*') {
      correctAnswer = num1 * num2;
    }

    return [question, correctAnswer];
  };

  runGame('What is the result of the expression?', questionAndAnswer);
}

run();
