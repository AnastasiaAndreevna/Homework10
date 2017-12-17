var number1
var number2

function add () {
  return number1 + number2
}

console.log(add)

function sub () {
  return number1 - number2
}

console.log(sub)

function multi () {
  return number1 * number2
}

console.log(multi)

function div () {
  if (0 < number2 < 0) {
    return number1 / number2
  }
}

console.log(div)

function exponentiation () {
  return Math.pow(number1, number2)
}

console.log(exponentiation())

function root () {
  return Math.sqrt(number1)
}

console.log(root())

function sin () {
  return Math.sin(number1)
}

console.log(sin)

function cos () {
  return Math.cos(number1)
}

console.log(cos)

function factorial () {
  return number1 ? number2 * factorial(number2 - 1) : 1
}

console.log(factorial(number1))