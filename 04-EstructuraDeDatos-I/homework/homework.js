"use strict";

// EJERCICIO 1
function nFactorial(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}
// EJERCICIO 2
function nFibonacci(n) {
   if (n < 2) return n;
   return nFibonacci(n - 1) + nFibonacci(n - 2)
}

// EJERCICIO 3
function Queue() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
