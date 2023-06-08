/* eslint-disable no-unused-vars */
const checkNesting = (numbers) => {
  let count = 0;
  const flattens = [];
  numbers.map((item) => {
    Array.isArray(item) && (count = 1 + checkNesting(item));
    flattens.push(count);
  });
  return Math.max(...flattens);
};
const flatten = (array) => {
  const number = checkNesting(array);
  return array.flat(number);
};
