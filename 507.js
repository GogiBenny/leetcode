// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. 
// A divisor of an integer x is an integer that can divide x evenly.
// Given an integer n, return true if n is a perfect number, otherwise return false.
// Constraints: 1 <= n <= 10^8

function checkPerfectNumber(n) {
  if (n === 1) return console.log(false);
  let sumOfProperDivisors = 1;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      sumOfProperDivisors += i + (n / i);
    }
  }
  return console.log(sumOfProperDivisors === n);
}

checkPerfectNumber(1); // false
checkPerfectNumber(10); // false
checkPerfectNumber(6); // true
checkPerfectNumber(430); // false
checkPerfectNumber(28); // true
