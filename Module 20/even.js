function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    return false;
}

const numberInput = 15;
const checkedEven = isEven(numberInput);
console.log("Is the number even:", checkedEven)