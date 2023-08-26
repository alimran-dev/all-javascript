const numbers = [18, 38, 34, 29, 60, 83, 62, 35, 72];
function secondLargest(numbers) {
    let first = 0;
    let second = 0;
    for (let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if (number > first) {
            second = first;
            first = number;
        }
        else if (number > second && number !== first) {
            second = number;
        }
    }
    return second;
}
const secondLargestValue = secondLargest(numbers);
console.log(secondLargestValue);