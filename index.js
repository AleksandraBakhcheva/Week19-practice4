class Validator {
    isEmail(string) {
        const EMAILCHECK = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)$/i;
        if (EMAILCHECK.test(string) === false) {
            return false;
        }
        else {
            return true;
        }
    }
    isDomain(string) {
        const DOMAINCHECK = /^([\wёa-я-]{2,}\.)+[\wёa-я-]{2,}$/i;
        if (DOMAINCHECK.test(string) === false) {
            return false;
        }
        else {
            return true;
        }
    }
    isDate(string) {
        const DATECHECK = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
        if (DATECHECK.test(string) === false) {
            return false;
        }
        else {
            return true;
        }
    }
    isPhone(string) {
        const PHONEHECK = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if (PHONEHECK.test(string) === false) {
            return false;
        }
        else {
            return true;
        }
    }
}

let validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));

class ValidatorStatic {
    static isEmail(string) {
        const EMAILCHECK = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)$/i;
        if (EMAILCHECK.test(string) === false) {
            return false;
        }
        else {
            return true;
        }
    }
    static isDomain(string) {
        const DOMAINCHECK = /^([\wёa-я-]{2,}\.)+[\wёa-я-]{2,}$/i;
        if (DOMAINCHECK.test(string) === false) {
            return false;
        }
        else {
            return true;
        }
    }
    static isDate(string) {
        const DATECHECK = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
        if (DATECHECK.test(string) === false) {
            return false;
        }
        else {
            return true;
        }
    }
    static isPhone(string) {
        const PHONEHECK = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if (PHONEHECK.test(string) === false) {
            return false;
        }
        else {
            return true;
        }
    }
}

console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));