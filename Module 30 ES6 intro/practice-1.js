// Problem 1

const multiply = (a, b, c) => a * b * c;
const result = multiply(4, 6, 7);
// console.log(result);

// Problem 2
const sentence = 'I am web a developer.I love to code.I love to eat biriyani.';
const sentenceSplit = sentence.split('.');
const sentenceNewLine = sentenceSplit.join('.\n');
// console.log(sentenceNewLine);

// Alternative 
const newLineSentence = `I am a developer.
I love to code.
I love to eat biriyani.`
// console.log(newLineSentence);

// Problem 3

const sum = (a, b = 5) => a + b;
const total = sum(5);
console.log(total);