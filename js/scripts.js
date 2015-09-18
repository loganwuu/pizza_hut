function PizzaOrder(type, toppings, size, quantity) {
    this.type = type;
    this.toppings = toppings;
    this.size = size;
    this.quantity = quantity;
}

PizzaOrder.prototype.totalCost = function() {
    var cost = 0;
    if (this.size === "s") {
        cost = (this.toppings * 2) + 5;
    } else if (this.size === "m") {
        cost = (this.toppings * 2) + 10;
    } else if (this.size === "l") {
        cost = (this.toppings * 2) + 15;
    }
    var totalCost = cost * this.quantity;
    return totalCost;
}

function resetFields() {
    $(".checkbox").val('checked', false);
    $("input#new-quantity").val("");
}

$(document).ready(function() {
    $("form#new-order").submit(function(event) {
        event.preventDefault();

        var inputtedType = $("select#new-type").val();
        var inputtedToppings = parseInt(($('.checkbox').prop('checked', true)).length);
        console.log($('.checkbox').prop('checked', true).length);
        console.log(inputtedToppings);
        var inputtedSize = $("select#new-size").val();
        var inputtedQuantity = parseInt($("input#new-quantity").val());

        var newOrder = new PizzaOrder(inputtedType, inputtedToppings, inputtedSize, inputtedQuantity);

        var totalCost = newOrder.totalCost();

        console.log(totalCost);

        $("#show-cost").show();
        $("span#totalCost").text(totalCost);
        $("span#pizzaType").text(inputtedType);
        // inputtedToppings.forEach(function(topping) {
        //     $("ul#toppings").append("<li>" + topping + "</li>");
        // });
        $("span#size").text(inputtedSize);
        $("span#quantity").text(inputtedQuantity);

        resetFields();
    });
});
