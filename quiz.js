let button = document.querySelector("button");
button.addEventListener("click", quiz);
let quizscore = 0;
let totalScore = 0;

const quizQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "RequireJS",
        c: "ESLint"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      answers: {
        a: "The <body> section",
        b: "Both the <head> section and the <body> section are correct",
        c: "The <head> section"
      },
      correctAnswer: "c"
    }
  ];

  totalScore=quizQuestions.length;
  document.getElementById('noofque').innerHTML=totalScore;

function quiz() {
    startQuiz();

    for(i=0;i<quizQuestions.length;i++){
        askQuestion(quizQuestions[i]);
    }
   
    endQuiz();
}

function startQuiz() {
    let quizTaker = prompt("Welcome to the quiz! What's your name?");
    console.log(`Hello ${quizTaker}! Good luck for the quiz.`);
}

function endQuiz() {
    console.log(`You've finished the quiz.
    Out of ${totalScore} questions, you answered ${quizscore} correctly!
    Score: ${(quizscore / totalScore) * 100}%`);
}

function askQuestion(objQuestion) {
    let answer = prompt(objQuestion.question + `
    a : `+ objQuestion.answers.a+ `
    b : `+objQuestion.answers.b+ `
    c : `+objQuestion.answers.c
    );
    if (answer.toLowerCase() === objQuestion.correctAnswer) {
        quizscore += 1;
    }
    console.log(objQuestion.question + ' - answer : '+ answer);
}



