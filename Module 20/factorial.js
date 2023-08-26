function showFactorial(number) {
    let result = 1;
    for (i = number; i >= 1; i--){
        const tempNumber = i;
        result *= tempNumber;
    }
    return result;
}

const numberInput = 50;
const factorial = showFactorial(numberInput);
console.log("The factorial is:", factorial);