const container =
    document.getElementById("question-container");

// ------ FORMATO A -----------------------------------------------------------------
questions_8.forEach(question => {
    container.innerHTML += `
        <div class="question">
            <h3>${question.text}</h3>
            
            <div id="barra-seleccion">

                <input
                    type="range"
                    id="q-${question.id}"
                    name="rating"
                    min="1"
                    max="5"
                />

                <div id="leyendas">
                    <span style="width: 20%; text-align: center;">Muy poco</span>
                    <span style="width: 20%; text-align: center;">Poco</span>
                    <span style="width: 20%; text-align: center;">Medio</span>
                    <span style="width: 20%; text-align: center;">Mucho</span>
                    <span style="width: 20%; text-align: center;">Muchísimo</span>
                </div>

            </div>
        </div>
    `;
});

// ------ FORMATO B -----------------------------------------------------------------
questions_2.forEach(question => {
    if (question.dimension === "situation") {
        container.innerHTML += `
            <div class="question">
                <h3>${question.text}</h3>
                
                <div id ="box-${question.id}">
                    <div id="pregunta">
                        <div class="respuestas-box" name="box-${question.id}">${question.answers[0]}</div>
                        <div class="respuestas-box" name="box-${question.id}">${question.answers[1]}</div>
                        <div class="respuestas-box" name="box-${question.id}">${question.answers[2]}</div>
                        <div class="respuestas-box" name="box-${question.id}">${question.answers[3]}</div>
                    </div>
                </div>

            </div>
        `;
    }
});

let answers = [];
function saveAnswers() {
    questions.forEach(question => {
        let value =
            document.getElementById(
                `q-${question.id}`
            ).value;
        answers.push({
            questionId: question.id,
            answer: Number(value),
            dimension: question.dimension
        });
    });
}