// Business Logic

function Pizza(size, base) {
  this.size = size;
  this.base = base;
  this.toppings = [];
  this.price;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.calcToppingPrice = function() {
  this.toppings.forEach(topping) {
    this.price += 2;
  }
}

// User Interface Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var userPizza = new Pizza();




  });
});
