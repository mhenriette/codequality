/* eslint-disable no-unused-vars */
const calculateAverage = (numbers) => {
  const sum = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return sum / numbers.length;
};
