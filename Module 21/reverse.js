const text = "I like to do programming";
// reverse string

function reverseString(string) {
    let sliceArray = string.split("");
    let reverseArray = [];
    for (let i = sliceArray.length - 1; i >= 0; i--){
        let element = sliceArray[i];
        reverseArray.push(element);
    }
    let reverse = reverseArray.join("");
    return reverse;
}
const result = reverseString(text);
// console.log(result);

// reverse word
function reverseWord(string) {
    let splittedArray = string.split(" ");
    let reverseWordArray = [];
    for (let i = splittedArray.length - 1; i >= 0; i--){
        let element = splittedArray[i];
        reverseWordArray.push(element);
    }
    let joinReverseArray = reverseWordArray.join(" ");
    return joinReverseArray;
}
const reverseWordResult = reverseWord(text);
console.log(reverseWordResult);