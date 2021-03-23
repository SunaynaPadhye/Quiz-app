const quizData = [
    {
        question: 'When do we celebrate International Women\'s DSay?',
        a: '9 March',
        b: '8 July',
        c: '8 March',
        d: '5 May',
        correct: 'c'
    }, {
        question: 'Which of the following is the capital of India?',
        a: 'Gurugram',
        b: 'New Delhi',
        c: 'Kolkata',
        d: 'Mumbai',
        correct: 'b'
    }, {
        question: 'In Harry Potter, what animal represents Hufflepuff house?',
        a: 'Lion',
        b: 'Eagle',
        c: 'Serpent',
        d: 'Badger',
        correct: 'd'
    }, {
        question: 'Which one of the following is not an input device?',
        a: 'Printer',
        b: 'Keyboard',
        c: 'Mouse',
        d: 'Joystick',
        correct: 'a'
    }, {
        question: 'Which of the following materials takes the longest time for bio-degradation?',
        a: 'Cotton',
        b: 'Paper',
        c: 'Bone',
        d: 'Jute',
        correct: 'c'
    }  
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check to see the ans
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} question(s) correctly.</h2>
                <button onclick="location.reload()">Reload</button>
                `;
        }
    }
    
});