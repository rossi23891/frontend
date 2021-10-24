class Calc {
    static sum() {
        let x = Calc.getX();
        let y = Calc.getY();
        alert(+x + +y);
    }

    static substract() {
        alert(Calc.getX() - Calc.getY());
    }

    static multiply() {
        alert(Calc.getX() * Calc.getY());
    }

    static divide() {
        let x = Calc.getX();
        let y = Calc.getY();
        if (y == 0) {
            alert("На ноль делить нельзя!");
            return;
        }
        alert(x / y);
    }

    static getX() {
        return prompt("Введите первое число: ");
    }

    static getY() {
        return prompt("Введите второе число: ");
    }
}
