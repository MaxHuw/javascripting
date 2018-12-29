var camelCase = function(input) {

  var stringArray = input.split('');

  for (var i = 0; i < stringArray.length; i++)
    if (stringArray[i].charAt(0) === ' ') {
      stringArray[i+1] = stringArray[i + 1].charAt(0).toUpperCase();
      stringArray.splice(i, 1);
    }

  return stringArray.join('');

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));