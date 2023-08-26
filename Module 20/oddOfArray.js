function showOdd(numbers) {
    let odds = [];
    for (i = 0; i < numbers.length; i++){
        const singleNumber = numbers[i];
        const remainder = singleNumber % 2;
        if (remainder !== 0) {
            odds.push(singleNumber);
        }
    }
    return odds;
}

function oddSum(oddArray) {
    let sum = 0;
    for (i = 0; i < oddArray.length; i++){
        const oddNumber = oddArray[i];
        sum += oddNumber;
    }
    return sum;
}

const numbersInput = [8, 15, 23, 17, 91, 46, 27, 31, 82, 47, 55];
const allOdd = showOdd(numbersInput);
console.log(allOdd);
const sumOfOdd = oddSum(allOdd);
console.log("Sum of all odd numbers in that array is:", sumOfOdd);