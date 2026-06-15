import './style.css';
import { fetchNYCQuestions } from './data/api';
import { Question, QuizState } from './types';
import { getElement, createElement } from './utils/dom';

// Application State (Closure concept - state is protected within the module scope)
let state: QuizState = {
  currentQuestionIndex: 0,
  score: 0,
  isComplete: false,
  userAnswers: {}
};

let questions: Question[] = [];

// Initialize the app
const init = async () => {
  const appContainer = getElement<HTMLDivElement>('#app');
  appContainer.innerHTML = '<h2>Loading NYC Data...</h2>';

  try {
    questions = await fetchNYCQuestions();
    renderQuestion();
  } catch (error) {
    // Basic Error Handling
    appContainer.innerHTML = `<h2>Error: ${(error as Error).message ?? 'Unknown error occurred'}</h2>`;
  }
};

// Render the current question
const renderQuestion = () => {
  const appContainer = getElement<HTMLDivElement>('#app');
  appContainer.innerHTML = ''; // Clear container

  if (state.isComplete) {
    renderResults(appContainer);
    return;
  }

  // Modern Syntax: Destructuring and Optional Chaining
  const currentQuestion = questions[state.currentQuestionIndex];
  if (!currentQuestion) return;

  const { text, options, difficulty } = currentQuestion;

  const questionCard = createElement<HTMLDivElement>('div', 'card');
  questionCard.innerHTML = `
    <span class="badge">Difficulty: ${difficulty.toUpperCase()}</span>
    <h2>${text}</h2>
    <div id="options-container"></div>
    <p>Question ${state.currentQuestionIndex + 1} of ${questions.length}</p>
  `;

  appContainer.appendChild(questionCard);

  const optionsContainer = getElement<HTMLDivElement>('#options-container');

  // Modern syntax: Arrow functions
  options.forEach((option) => {
    const button = createElement<HTMLButtonElement>('button', 'option-btn', option);
    
    // Event Handling
    button.addEventListener('click', () => handleAnswer(option));
    optionsContainer.appendChild(button);
  });
};

const handleAnswer = (selectedOption: string) => {
  const currentQuestion = questions[state.currentQuestionIndex];
  
  // State mutation
  state.userAnswers[currentQuestion.id] = selectedOption;

  if (selectedOption === currentQuestion.correctAnswer) {
    state.score++;
  }

  // Check if quiz is over
  if (state.currentQuestionIndex + 1 < questions.length) {
    state = { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 }; // Spread operator
    renderQuestion();
  } else {
    state.isComplete = true;
    renderQuestion();
  }
};

const renderResults = (container: HTMLDivElement) => {
  // Objects: Object.entries to process user answers
  const answerStats = Object.entries(state.userAnswers).map(([id, answer]) => `Q${id}: ${answer}`).join(' | ');

  container.innerHTML = `
    <div class="results">
      <h2>Quiz Complete!</h2>
      <p>Your Score: <strong>${state.score}</strong> out of ${questions.length}</p>
      <p class="stats">Answers logged: ${answerStats}</p>
      <button id="restart-btn">Restart Quiz</button>
    </div>
  `;

  getElement<HTMLButtonElement>('#restart-btn').addEventListener('click', () => {
    // Reset state and re-render
    state = { currentQuestionIndex: 0, score: 0, isComplete: false, userAnswers: {} };
    renderQuestion();
  });
};

// Bootstrap the application
document.addEventListener('DOMContentLoaded', init);