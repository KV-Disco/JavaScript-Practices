// sum() & multiply()

function sum (nums) {
  var suma = nums[0]
  for (var i = 1; i < nums.length; i++) {
    suma += nums[i]
  }
  return suma
}

sum([1, 2, 3, 4])

function mult (nums) {
  var multiplicacion = nums[0]
  for (var i = 1; i < nums.length; i++) {
    multiplicacion *= nums[i]
  }
  return multiplicacion
}

mult([1, 2, 3, 4])
