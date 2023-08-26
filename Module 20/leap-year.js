function isLeapYear(year) {
    const remainderByFour = year % 4;
    const remainderByHundred = year % 100;
    const remainderByFourHundred = year % 400;
    if (remainderByFour === 0 && remainderByHundred !== 0) {
        return true;
    } else if (remainderByFourHundred === 0) {
        return true;
    } else {
        return false;
    }
}

const yearInput = 2400;
const checkLeapYear = isLeapYear(yearInput);
console.log('Is it a leap year:', checkLeapYear);