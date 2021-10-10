function beautifyNames() {
    let inputFirstName = document.getElementById(`first_name`).value;
    let inputMiddleName = document.getElementById(`middle_name`).value;
    let inputLastName = document.getElementById(`last_name`).value;
    let cleanedName = cleanName(inputFirstName);
    let cleanedMiddleName = cleanName(inputMiddleName);
    let cleanedLastName = cleanName(inputLastName);
    document.getElementById(`first_name`).value = cleanedName;
    document.getElementById(`middle_name`).value = cleanedMiddleName;
    document.getElementById(`last_name`).value = cleanedLastName;
    alert("Привет " + cleanedName + " " + cleanedMiddleName + " " + cleanedLastName);
}

function cleanName(name) {
    let trimmedName = name.trim().toLowerCase();
    return startFromUpperLetter(trimmedName);
}

function startFromUpperLetter(str) {
    if (str.length == 1) {
        return str[0].toUpperCase();
    } else if (str.length > 1) {
        return str[0].toUpperCase() + str.substring(1);
    }
}