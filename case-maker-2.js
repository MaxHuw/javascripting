var makeCase = function(input, format) {

  var formatArray = [];

  if (Array.isArray(format)) {
    formatArray = format;
  } else {
    formatArray.push(format);
  }

  var string = "";
  var k = 0;

  for (var i = 0; i < formatArray.length; i ++) {

    switch (formatArray[i]) {

      case "camel":

        string = "";

        for (k = 0; k < input.length; k ++) {
          if (input.charAt(k) === ' ') {
            string = string + (input.charAt(k + 1).toUpperCase());
            k ++;
          } else {
            string = string + (input.charAt(k));
          }
        }

        input = string;

      break;

      case 'pascal':

        string = "";

        for (k = 0; k < input.length; k ++) {
          if (input.charAt(k) === ' ') {
            string = string + (input.charAt(k + 1).toUpperCase());
            k ++;
          } else if (k === 0 && input.charAt(0) != ' ') {
            string = string + (input.charAt(0).toUpperCase());
          } else {
            string = string + (input.charAt(k));
          }
        }

        input = string;

      break;

      case 'snake':

        string = "";

        for (k = 0; k < input.length; k ++) {
          if (input.charAt(k) === ' ') {
            string = string + "_";
          } else {
            string = string + (input.charAt(k));
          }
        }

        input = string;

      break;

      case 'kebab':

        string = "";

        for (k = 0; k < input.length; k ++) {
          if (input.charAt(k) === ' ') {
            string = string + "-";
          } else {
            string = string + (input.charAt(k));
          }
        }

        input = string;

      break;

      case 'title':

        string = "";

        for (k = 0; k < input.length; k ++) {
          if (input.charAt(k) === ' ') {
            string = string + " " + (input.charAt(k + 1).toUpperCase());
            k ++;
          } else if (k === 0 && input.charAt(0) != ' ') {
            string = string + (input.charAt(0).toUpperCase());
          } else {
            string = string + (input.charAt(k));
          }
        }

        input = string;

      break;

      case 'vowel':

        string = "";

        for (k = 0; k < input.length; k ++) {
          if (input.charAt(k) === 'a' ||
              input.charAt(k) === 'e' ||
              input.charAt(k) === 'i' ||
              input.charAt(k) === 'o' ||
              input.charAt(k) === 'u') {
            string = string + input.charAt(k).toUpperCase();
          } else {
            string = string + (input.charAt(k));
          }
        }

        input = string;

      break;

      case 'consonant':

        string = "";

        for (k = 0; k < input.length; k ++) {
          if (input.charAt(k) != 'a' &&
              input.charAt(k) != 'e' &&
              input.charAt(k) != 'i' &&
              input.charAt(k) != 'o' &&
              input.charAt(k) != 'u') {
            string = string + input.charAt(k).toUpperCase();
          } else {
            string = string + (input.charAt(k));
          }
        }

        input = string;

      break;

      case 'upper':

        string = "";

        for (k = 0; k < input.length; k ++) {
          if (input.charAt(k) === ' ') {
            string = string + " ";
          } else {
            string = string + input.charAt(k).toUpperCase();
          }
        }

        input = string;

      break;

      case 'lower':

        string = "";

        for (k = 0; k < input.length; k ++) {
          if (input.charAt(k) === ' ') {
            string = string + " ";
          } else {
            string = string + input.charAt(k).toLowerCase();
          }
        }

        input = string;

      break;

    }
  }

return string;

};


console.log((makeCase("this is a string", "camel") + " === thisIsAString"));
console.log((makeCase("this is a string", "pascal") + " === ThisIsAString"));
console.log((makeCase("this is a string", "snake") + " === this_is_a_string"));
console.log((makeCase("this is a string", "kebab") + " === this-is-a-string"));
console.log((makeCase("this is a string", "title") + " === This Is A String"));
console.log((makeCase("this is a string", "vowel") + " === thIs Is A strIng"));
console.log((makeCase("this is a string", "consonant") + " === THiS iS a STRiNG"));
console.log((makeCase("this is a string", ["upper", "snake"]) + " === THIS_IS_A_STRING"));