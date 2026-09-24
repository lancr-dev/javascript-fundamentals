const questions = [
  {
    question: 'What keyword is used to declare a variable?',
    answer: 'let',
  },
  {
    question: 'What method adds an item to the end of an array?',
    answer: 'push',
  },
];

const runMiniQuizApp = (quizQuestions) => {
  let score = 0;
  for (let question of quizQuestions) {
    alert(question.question);

    let answer = prompt('Enter your answer: ');
    answer = answer.trim().toLocaleLowerCase();

    if (answer === question.answer) {
      alert('Correct!');
      score++;
    } else {
      alert('Wrong!');
    }
  }

  alert(`Score: ${score}/${quizQuestions.length}`);
};

runMiniQuizApp(questions);
