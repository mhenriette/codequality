/* eslint-disable no-unused-vars */
const summation = (numbers) => {
  if (numbers.length === 0) return 0;
  const [element, ...elements] = numbers;
  return element + summation(elements);
};
