// JSON (JavaScript Object Notation)
let personData = {
  name: 'Lance',
  age: 19,
  isStudent: true,
  hobbies: ['coding', 'eating', 'sleep'],
  pets: {
    cat: 'Batman',
    dog: 'Chewy',
    other: {
      donky: 'Davis',
    },
  },
};

// How to print the value
console.log(personData['name']);
console.log(personData['age']);
console.log(personData['isStudent']);
console.log(personData['hobbies'][1]);
console.log(personData['pets']['cat']);
console.log(personData['pets']['dog']);
console.log(personData['pets']['other']['donky']);
