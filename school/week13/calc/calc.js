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
    let x = getX();
    let y = getY();
    if (y == 0) {
        alert("На ноль делить нельзя!");
        return;
    }
    alert(x / y);
}

function getX() {
    return prompt("Введите первое число: ");
}

function getY() {
    return prompt("Введите второе число: ");
}
