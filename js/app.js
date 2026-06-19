const openStartPage = document.getElementById("openStartPage");
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
const progressWrapper = document.querySelector(".progress-wrapper");

let currentQuestion = 0;
const answers = [];
let questionStartTime = 0;

if (openStartPage) {
    openStartPage.addEventListener("click", () => { window.location.href = "pagina_inicio.html" });  
}

// Activar el botón "empezar test" cuando termine la animación de entrada
if (botonesEmpezarTest) {
    setTimeout(() => {
        botonesEmpezarTest.forEach(btn => {
            btn.disabled = false;
        });
    }, 3500);
}

function renderQuestion(questions) {

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
            const answer = question.results[index];
            answers[currentQuestion] = {
                answer: answer,
                time: timeSpent
            };
            renderQuestion(questions);
        });
    });

    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = answers[currentQuestion] === undefined;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? "Finalizar" : "Siguiente";
}

let questions = [];

function getQuestionsForTest(type) {
    if (type === "basic") {
        return [...questions_basic];
    }

    if (type === "advanced") {
        return [...questions_advanced];
    }

    if (type === "complete") {
        return [...questions_basic, ...questions_advanced];
    }

    return [];
}

function startTest(type) {
    questions = getQuestionsForTest(type);

    if (homePage) homePage.classList.add("hidden");
    if (testPage) testPage.classList.remove("hidden");
    renderQuestion(questions);
}

// Evento para iniciar el test básico
if (startBasicTestBtn) {
    startBasicTestBtn.addEventListener("click", () => startTest("basic"));
}

// Evento para iniciar el test avanzado
if (startAdvancedTestBtn) {
    startAdvancedTestBtn.addEventListener("click", () => startTest("advanced"));
}

// Evento para iniciar el test completo
if (startCompleteTestBtn) {
    startCompleteTestBtn.addEventListener("click", () => startTest("complete"));
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        if (currentQuestion > 0) {
            currentQuestion -= 1;
            renderQuestion(questions);
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
            renderQuestion(questions);
        } else {
            mostrarResultadoFinal(answers);
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
    mapTypes[categoria] += parseInt(valor, 10);
}

function mostrarResultadoFinal(respuestas) {
    if (!resultContainer) {
        return;
    }

    for (const categoria in mapTypes) {
        mapTypes[categoria] = 0;
    }

    calculaResultado(respuestas);

    if (questionContainer) {
        questionContainer.classList.add("hidden");
    }

    let resultadosHtml = "";
    for (const categoria in mapTypes) {
        resultadosHtml += `
            <div class="category-header">
                <span>${categoria}</span>
                <span class="category-score">${mapTypes[categoria]} pts</span>
            </div>

            <div class="category-text">
                <span class="text_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</span>
            </div>
        `;
    }

    resultContainer.classList.remove("hidden");
    resultContainer.innerHTML = `
        <div class="result">
            <h1>Formulario completado</h1>
            <p>Gracias por responder.</p>
            <ul class="notas-lista">
                ${resultadosHtml}
            </ul>
        </div>
    `;

    ocultarBotones();
    ocultarProgreso();
}

function ocultarProgreso() {
    if (progressWrapper) {
        progressWrapper.classList.add("hidden");
    }
}

function ocultarBotones() {
    if (buttons) {
        buttons.classList.add("hidden");
    }
}