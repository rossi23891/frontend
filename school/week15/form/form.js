function checkInput() {
    let errors = [];
    document.getElementById('error_text').innerHTML = "";
    if (isFirstNameEmpty()) {
        errors.push(`Please, fill your first name`);
    }
    if (isLastNameEmpty()) {
        errors.push(`Please, fill your last name`);
    }
    if (isUserNameEmpty()) {
        errors.push(`Please, fill your user name`);
    }
    if (isEmailEmpty()) {
        errors.push(`Please, fill your user e-mail`);
    }
    if (isPasswordIncorrect()) {
        errors.push(`Please, enter password minimum 8 characters long`);
    }
    if (!isAgreementChecked()) {
        errors.push(`Please agree with terms and conditions to proceed with the registration`);
    }
    if (errors.length == 0) {
        alert("Welcome! you've succesfully registered to my website")
    } else {
        let errorDiv = document.querySelector('.error-message');
        errorDiv.innerHTML = errors.join('. \n');
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
    let input_password = document.getElementById("input_password").value;
    return !validatePassword(input_password);
}

function isAgreementChecked() {
    let agreement = document.getElementById("agreement");
    return agreement.checked == true;
}

function validateIsEmpty(field) {
    return field.value == '';
}

function validatePassword(password) {
    return /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/.test(password);
}
