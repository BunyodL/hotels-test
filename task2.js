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

    const allDivisors = [];
    numberArray.forEach(num => {
        for (let j = 2; j <= Math.floor(num / 2); j++) {
            const isInteger = num % j === 0;
            if (isInteger) {
                allDivisors.push(j);
            }
        }
    });

    const divisorSet = new Set();
    allDivisors.forEach(div => {
        const isCommonDivisor = numberArray.every(num => num % div === 0);

        if (isCommonDivisor) {
            divisorSet.add(div);
        }
    });

    return [...divisorSet];
}

console.log(giveCommonDivisors([42, 12, 18]));
