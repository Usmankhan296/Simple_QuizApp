let question = document.getElementById("question")
let answer = document.getElementById("answer")
let next = document.getElementById("next")
let btn = document.getElementById("btn")
btn.style.backgroundColor="blue"
const questions = [
    {
        question1: "Which is the largest animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question1: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false },
        ]
    },
    {
        question1: "Who is the founder of Microsoft?",
        answer: [
            { text: "Steve Jobs", correct: false },
            { text: "Bill Gates", correct: true },
            { text: "Elon Musk", correct: false },
            { text: "Mark Zuckerberg", correct: false },
        ]
    },
    {
        question1: "Which language is used for web development?",
        answer: [
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false },
            { text: "Java", correct: false },
        ]
    },
    {
        question1: "Which is the fastest land animal?",
        answer: [
            { text: "Lion", correct: false },
            { text: "Cheetah", correct: true },
            { text: "Tiger", correct: false },
            { text: "Horse", correct: false },
        ]
    }
];

let questionindex = 0
let score = 0

function startquiz() {
    questionindex = 0
    score = 0
    show()
}

function show() {
    resetState()

    let current = questions[questionindex]
    let number = questionindex + 1
    question.innerHTML = number + ". " + current.question1

    current.answer.forEach(ans => {
        let btn = document.createElement("button")
        btn.innerHTML = ans.text
        btn.classList.add("btn")
        answer.appendChild(btn)

        if (ans.correct) {
            btn.dataset.correct = ans.correct
        }

        btn.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    // next.style.display = "none"
    answer.innerHTML = ""
}

function selectAnswer(e) {
    let selectedBtn = e.target
    let correct = selectedBtn.dataset.correct === "true"

    if (correct) {
        selectedBtn.style.backgroundColor = "green"
        score++
    } else {
        selectedBtn.style.backgroundColor = "red"
    }

    Array.from(answer.children).forEach(btn => {
        if (btn.dataset.correct === "true") {
            btn.style.backgroundColor = "green"
            btn.style.color="white"
        }
        btn.disabled = true
    })

    next.style.display = "block"
}

next.addEventListener("click", () => {
    questionindex++
    if (questionindex < questions.length) {
        show()
    } else {
        question.innerHTML = `Quiz Finished! Score: ${score} / ${questions.length}`
        answer.innerHTML = ""
        next.style.display = "none"
    }
})

startquiz()