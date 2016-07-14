// Business Logic

function Pizza(size, base) {
  this.size = size;
  this.base = base;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.topping.push(topping);
}

// User Interface Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();





  });
});
