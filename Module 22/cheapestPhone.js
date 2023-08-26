const phones = [
    { name: "Samsung", camera: 12, price: 28000, color: "white", network: "4G" },
    { name: "Xiaomi", camera: 128, price: 30000, color: "blue", network: "4G" },
    { name: "Oppo", camera: 48, price: 17000, color: "red", network: "4G" },
    { name: "Iphone", camera: 12, price: 140000, color: "black", network: "4G" },
    { name: "Nokia", camera: 24, price: 25000, color: "yellow", network: "4G" },
    { name: "Vivo", camera: 18, price: 16000, color: "white", network: "4G" },
    { name: "Realme", camera: 12, price: 12000, color: "green", network: "4G" },
    { name: "HTC", camera: 12, price: 17000, color: "black", network: "4G" },
    { name: "Walton", camera: 12, price: 10500, color: "gray", network: "4G" },
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        let phone = phones[i];
        let price = phone["price"];
        if (price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const purchasePhone = cheapestPhone(phones);
console.log(purchasePhone);
