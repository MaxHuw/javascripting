var calculateChange = function(total, cash) {

  var change = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };

  var difference = cash - total;

  var til = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  var i = 0;

  var denomination = til[i];

  while (difference > 0) {

    if (difference < denomination) {
      i++;
      denomination = til[i];

    } else {

        var amountOfChange = parseInt(difference / denomination);

        switch (denomination) {
          case 2000:
          change.twentyDollar = amountOfChange;
          break;

          case 1000:
          change.tenDollar = amountOfChange;
          break;

          case 500:
          change.fiveDollar = amountOfChange;
          break;

          case 200:
          change.twoDollar = amountOfChange;
          break;

          case 100:
          change.oneDollar = amountOfChange;
          break;

          case 25:
          change.quarter = amountOfChange;
          break;

          case 10:
          change.dime = amountOfChange;
          break;

          case 5:
          change.nickel = amountOfChange;
          break;

          case 1:
          change.penny = amountOfChange;
          break;
        }

        difference = difference - (amountOfChange * denomination);

      }

  }

  Object.keys(change).forEach((key) => (change[key] === 0) && delete change[key]);

  return change;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
