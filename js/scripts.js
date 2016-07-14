// Business Logic

function Pizza(size, base, toppings) {
  this.size = size;
  this.base = base;
  this.toppings = toppings;
  this.price;
}

Pizza.prototype.calcPrice = function() {
  
    if (this.size === "Small") {
      this.price += 10;
    } else if (this.size === "Medium") {
      this.price += 15;
    } else if (this.size === "Large") {
      this.price += 20;
    }
  return this.price;
}

// User Interface Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var base = $("input:radio[name=base]:checked").val();
    var toppings = $("input:checkbox[name=toppings]:checked").map(function(){
      return $(this).val();
    }).get();
    var userPizza = new Pizza(size, base, toppings);

    userPizza.price = userPizza.calcPrice();
    alert(userPizza.price);
  });
});
