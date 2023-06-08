/* eslint-disable no-unused-vars */
const checkPrime = (number) => {
  if (number <= 1) return "Not a Prime Number";
  let n = 2;
  while (number > n) {
    if (number % n === 0) return "Not a Prime Number";
    n++;
  }
  return "Prime number";
};
