function sumOfArray(prices) {
    let sum = 0;
    for (i = 0; i < prices.length; i++){
        const onePrice = prices[i];
        sum = sum + onePrice;
    }
    return sum; 
}

const bookPrices = [220, 350, 420, 250, 150, 300, 120, 250, 550, 420, 350, 220];
const totalPrice = sumOfArray(bookPrices);
console.log("Total price of the books you purchased is:", totalPrice);