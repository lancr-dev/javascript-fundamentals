// How to use if-else, else if statement
let age = 17;

if (age >= 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}

// another example
let validAge = -1;

if (validAge >= 18 && validAge < 101) {
  console.log('Valid');
} else if (validAge < 18 && validAge > 0) {
  console.log('Not Valid');
} else {
  console.log('Not a real age');
}
