
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let userScore = 0;

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctIndex: 0
  },
  {question: 'What is the capital of India?',
    options: ['Mumbai', 'New Delhi', 'Cairo', 'Madrid'],
    correctIndex: 1}
];

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;

  optionsContainer.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option');
    button.addEventListener('click', () => checkAnswer(index));
    optionsContainer.appendChild(button);
  });

  nextButton.style.display = 'block';
  nextButton.addEventListener('click',()=>checkAnswer(-1))
  if (currentQuestionIndex==questions.length -1){
    nextButton.textContent = "Finish Quiz"
  }
}

function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  if (selectedIndex === question.correctIndex) {
    userScore++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  questionElement.textContent = `You scored ${userScore} out of ${questions.length}!`;
  optionsContainer.innerHTML = '';
  nextButton.style.display = 'none';
}

showQuestion(); 

