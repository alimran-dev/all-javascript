const numbers = [7, 3, 9, 1, 5, 4, 8, 6, 2, 10];
const sqSumAvg = numbers => {
    let squareValues = [];
    let squareTotal = 0;
    for (const number of numbers) {
        const square = number * number;
        squareValues.push(square);
    }
    for (const squareValue of squareValues) {
        squareTotal += squareValue;
    }
    const average = squareTotal / squareValues.length;
    return average;
}

console.log(sqSumAvg(numbers));
d