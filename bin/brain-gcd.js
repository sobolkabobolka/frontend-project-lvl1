#!/usr/bin/env node
import promptly from 'promptly';

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

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

async function run() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const num1 = randomInteger(1, 100);
    const num2 = randomInteger(1, 100);
    console.log(`Question: ${num1}, ${num2}`);
    const answer = +(await promptly.prompt('Your answer:? '));

    const correctAnswer = findGcd(num1, num2);

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

run();
