function sum() {
    let x = getX();
    let y = getY();
    alert(+x + +y);
}

function substract() {
    alert(getX() - getY());
}

function multiply() {
    alert(getX() * getY());
}

function divide() {
    alert(getX() / getY());
}

function getX() {
    return prompt("Введите первое число: ");
}

function getY() {
    return prompt("Введите второе число: ");
}
