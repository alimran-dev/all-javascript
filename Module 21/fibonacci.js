const x = 0;
const y = 1;
const totalElement = 15;

function fibonacci(x, y,totalElement) {
    const fibo = [x, y];
    for (i = 2; i <= totalElement; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const result = fibonacci(x, y, totalElement);
console.log(result);