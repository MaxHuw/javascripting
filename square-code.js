var prompt = require("prompt-sync")();

  var squareCode = function(input) {

    var length = input.length;
    var numberCols;
    var numberRows;
    var bufferString = "";
    var codeString = "";
    var pattern = /^[a-zA-Z]+$/;
    var validInput = pattern.test(input);

    if (validInput && length < 81) {

      if ((Math.sqrt(length) % 1) === 0) {
        numberCols = numberRows = Math.sqrt(length);
      } else {
        numberCols = Math.ceil(Math.sqrt(length));
        numberRows = Math.ceil(length / numberCols);
      }
      //Test number of colums and rows for the 'square'
      //console.log(numberCols, numberRows);

      var square = [];

      for (var i = 0; i < numberRows; i ++) {
        bufferString = input.slice((i * numberCols), (i * numberCols) + numberCols);
        square[i] = bufferString;
        //Test printing out the 'code square'
        //console.log(square[i]);

      }

      for (var j = 0; j < numberCols; j ++) {
        for (var k = 0; k < numberRows; k ++) {
          if (square[k].charAt(j) !== null) {
            codeString = codeString + square[k].charAt(j).toLowerCase();
          } else {
            codeString = codeString + " ";
          }
        }
        codeString = codeString + " ";
      }

      return codeString;

    } else {

      return "Please only use leters, and less than 81 characters.";
    }

  };

console.log("Enter a phase 81 characters or less.");
var input = prompt(">");
console.log(squareCode(input));

//Test Cases
//console.log(squareCode("haveaniceday"));
//console.log(squareCode("feedthedog"));
//console.log(squareCode("chillout"));

