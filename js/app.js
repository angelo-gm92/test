const startBasicTestBtn = document.getElementById("startBasicTestBtn");
const startAdvancedTestBtn = document.getElementById("startAdvancedTestBtn");
const startCompleteTestBtn = document.getElementById("startCompleteTestBtn");
const botonesEmpezarTest = document.querySelectorAll(".primary-btn");
const homePage = document.querySelector(".home");
const testPage = document.querySelector(".test");
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const buttons = document.getElementById("buttons");

let currentQuestion = 0;
const answers = [];
let questionStartTime = 0;

// Activar el botón "empezar test" cuando termine la animación de entrada
if (botonesEmpezarTest) {
    setTimeout(() => {
        botonesEmpezarTest.forEach(btn => {
            btn.disabled = false;
        });
    }, 3500);
}

function renderQuestion() {

    if (!questionContainer || questions_basic.length === 0) {
        return;
    }

    // Registrar el tiempo de inicio de la pregunta
    questionStartTime = Date.now();

    const question = questions_basic[currentQuestion];
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
            const answer = question.results[index];
            answers[currentQuestion] = {
                answer: answer,
                time: timeSpent
            };
            renderQuestion();
        });
    });

    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = answers[currentQuestion] === undefined;
    nextBtn.textContent = currentQuestion === questions_basic.length - 1 ? "Finalizar" : "Siguiente";
}

// Evento para iniciar el test básico
if (startBasicTestBtn) {
    startBasicTestBtn.addEventListener("click", () => {
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

        if (currentQuestion < questions_basic.length - 1) {
            currentQuestion += 1;
            renderQuestion();
        } else {
            calculaResultado(answers);
            mostrarResultados();
            ocultarBotones();
        }
    });
}


let mapTypes = {
    "analitico": 0,
    "auditivo": 0,
    "autodidacta": 0,
    "experiencial": 0,
    "kinestesico": 0,
    "social": 0,
    "visual": 0
};

function calculaResultado(respuestas) {

    respuestas.forEach((resp) => {

        const respuesta_texto = resp.answer.toString();
        const conjunto_respuestas = respuesta_texto.split("_");

        if (conjunto_respuestas.length > 1) {
            conjunto_respuestas.forEach((respuesta) => {
                actualizaResultado(respuesta);
            })
        } else {
            actualizaResultado(respuesta_texto);
        }
    })
}

function actualizaResultado(respuesta) {
    const conjunto = respuesta.split('-');
    const categoria = conjunto[0];
    const valor = conjunto[1];
    mapTypes[categoria] += parseInt(valor);
}

function mostrarResultados() {
    if (questionContainer) {
        questionContainer.classList.add("hidden");
    }

    if (!resultContainer) {
        return;
    }

    resultContainer.classList.remove("hidden");
    resultContainer.innerHTML = `
        <div class="result-summary">
            <h2>Resultados</h2>
            <ul class="result-list">
                <li><strong>Analítico: </strong> ${mapTypes.analitico}</li>
                <li><strong>Auditivo: </strong> ${mapTypes.auditivo}</li>
                <li><strong>Autodidacta: </strong> ${mapTypes.autodidacta}</li>
                <li><strong>Experiencial: </strong> ${mapTypes.experiencial}</li>
                <li><strong>Kinestésico: </strong> ${mapTypes.kinestesico}</li>
                <li><strong>Social: </strong> ${mapTypes.social}</li>
                <li><strong>Visual: </strong> ${mapTypes.visual}</li>
            </ul>
        </div>
    `;
}

function ocultarBotones() {
    if (buttons) {
        buttons.classList.add("hidden");
    }
}