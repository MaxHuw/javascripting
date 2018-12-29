var multiplicationTable = function(maxValue) {

  return buildTable(maxValue, tableValues(maxValue));

};

var tableValues = function(maxValue) {

  var tableValues = new Array(maxValue);

  for (var x = 0; x < maxValue; x++) {
    tableValues[x] = new Array(maxValue);
  }

  for (var i = 1; i <= maxValue; i++) {
    for (var j = 1; j <= maxValue; j++) {
      tableValues[i - 1][j - 1] = (i * j).toString();
    }
  }

  return tableValues;

};

var buildTable = function(size, tableValues) {

  var table = "";
  var frame = "-".repeat((size * size).toString().length + 2) + "+";
  var spaces = 2 + (size * size).toString().length;

  for (var k = 0; k < size; k++) {
    table = table +("+" + frame.repeat(size) + "\n");
    for (var l = 0; l < size;l++) {
    table = table +("| " + tableValues[k][l] + " ".repeat(spaces - (tableValues[k][l]).length - 1));
    }
    table = table + "|\n";
  }

  table = table + ("+" + frame.repeat(size));

  return table;

};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));