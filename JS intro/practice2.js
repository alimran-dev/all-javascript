// Problem 1
/* var fruits = ["Apple", "Banana", "Orange"];
var positionBanana = fruits.indexOf("Banana");
console.log(positionBanana)

fruits[1] = "Mango";
console.log(fruits);


fruits.pop();
console.log(fruits);

fruits.push("Watermelon")
console.log(fruits) */

// Problem 2
// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.

/* var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;
var checkGrade = janeScore;
if (checkGrade >= 80) {
    console.log("You got A grade")
}
else if (checkGrade >= 60) {
    console.log("You got B grade")
}
else if (checkGrade >= 50) {
    console.log("You got C grade")
}
else if (checkGrade >= 40) {
    console.log("You got D grade")
}
else {
    console.log("You got F grade")
} */

// Problem 3
/* var num1 = 13;
var num2 = 79;
var num3 = 45;
if (num1 > num2) {
    if (num1 > num3) {
        console.log("Largest Number is: " + num1);
    }
    else {
        console.log("Largest Number is: " + num3);
    }
}
else {
    if (num2 > num3){
    console.log("Largest Number is: " + num2);
    }
    else{
    console.log("Largest Number is: " + num3)
    }
}

var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 === side2) {
    console.log("The triangle is Isosceles");
}
else if (side1 === side3) {
    console.log("The triangle is Isosceles");
}
else if (side2 === side3) {
    console.log("The triangle is Isosceles");
}
else {
    console.log("This is not a Isosceles triangle")
} */

// Problems from module text 
var signal = "yellow";

if (signal == "red") {
    console.log("You may fall in danger");
}
else if (signal == "yellow"){
    console.log("You should not cross the road");
}
else {
    console.log("Now you can cross the road");
}