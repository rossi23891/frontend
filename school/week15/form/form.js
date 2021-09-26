function checkInput() {
    document.getElementById('error_text').innerHTML = "";
    if (isFirstNameEmpty()) {
        document.getElementById('error_text').innerHTML += `Please, fill your first name<br>`;
    }
    if (isLastNameEmpty()) {
        document.getElementById('error_text').innerHTML += `Please, fill your last name<br>`;
    }
    if (isUserNameEmpty()) {
        document.getElementById('error_text').innerHTML += `Please, fill your user name<br>`;
    }
    if (isEmailEmpty()) {
        document.getElementById('error_text').innerHTML += `Please, fill your user e-mail<br>`;
    }
    if (isPasswordIncorrect()) {
        document.getElementById('error_text').innerHTML += `Please, enter password minimum 8 characters long<br>`;
    }
    if (!isAgreementChecked()) {
        document.getElementById('error_text').innerHTML += `Please agree with terms and conditions to proceed with the registration<br>`;
    }
    if (document.getElementById('error_text').innerHTML == "") {
        alert("Welcome! you've succesfully registered to my website")
    }
}

function isFirstNameEmpty() {
    let first_name = document.getElementById("first_name");
    return validateIsEmpty(first_name);
}

function isLastNameEmpty() {
    let last_name = document.getElementById("last_name");
    return validateIsEmpty(last_name);
}

function isUserNameEmpty() {
    let user_name = document.getElementById("user_name");
    return validateIsEmpty(user_name);
}

function isEmailEmpty() {
    let input_email = document.getElementById("input_email");
    return validateIsEmpty(input_email);
}

function isPasswordIncorrect() {
    let input_password = document.getElementById("input_password");
    return validatePasswordLength(input_password);
}

function isAgreementChecked() {
    let agreement = document.getElementById("agreement");
    return agreement.checked == true;
}

function validateIsEmpty(field) {
    return field.value == '';
}

function validatePasswordLength(password) {
    return password.value.length < 8;
}
