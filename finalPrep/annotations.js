// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//create a function that takes in 5 arguments
function buildABear(name, age, fur, clothes, specialPower) {
  //create four variables. Two will be strings, one will be an array, and one will be an object
  //this variable will use interpolation
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  var demographics = [name, age];
  //this variable with use concatenation
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
// return the result of the object
  return builtBear
}
//call the function buildABear to create to versions of a bear
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//create a function that takes 3 arguments
function fizzBuzz(num1, num2, range) {
  //create a for loop
  //var i is equal to zero , as long as i is less than or equal to range, add one
  for (var i = 0; i <= range; i++) {
    //if the remainder of i and num1 is equal to zero and the remainder of i and num2 is zero, log fizzbuzz
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      //else if the modulo of i and num 1 equals zero, log fizz
    } else if (i % num1 === 0) {
      console.log('fizz');
      //else if i modulo num2 equals 0, log buzz
    } else if (i % num2 === 0) {
      console.log('buzz');
      //else log i
    } else {
      console.log(i);
    }
  }
}
//call two intances of the function fizzBuzz
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
