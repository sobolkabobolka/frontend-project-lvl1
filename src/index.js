import promptly from 'promptly';

export default async (description, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const results = questionAndAnswer();
    const question = results[0];
    const answer = results[1];

    console.log(`Question: ${question}`);
    const userAnswer = await promptly.prompt('Your answer:? ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
