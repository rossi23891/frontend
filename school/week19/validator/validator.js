const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const domainFormat = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;
const dateFormat = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d/;
const phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

class Validator {
    isEmail(str) {
        return emailFormat.test(str);
    }

    isDomain(str) {
        return domainFormat.test(str);
    }

    isDate(str) {
        return dateFormat.test(str);
    }

    isPhone(str) {
        return phoneFormat.test(str);
    }
}

let validator = new Validator();

console.log("validator email " + validator.isEmail('alisa@mail.ru'));
console.log("validator domain " + validator.isDomain('itgirlschool.ru'));
console.log("validator date " + validator.isDate('12.05.2021'));
console.log("validator phone " + validator.isPhone('+7(910)123-45-67'));

console.log("validator email " + validator.isEmail('alisamail.ru'));
console.log("validator domain " + validator.isDomain('itgirlschool........ru'));
console.log("validator date " + validator.isDate('12.0539098'));
console.log("validator phone " + validator.isPhone('+3218(987)4563'));

class ValidatorStatic {
    static isEmail(str) {
        return emailFormat.test(str);
    }

    static isDomain(str) {
        return domainFormat.test(str);
    }

    static isDate(str) {
        return dateFormat.test(str);
    }

    static isPhone(str) {
        return phoneFormat.test(str);
    }
}

console.log("validator static email " + ValidatorStatic.isEmail('alisa@mail.ru'));
console.log("validator static domain " + ValidatorStatic.isDomain('itgirlschool.ru'));
console.log("validator static date " + ValidatorStatic.isDate('12.05.2021'));
console.log("validator static phone " + ValidatorStatic.isPhone('+7(910)123-45-67'));

console.log("validator static email " + ValidatorStatic.isEmail('alisamail.ru'));
console.log("validator static domain " + ValidatorStatic.isDomain('itgirlschool............ru'));
console.log("validator static date " + ValidatorStatic.isDate('12.0539098'));
console.log("validator static phone " + ValidatorStatic.isPhone('+3218(987)4563'));