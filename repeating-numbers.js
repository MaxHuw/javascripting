var repeatNumbers = function(data) {

  var print = "";

  for (var i = 0; i < data.length; i++) {

    if (data[i] instanceof Array) {
      print += (String(data[i][0]).repeat(data[i][1]));
      if (data[i + 1] instanceof Array) {
      print += ', ';
      }
    }
  }

return (print);

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


