/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!


// Prompt 1: Dog
class Dog {

}
var ellie = new Dog;
var bear = new Dog;
console.log(ellie);
console.log(bear);

// Prompt 2: Snack
class Snack {

}
var chips = new Snack;
var cashews = new Snack;
console.log(chips);
console.log(cashews);

// Prompt 3: Shirt
class Shirt {

}
var buttonDown = new Shirt;
var cotton = new Shirt;
console.log(buttonDown);
console.log(cotton);


//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog {
  constructor(){
  this.breed = breed;
  this.weight = weightInPounds;
  this.age = ageInYears;
  }
}
var alaska = new Dog('Golden retriever', 60, 8);
console.log(alaska);

// Prompt 2: Snack
class Snack {
  constructor(){
    this.flavor = flavor;
    this.calories = calorieAmount;
    this.price = priceInDollars;
  }
}
var bread = new Snack('Cinnamon', 90, 3);
console.log(bread);


// Prompt 3: Shirt
class Shirt {
  constructor(){
    this.brand = brandName;
    this.color = color;
    this.fabric = fabric;
  }
}
var tshirt = new Shirt('Gap', 'White', 'Cotton');
console.log(tshirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(breed, weightInPounds, ageInYears){
  this.breed = breed;
  this.weight = weightInPounds;
  this.age = ageInYears;
  }
}
var ellie = new Dog('Husky mix', 50, 1);
var bear = new Dog('Mutt', 60, 6);
console.log(ellie, bear);
// Prompt 2: Snack
class Snack {
  constructor(flavor, calorieAmount, priceInDollars){
    this.flavor = flavor;
    this.calories = calorieAmount;
    this.price = priceInDollars;
  }
}
var chips = new Snack('Chili lime', 240, 3);
var cookie = new Snack('Chocolate chip', 300, 2);
console.log(chips, cookie);
// Prompt 3: Shirt
class Shirt {
  constructor(brandName, color, fabric){
    this.brand = brandName;
    this.color = color;
    this.fabric = fabric;
  }
}
var turtleNeck = new Shirt('Madewell', 'Blue', 'Cotton');
var tankTop = new Shirt('Athleta', 'Black', 'Spandex');
console.log(turtleNeck, tankTop);
