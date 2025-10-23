const questionEl = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextBtn = document.getElementById('next-btn')
const resultEl = document.getElementById('result')
const scoreEl = document.getElementById('score')
const restartBtn = document.getElementById('restart-btn')

const questions = [
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Paris', correct: true },
      { text: 'Berlin', correct: false },
      { text: 'Madrid', correct: false },
      { text: 'Rome', correct: false }
    ]
  },
  {
    question: 'Which language runs in a web browser?',
    answers: [
      { text: 'Java', correct: false },
      { text: 'C', correct: false },
      { text: 'Python', correct: false },
      { text: 'JavaScript', correct: true }
    ]
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      { text: 'Central Style Sheets', correct: false },
      { text: 'Cascading Style Sheets', correct: true },
      { text: 'Cascading Simple Sheets', correct: false },
      { text: 'Cars SUVs Sailboats', correct: false }
    ]
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: [
      { text: 'Mars', correct: true },
      { text: 'Venus', correct: false },
      { text: 'Jupiter', correct: false },
      { text: 'Saturn', correct: false }
    ]
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    answers: [
      { text: 'William Shakespeare', correct: true },
      { text: 'Charles Dickens', correct: false },
      { text: 'Jane Austen', correct: false },
      { text: 'Mark Twain', correct: false }
    ]
  },
  {
    question: 'What is the chemical symbol for water?',
    answers: [
      { text: 'H2O', correct: true },
      { text: 'O2', correct: false },
      { text: 'CO2', correct: false },
      { text: 'HO', correct: false }
    ]
  },
  {
    question: 'In programming, what does "API" stand for?',
    answers: [
      { text: 'Application Programming Interface', correct: true },
      { text: 'Applied Program Integration', correct: false },
      { text: 'Advanced Process Interaction', correct: false },
      { text: 'Application Process Interface', correct: false }
    ]
  },
  {
    question: 'What is 8 * 7?',
    answers: [
      { text: '54', correct: false },
      { text: '56', correct: true },
      { text: '64', correct: false },
      { text: '48', correct: false }
    ]
  },
  {
    question: 'Which country is the largest by area?',
    answers: [
      { text: 'Russia', correct: true },
      { text: 'Canada', correct: false },
      { text: 'China', correct: false },
      { text: 'United States', correct: false }
    ]
  },
  {
    question: 'Which element has the atomic number 1?',
    answers: [
      { text: 'Hydrogen', correct: true },
      { text: 'Helium', correct: false },
      { text: 'Lithium', correct: false },
      { text: 'Oxygen', correct: false }
    ]
  }
]

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
  currentQuestionIndex = 0
  score = 0
  resultEl.classList.add('hidden')
  nextBtn.classList.add('hidden')
  showQuestion(questions[currentQuestionIndex])
}

function showQuestion(q){
  questionEl.textContent = q.question
  answerButtons.innerHTML = ''
  q.answers.forEach(a => {
    const btn = document.createElement('button')
    btn.className = 'answer'
    btn.textContent = a.text
    btn.dataset.correct = a.correct
    btn.addEventListener('click', selectAnswer)
    answerButtons.appendChild(btn)
  })
}

function selectAnswer(e){
  const selected = e.target
  const correct = selected.dataset.correct === 'true'
  Array.from(answerButtons.children).forEach(btn => {
    btn.disabled = true
    if (btn.dataset.correct === 'true') btn.classList.add('correct')
    if (btn !== selected && btn.dataset.correct !== 'true' && selected.dataset.correct === 'true') btn.classList.remove('correct')
  })
  if (correct) score++
  nextBtn.classList.remove('hidden')
  if (currentQuestionIndex === questions.length - 1) nextBtn.textContent = 'Show Result'
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex])
    nextBtn.classList.add('hidden')
    nextBtn.textContent = 'Next Question'
  } else {
    // show result
    document.getElementById('quiz').classList.add('hidden')
    resultEl.classList.remove('hidden')
    scoreEl.textContent = `${score} / ${questions.length}`
  }
})

restartBtn && restartBtn.addEventListener('click', () => {
  document.getElementById('quiz').classList.remove('hidden')
  startQuiz()
})

startQuiz()
