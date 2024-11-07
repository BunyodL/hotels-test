/**
 *
 * @param {Array<number>} numberArray
 * @returns {Array<number>}
 */

function giveCommonDivisors(numberArray) {
    // проверка на то, что все числа положительные
    const isEachArrayNumberPositive = numberArray.every(number => number > 0);
    if (!isEachArrayNumberPositive) {
        return 'Введите положительные числа';
    }
    if (!numberArray.length) {
        return "Введите числа";
    }

    const allDivisors = [];
    const firstNumber = numberArray[0];

    // добавляем все делители первого числа в allDivisors
    for (let j = 2; j <= Math.floor(firstNumber / 2); j++) {
        const isInteger = firstNumber % j === 0;
        if (isInteger) {
            allDivisors.push(j);
        }
    }

    // добавляем в allDivisors само число на случай, если оно само будет подходить как делитель
    // например, в случае с числом 6
    allDivisors.push(firstNumber);

    const divisorSet = new Set();
    // проверяем какие делители подходят для всех чисел
    allDivisors.forEach(div => {
        const isCommonDivisor = numberArray.every(num => num % div === 0);

        if (isCommonDivisor) {
            divisorSet.add(div);
        }
    });

    return [...divisorSet];
}

console.log(giveCommonDivisors([6, 12, 18]));
