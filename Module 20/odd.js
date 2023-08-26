function isOdd(number) {
    const remainder = number % 2;
    if (remainder !== 0) {
        return true;
    }
    return false;
}

const numberInput = 13;
const checkedOdd = isOdd(numberInput);
console.log("Is the number odd:", checkedOdd);