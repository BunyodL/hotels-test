/**
 * Finds prime numbers in a given range
 *
 * @param {[number, number]} numericRange - An array with two numbers.
 * @returns {number[]} Array of prime numbers.
 */

function findPrimeNumbers(numericRange) {
    const [start, end] = numericRange;
    if (start <= 0 || end <= 0) {
        return 'Введите положительные числа';
    }
    if (start > end) {
        return 'Начало диапазона должно быть меньше или равно концу';
    }

    const primeNumbers = [];
    for (let i = start; i <= end; i++) {
        const checkIntegerNumbers = [];
        for (let j = 2; j < i; j++) {
            const isInteger = Number.isInteger(i / j);
            checkIntegerNumbers.push(isInteger);
        }
        const isPrime = checkIntegerNumbers.every(isInteger => !isInteger);
        if (isPrime) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}

console.log(findPrimeNumbers([1, 9]));
