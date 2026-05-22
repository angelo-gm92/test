function calculateScore() {
    let total = 0;
    answers.forEach(item => {
        total += item.answer;
    });
    return total;
}

let result =
    calculateScore();
console.log(result);

function calculateDimensions() {
    let dimensions = {};
    answers.forEach(item => {

        if (!dimensions[item.dimension]) {
            dimensions[item.dimension] = 0;
        }
        dimensions[item.dimension] += item.answer;
    });
    return dimensions;
}