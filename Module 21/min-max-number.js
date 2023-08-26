// Max value using if else condition

const x = 21;
const y = 36;
const z = 100;
function maxNumber(x, y, z) {
    if (x > y && x > z) {
        return x;
    }
    else if (y > x && y > z) {
        return y;
    }
    else {
        return z;
    }
}
const maxResult = maxNumber(x, y, z);
// console.log(maxResult);

// Min value using if else condition
function minNumber(x, y, z) {
    if (x < y && x < z) {
        return x;
    }
    else if (y < x && y < z) {
        return y;
    }
    else {
        return z;
    }
}
const minResult = minNumber(x, y, z);
// console.log(minResult);

// Max value using math max method

function maxValue(x, y, z) {
    let max = Math.max(x, y, z);
    return max;
}
const maxValueResult = maxValue(x, y, z);
// console.log(maxValueResult);

// Min value using math min method

function minValue(x, y, z) {
    let min = Math.min(x, y, z);
    return min;
}
const minValueResult = minValue(x, y, z);
console.log(minValueResult);