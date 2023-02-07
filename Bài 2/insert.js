function insertNumberToArray(array, x, index) {
    if (index < 0 || index > array.length) {
        return array;
    }
    console.log([...array.slice(0, index), x, ...array.slice(index)]);
}

let number = [1, 4, 6, 2, 6];
let num = 5;
let indexs = 5;
insertNumberToArray(number, num, indexs);