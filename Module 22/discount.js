/*
suppose you are selling movie tickets. you want to give discount on tickets. If anyone want to buy 100 tickets then he have to pay 100tk/ticket. If he buy more than 100 and less than 200 tickets then he have to pay 100tk/ticket for the first 100 ticket and 90 tk/ticket for the rest tickets. If he want to buy more than 200 tickets he have to pay 100 tk/ticket for the first 100 ticket, 90 tk/ticket for 100 to 200 tickets and 70 tk/tickets for the rest. Now right a JavaScript function that will return the total price of the tickets for the discount. 
*/

let ticket = 250;
function ticketDiscountPrice(ticket) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    let sum = 0;
    if (ticket <= 100) {
        let firstPrice = ticket * first100Rate;
        sum = firstPrice;
    }
    else if (ticket <= 200) {
        let first100Price = 100 * first100Rate;
        let secondRestTicket = ticket - 100;
        let secondRestPrice = secondRestTicket * second100Rate;
        let secondPrice = first100Price + secondRestPrice;
        sum = secondPrice;
    }
    else {
        let first200Price = 100 * first100Rate + 100 * second100Rate;
        let restTicket = ticket - 200;
        let restPrice = restTicket * restTicketRate;
        let totalPrice = first200Price + restPrice;
        sum = totalPrice;
    }
    return sum;
}
const totalTicketPrice = ticketDiscountPrice(ticket);
console.log(totalTicketPrice);