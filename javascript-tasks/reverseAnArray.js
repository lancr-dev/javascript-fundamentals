const reverseArray = (array) => {
  let reversedArray = [];

  for (let element of array) {
    reversedArray.unshift(element);
  }

  return reversedArray;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
