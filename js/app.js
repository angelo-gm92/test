const startTestBtn = document.getElementById("startTestBtn");
const homePage = document.querySelector(".home");
const testPage = document.querySelector(".test");
const questionContainer = document.getElementById("question-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
const answers = [];
let questionStartTime = 0;

function renderQuestion() {
    if (!questionContainer || questions.length === 0) {
        return;
    }

    // Registrar el tiempo de inicio de la pregunta
    questionStartTime = Date.now();

    const question = questions[currentQuestion];
    const selectedAnswerObj = answers[currentQuestion];

    questionContainer.innerHTML = `
        <h2>${question.text}</h2>
        <div class="answers-list">
            ${question.answers.map((answer, index) => `
                <button type="button" class="answer-button ${selectedAnswerObj?.answer === index ? 'selected' : ''}" data-index="${index}">
                    ${answer}
                </button>
            `).join('')}
        </div>
    `;

    const buttons = questionContainer.querySelectorAll(".answer-button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.index);
            const timeSpent = Date.now() - questionStartTime;
            answers[currentQuestion] = {
                answer: index,
                time: timeSpent
            };
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
            console.log("Respuestas (objeto):", answers);
            console.log("Respuestas formateadas:", answers.map((item, i) => ({
                pregunta: i + 1,
                respuesta: questions[i].results[item.answer],
                tiempo_ms: item.time,
                tiempo_s: (item.time / 1000).toFixed(2)
            })));
        }
    });
}

function calculaResultado(respuestas){

    let analitico = 0;
    let auditivo = 0;
    let autodidacta = 0;
    let experiencial = 0;
    let kinestesico = 0;
    let social = 0;
    let visual = 0;

    /* calculo de los resultados y suma a su estilo correspondiente */

}