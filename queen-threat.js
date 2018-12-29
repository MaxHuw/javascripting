var generateBoard = function(whiteQueen, blackQueen){

  var size = 8;
  var table = "";
  var spaces = 3;
  var frame = "-".repeat(spaces) + "+";

  var tableValues = new Array(size);

  for (var x = 0; x < size; x ++) {
    tableValues[x] = new Array(size);
  }

  for (var i = 0; i < size; i ++) {
    for (var j = 0; j < size; j ++) {
      if (i == whiteQueen[0] && j == whiteQueen[1]){
        tableValues[i][j] = "W";
      } else if (i == blackQueen[0] && j == blackQueen[1]){
        tableValues[i][j] = "B";
      } else {
        tableValues[i][j] = " ";
      }
    }
  }

  for (var k = 0; k < size; k ++) {
    table = table +("+" + frame.repeat(size) + "\n");
    for (var l = 0; l < size; l ++) {
    table = table +("| " + tableValues[k][l] + " ");
    }
    table = table + "|\n";
  }

  table = table + ("+" + frame.repeat(size));

  console.log(table);

  return tableValues;

};

var queenThreat = function(board){

  var whiteQeenLoc = [];
  var blackQueenLoc = [];
  var threat = false;

  for (var i = 0; i < board.length; i ++) {
    for (var j = 0; j < board.length; j ++) {
      if (board[i][j] == "W"){
        whiteQeenLoc[0] = board[i];
        whiteQeenLoc[1] = board[j];
      } else if (board[i][j] == "B"){
        blackQueenLoc[0] = board[i];
        blackQueenLoc[1] = board[j];
      }
    }
  }

  if (whiteQueen[0] == blackQueen[0] || whiteQueen[1] == blackQueen[1] ) {
    threat = true;
  } else if ((whiteQueen[0] + whiteQueen[1]) == (blackQueen[0] + blackQueen[1])) {
    threat = true;
  } else if ((whiteQueen[0] - whiteQueen[1]) == (blackQueen[0] - blackQueen[1])) {
    threat = true;
  }

  return threat;

};

var whiteQueen = [0, 7];
var blackQueen = [7, 0];

var generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log("Queens threaten eachother === " + queenThreat(generatedBoard));
