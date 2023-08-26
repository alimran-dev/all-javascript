const numbers = [27, 15, 18, 23, 42, 81, 51, 39];
function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        sum += number;
    }
    let average = sum / numbers.length;
    let averageFixed = parseFloat(average.toFixed(2));
    return averageFixed;
}
const averageResult = average(numbers);
console.log(averageResult);