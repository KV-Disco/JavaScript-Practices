// integrates_number_range.js

function int (num1, num2) {
  var x1 = Math.floor(num1)
  var x2 = Math.floor(num2)
  var strn = ''

  if (x1 > x2) {
    for (var i = x2; i <= x1; i++) {
      strn = strn + (i.toString)
    }
  }	else if (x2 > x1) {
    strn = '-1'
  }	else {
    strn = 'x1 and x2 are equal'
  }
  console.log(strn)
}

int(2, 5)
