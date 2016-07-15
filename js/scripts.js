// Business Logic

function Pizza(size, base, toppings) {
  this.size = size || "Small";
  this.base = base || "Tomato Sauce";
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.calcPrice = function() {
    if (this.size === "Small") {
      this.price += 10;
    } else if (this.size === "Medium") {
      this.price += 15;
    } else if (this.size === "Large") {
      this.price += 20;
    }
  for (var i = 0; i < this.toppings.length; i++) {
    this.price += 2;
  }
  return this.price;
}

Pizza.prototype.printPizza = function() {
  $(".orderSummary").append("You have ordered a " + this.size + " Pizza! " + "It has a tasty " + this.base + " base. " + "<span>The Price of your Pizza is $" + this.price + "</span>." + " Your pizza has the following toppings:");
  for (var i = 0; i < this.toppings.length; i++) {
    $(".toppings").append("<li>" + this.toppings[i] + ".</li>")
  }
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
    userPizza.printPizza();

    $(".pizzaSection").hide();
    $("#order").show();

  }); // End Form Submit Event
}); //End Document Ready
