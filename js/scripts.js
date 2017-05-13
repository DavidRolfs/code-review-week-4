//back-end
function Pizza(size, topping, drink){
  this.size = size;
  this.topping = topping;
  this.drink = drink;
  this.cost = []
};

Pizza.prototype.fullOrder= function() {
  return this.size + " pizza with " + this.topping + "<br>" + "Your total is $" + this.cost;

};

Pizza.prototype.pizzaCost = function(toppingTotal, sizeTotal, drinkTotal){
  var toppingCost = toppingTotal.length * 1.99;
    if(sizeTotal === "Small"){
      var sizeCost = 9.99;
    }
    else if(sizeTotal === "Medium"){
      var sizeCost = 13.99;
    }
    else if(sizeTotal === "Large"){
      var sizeCost = 16.99;
    }
    else if(sizeTotal === "Extra Large"){
      var sizeCost = 19.99;
    }
    return this.cost = (toppingCost + sizeCost + drinkTotal).toFixed(2);
  };


// function pizzaCost(toppingTotal, sizeTotal, drinkTotal){
//   var toppingCost = toppingTotal.length * 1.99;
//   if(sizeTotal === "Small"){
//     var sizeCost = 9.99;
//   }
//   else if(sizeTotal === "Medium"){
//     var sizeCost = 13.99;
//   }
//   else if(sizeTotal === "Large"){
//     var sizeCost = 16.99;
//   }
//   else if(sizeTotal === "Extra Large"){
//     var sizeCost = 19.99;
//   }
//   return (toppingCost + sizeCost + drinkTotal).toFixed(2);
// };

// front end

$(document).ready(function(){
  $("button").click(function(){
  var pizzaSize = $("#pizzaSize :selected").text();
  var toppings=[]
    $("input:checkbox[name=topping]:checked").each(function() {
      var topping = $(this).val();
      toppings.push(topping);
    });

  var drink = parseInt($("#drink").val());
  var pizza = new Pizza(pizzaSize, toppings, drink);

  var finalTotal = pizza.pizzaCost(toppings, pizzaSize, drink)

  $("#showing").hide();

  $("#receipt").append(pizza.fullOrder()).show();

  });
})
