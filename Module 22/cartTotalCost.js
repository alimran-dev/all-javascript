let cart = [
    { name: "shirt", price: 1400, quantity: 5 },
    { name: "pant", price: 2600, quantity: 3 },
    { name: "shoe", price: 1900, quantity: 2 },
    { name: "belt", price: 750, quantity: 4 },
    { name: "t-shirt", price: 700, quantity: 4 },
    { name: "panjabi", price: 4250, quantity: 3 },
];

function cartTotal(cart) {
    let sum = 0;
    for (let i = 0; i < cart.length; i++){
        let item = cart[i];
        let price = item["price"];
        let quantity = item["quantity"];
        let quantityPrice = price * quantity;
        sum += quantityPrice;
    }
    return sum;
}
const total = cartTotal(cart);
console.log(total);