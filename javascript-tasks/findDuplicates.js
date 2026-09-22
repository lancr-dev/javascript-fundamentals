const findDuplicates = (array) => {
  let seen = new Set();
  let duplicated = new Set();

  for (let item of array) {
    if (seen.has(item)) {
      console.log(`${item} is duplicated.`);
      duplicated.add(item);
    } else {
      seen.add(item);
    }
  }
};

console.log(findDuplicates([1, 1, 2, 3, 3, 4, 5, 5]));
