function add (number1, number2) {
  return number1 + number2
}

console.log(add(14, 7))

function sub (number1, number2) {
  return number1 - number2
}

console.log(sub(14, 7))

function multi (number1, number2) {
  return number1 * number2
}

console.log(multi(14, 7))

function div (number1, number2) {
  if (number2 !== 0) {
    return number1 / number2
  }
}

console.log(div(14, 7))

function exponentiation (number1, number2) {
  return Math.pow(number1, number2)
}

console.log(exponentiation(4, 3))

function root (number1) {
  return Math.sqrt(number1)
}

console.log(root(10))

function sin (number1) {
  return Math.sin(number1)
}

console.log(sin(5))

function cos (number1) {
  return Math.cos(number1)
}

console.log(cos(5))

function factorial (number1) {
  if (number1 < 0) {
    return 'numbers  under 0 are not allowed'
  }
  else if (number1 === 0 || number1 === 1) {
    return 1
  }
  else {
    return number1 * factorial(number1 - 1)
  }
}

console.log(factorial(-1))
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(5))
console.log(factorial(8))
