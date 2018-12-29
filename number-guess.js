var prompt = require("prompt-sync")();

var maxNumber = 100;

console.log("Try and guess a random number from 1 to " + maxNumber +". Type 'exit' to quit.");

var randomNumber = Math.round(Math.random() * maxNumber);
var guesses = [];
var stillGuessing = true;

Outer_Loop: while (stillGuessing) {

  console.log("Guess a number!");
  var guess = prompt(">");

  Inner_Loop: for (var i = 0; i < guesses.length; i ++){

    if (guess == guesses[i]) {
      console.log("You already guessed " + guess + ". Guess again.");
      continue Outer_Loop;
    }
  }

  if (isNaN(guess) && guess != 'exit') {
    console.log("That is not a number.");
  } else {

    if (guess < randomNumber) {
      console.log("Too low, try again! ");
      guesses.push(guess);
    } else if (guess > randomNumber) {
      console.log("Too high, try again! ");
      guesses.push(guess);
    } else if (guess == randomNumber) {
      guesses.push(guess);
      console.log("You got it! The random number was " + randomNumber + ". It took you " + guesses.length + " guesses.");
      stillGuessing = false;
    } else if (guess === 'exit') {
      console.log("Thank you for playing. Better luck next time!");
      stillGuessing = false;
    }
  }
}
