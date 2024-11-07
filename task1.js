/**
 * @param {number} quantity
 * @returns {string}
 */

function computersSuffix(quantity) {
    const lastNumberUnit = quantity % 10;

    if (
        lastNumberUnit === 0
        || (lastNumberUnit >= 5 && lastNumberUnit <= 9)
        || (quantity >= 11 && quantity <= 14)
    ) {
        return 'ов';
    } else if (lastNumberUnit >= 2 && lastNumberUnit <= 4) {
        return 'а';
    } else {
        return '';
    }
}

/**
 * @param {number} quantity
 * @returns {string}
 */

function amountOfComputers(quantity) {
    if (typeof quantity !== 'number') {
        return 'Введите числовой аргумент';
    }
    return `${quantity} компьютер${computersSuffix(quantity)}`;
}

console.log(amountOfComputers(5002));
