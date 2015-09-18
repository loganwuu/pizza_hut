function PizzaOrder(type, toppings, size, quantity) {
    this.type = type;
    this.toppings = toppings;
    this.size = size;
    this.quantity = quantity;
}

PizzaOrder.prototype.totalCost = function() {
    var cost = 0;
    if (this.size === "s") {
        cost = (this.toppings.length * 2) + 5;
    } else if (this.size === "m") {
        cost = (this.toppings.length * 2) + 10;
    } else if (this.size === "l") {
        cost = (this.toppings.length * 2) + 15;
    }
    var totalCost = cost * this.quantity;
    return totalCost;
}



// $(document).ready(function() {
//     $("form#new-ticket").submit(function(event) {
//         event.preventDefault();
//
//         var inputtedTitle = $("select#new-title").val();
//         var inputtedShowTime = $("select#new-show-time").val();
//         var inputtedAge = parseInt($("input#new-age").val());
//         var inputtedShowDate = $("input#new-show-date").val();
//
//         var newTicket = new Ticket(inputtedTitle, inputtedShowTime, inputtedAge, inputtedShowDate);
//
//         var price = newTicket.calculatePrice();
//
//         $("h4#price-header").show();
//         $("span#price").text(price);
//     });
// });
