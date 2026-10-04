const length = 2;
const width = 5;

function multiplier(l, b) {
    let answer = l * b;
    return answer;
}


function showResult() {
    const answer2 = multiplier(length, width);
    document.querySelector('#text1').textContent = answer2;
}

console.log(multiplier(10, 80));