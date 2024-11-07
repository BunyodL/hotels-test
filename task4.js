/**
 * @param {number} tableSize
 * @returns {number}
 */
function padStartLength(tableSize) {
    if (tableSize >= 32) {
        return 4;
    }
    if (tableSize >= 100) {
        return 5;
    }
    return 3;
}

/**
 * @param {number} tableSize
 * @returns {void}
 */

function multiplicationTable(tableSize) {
    for (let i = 1; i <= tableSize; i++) {
        const array = [];
        for (let j = 1; j <= tableSize; j++) {
            const stringifiedNumber = String(j * i).padStart(padStartLength(tableSize), ' ');
            array.push(stringifiedNumber);
        }
        console.log(...array);
    }
}
multiplicationTable(9);