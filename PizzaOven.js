// pizzaOven function should return
function PizzaOven(crustType,sauceType,cheeses, toppings){
    pizza={}
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza
}
p1=PizzaOven("deep dish", "traditional","mozzarella", ["pepperoni", "sausage"])
console.log(p1)

p2=PizzaOven("hand toasted", "marinara",["mozzarella", "feta"], ["mushrooms", "olivies", "onions"])
console.log(p2)

p3=PizzaOven("Sicilian", "Marinara", ["Mozzarella", "Provolone"], ["Chicken", "Tomatoes", "Spinach"])
console.log(p3)

p4=PizzaOven("Thin Crust", "Garlic", "No cheese", ["Broccoli", "Onions", "Green Peppers"])
console.log(p4)

pizza={
    pizzaType: ["Deep dish", "Hand toasted","Sicilian", "Thin Crust"],
    sauceType:  ["Traditional", "Marinara", "Garlic", "Ranch"],
    cheese: ["Mozzarella", "Provolone", "Feta"],
    topping: ["Pepperoni", "Sausage", "Mushrooms", "Olivies", "Onions", "Chicken", "Tomatoes", "Spinach", "Broccoli"],
    randomPizza: function randomPizza(){
        return this.pizzaType[Math.floor(Math.random()*this.pizzaType.length)] +" "+ this.sauceType[Math.floor(Math.random()*this.sauceType.length)] +" "+ this.cheese[Math.floor(Math.random()*this.cheese.length)]+" "+this.topping[Math.floor(Math.random()*this.topping.length)]
    }
}

console.log(pizza.randomPizza())

