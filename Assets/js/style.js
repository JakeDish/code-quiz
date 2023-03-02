currentQuestion = 0;
var secondsLeft = 60;
var timeEl = document.getElementById("timeRemaining");
var questionDiv = document.getElementById("questionDiv");
var gameWon = false

let questions = [
  {
    question: "What is one way of declaring a variable in JS?",
    options: ["const", "string", "integer"],
    answer: "const",
  },
  {
    question: "What is a true/false data type called in JS?",
    options: ["string", "boolean"],
    answer: "boolean",
  },
  {
    question: "Which is an example of a number?",
    options: ["five", "thirty", "2"],
    answer: "2",
  },
];

const displayQuestion = () => {
    if (currentQuestion === questions.length || secondsLeft <= 0) {
    gameOver()
  }
  else {
  document.getElementById("questionDiv").innerHTML = `
      <p>
      ${questions[currentQuestion].question}
      </p>
      `;
  console.log(questions[currentQuestion].options.length);
  for (
    let index = 0;
    index < questions[currentQuestion].options.length;
    index++
  ) {
    var choice = questions[currentQuestion].options[index];
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = index + 1 + ". " + choice;
    questionDiv.appendChild(choiceNode);
    choiceNode.addEventListener("click", checkAnswer);
  }
}
};

const checkAnswer = (event) => {
  if (event.target.value != questions[currentQuestion].answer) {
    alert("wrong!");
    secondsLeft = secondsLeft -10
  } else {
    alert("right!");
  
  currentQuestion++
  displayQuestion()
  }
};

const timer = () => {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      gameOver();
      clearInterval(timerInterval);
    }
  }, 1000);
};

const gameOver = () => {
  clearInterval(secondsLeft)

};

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("option")) {
    console.log("you click an option");
  }
});

document.getElementById("start").addEventListener("click", (event) => {
  document.getElementById("questOps").classList.remove("hidden");
  displayQuestion();
  timer();
});
