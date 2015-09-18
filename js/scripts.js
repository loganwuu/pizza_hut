function PizzaOrder(type, toppings, size, quantity) {
    this.type = type;
    this.toppings = toppings;
    this.size = size;
    this.quantity = quantity;
}

PizzaOrder.prototype.totalCost = function() {
    var cost = 0;
    if (this.size === "small") {
        cost = (this.toppings * 2) + 5;
    } else if (this.size === "medium") {
        cost = (this.toppings * 2) + 10;
    } else if (this.size === "large") {
        cost = (this.toppings * 2) + 15;
    }
    var totalCost = cost * this.quantity;
    return totalCost;
}

function resetFields() {
    //empty checked boxes after each submission
    $("#checkbox input:checkbox").removeAttr('checked');
    $("input#new-quantity").val("");
}

$(document).ready(function() {
    $("form#new-order").submit(function(event) {
        event.preventDefault();

        var inputtedType = $("select#new-type").val();
        var inputtedToppings = $('#checkbox :checkbox:checked').length;
        // console.log($('#checkbox :checkbox:checked').length);
        // console.log(inputtedToppings);
        var inputtedSize = $("select#new-size").val();
        var inputtedQuantity = parseInt($("input#new-quantity").val());

        var newOrder = new PizzaOrder(inputtedType, inputtedToppings, inputtedSize, inputtedQuantity);

        var totalCost = newOrder.totalCost();

        console.log(totalCost);

        $("#show-cost").show();
        $("span#totalCost").text(totalCost);
        $("span#pizzaType").text(inputtedType);
        // $("#checkbox").forEach(function(topping) {
        //     $("ul#toppings").append("<li>" + topping + "</li>");
        // });
        $("span#size").text(inputtedSize);
        $("span#quantity").text(inputtedQuantity);

        resetFields();
    });
});
