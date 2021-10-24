class Employee {

    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

let empl = new Employee('Иван', 'Иванов', 10, 31);
console.log(empl.name); //выведет 'Иван'
console.log(empl.surname); //выведет 'Иванов'
console.log(empl.rate); //выведет 10
console.log(empl.days); //выведет 31
console.log(empl.getSalary()); //выведет 310 - то есть 10*31