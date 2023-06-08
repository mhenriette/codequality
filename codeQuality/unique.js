/* eslint-disable no-unused-vars */
const uniqueElements = (array) => {
  const uniqueArr = [];
  array.map(
    (element) => !uniqueArr.includes(element) && uniqueArr.push(element)
  );
  return uniqueArr;
};
