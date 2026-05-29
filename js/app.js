const startTestBtn = document.getElementById("startTestBtn");
const homePage = document.querySelector(".home");
const testPage = document.querySelector(".test");
const questionContainer = document.getElementById("question-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
const answers = [];

function renderQuestion() {
    if (!questionContainer || questions.length === 0) {
        return;
    }

    const question = questions[currentQuestion];
    const selectedAnswer = answers[currentQuestion];

    questionContainer.innerHTML = `
        <h2>${question.text}</h2>
        <div class="answers-list">
            ${question.answers.map((answer, index) => `
                <button type="button" class="answer-button ${selectedAnswer === index ? 'selected' : ''}" data-index="${index}">
                    ${answer}
                </button>
            `).join('')}
        </div>
    `;

    const buttons = questionContainer.querySelectorAll(".answer-button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.index);
            answers[currentQuestion] = index;
            renderQuestion();
        });
    });

    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = answers[currentQuestion] === undefined;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? "Finalizar" : "Siguiente";
}

if (startTestBtn) {
    startTestBtn.addEventListener("click", () => {
        if (homePage) homePage.classList.add("hidden");
        if (testPage) testPage.classList.remove("hidden");
        renderQuestion();
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        if (currentQuestion > 0) {
            currentQuestion -= 1;
            renderQuestion();
        }
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        if (answers[currentQuestion] === undefined) {
            return;
        }

        if (currentQuestion < questions.length - 1) {
            currentQuestion += 1;
            renderQuestion();
        } else {
            alert("Test terminado. Revisa la consola para ver las respuestas.");
            console.log("Respuestas:", answers);
        }
    });
}