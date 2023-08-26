function milesToKilo(miles) {
    const kilo = miles * 1.609;
    const fixedKilo = kilo.toFixed(2);
    const fixedNumberKilo = parseFloat(fixedKilo);
    return fixedNumberKilo;
}
const milesInput = 50;
const toKilo = milesToKilo(milesInput);
console.log("Converted value is:", toKilo);