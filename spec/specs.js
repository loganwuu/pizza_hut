describe('PizzaOrder', function() {
    it("creates a new pizza order with the type, topping, size and quantity options", function() {
        var testOrder = new PizzaOrder("testType", 1, "testSize", 1);
        expect(testOrder.type).to.equal("testType");
        expect(testOrder.toppings).to.eql(1);
        expect(testOrder.size).to.equal("testSize");
        expect(testOrder.quantity).to.equal(1);
    });

    it("creates a new pizza order with the type, 2 toppings, size and quantity options", function() {
        var testOrder = new PizzaOrder("testType", 2, "testSize", 1);
        expect(testOrder.type).to.equal("testType");
        expect(testOrder.toppings).to.eql(2);
        expect(testOrder.size).to.equal("testSize");
        expect(testOrder.quantity).to.equal(1);
    });
});

describe('totalCost', function() {
    it("caculates the price for a small pizza with one topping", function() {
        var testOrder = new PizzaOrder("testType", 1, "small", 1);
        expect(testOrder.totalCost()).to.equal(7);
    });

    it("caculates the price for a medium pizza with one topping", function() {
        var testOrder = new PizzaOrder("testType", 1, "medium", 1);
        expect(testOrder.totalCost()).to.equal(12);
    });

    it("caculates the price for a large pizza with one topping", function() {
        var testOrder = new PizzaOrder("testType", 1, "large", 1);
        expect(testOrder.totalCost()).to.equal(17);
    });

    it("caculates the price for two small pizza with one topping", function() {
        var testOrder = new PizzaOrder("testType", 1, "small", 2);
        expect(testOrder.totalCost()).to.equal(14);
    });

    it("caculates the price for two small pizzas each with two toppings", function() {
        var testOrder = new PizzaOrder("testType", 2, "small", 2);
        expect(testOrder.totalCost()).to.equal(18);
    });
});
