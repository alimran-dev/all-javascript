// Converting any inch value to feet 
function inchToFeet(inch) {
    const feet = inch / 12;
    const fixedFeet = feet.toFixed(2);
    const fixedNumberFeet = parseFloat(fixedFeet);
    return fixedNumberFeet;
}

const inchInput = 264;
const toFeet = inchToFeet(inchInput);
console.log("The converted value is:", toFeet);