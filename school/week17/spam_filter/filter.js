function checkSpam() {
    let inputString = document.getElementById(`userAnswer`).value;
    document.getElementById(`cleanedAnswer`).innerHTML += clearSpam(inputString) + "<br/><br/>";
    document.getElementById(`userAnswer`).value = ``;
}

function clearSpam(inputString) {
    return inputString.replace(/xxx/ig, `***`).replace(/viagra/ig, `***`);
}