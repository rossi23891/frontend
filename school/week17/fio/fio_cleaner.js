function beautifyNames() {
    let namesInput = document.getElementById(`fio`).value.split(" ");
    let names = [];
    for (let i = 0; i < namesInput.length; i++) {
        if (namesInput[i] != '') {
            names.push(namesInput[i]);
        }
    }
    if (names.length > 3) {
        alert("Введено больше 3х слов");
        return;
    }
    let inputFirstName = names[0];
    let inputMiddleName = names[1]
    let inputLastName = names[2];
    names[0] = cleanName(inputFirstName);
    names[1] = cleanName(inputMiddleName);
    names[2] = cleanName(inputLastName);
    let cleanedNames = names.join(" ");
    document.getElementById(`fio`).value = cleanedNames;
    alert("Привет " + cleanedNames);
}

function cleanName(name) {
    let lower = name.toLowerCase();
    return startFromUpperLetter(lower);
}

function startFromUpperLetter(str) {
    if (str.length == 1) {
        return str[0].toUpperCase();
    } else if (str.length > 1) {
        return str[0].toUpperCase() + str.substring(1);
    }
}