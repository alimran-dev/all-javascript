function isPrime(number) {
    if (typeof number !== "number" || number < 0) {
        return "Please Give a Positive number"
    }
    for (let i = 2; i < number; i++){
        if (number % i === 0) {
            return "This is not a prime number";
        }
    }
    return "This is a Prime number"
}
const number = 2;
const checkPrime = isPrime(number);
console.log(checkPrime);