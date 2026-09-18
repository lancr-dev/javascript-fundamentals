// function
function greet() {
  console.log('Hello World!');
}

// function with parameter
function greetStudent(student) {
  console.log(`Hello ${student}`);
}

greetStudent('Lance');

// another example
function add(x, y) {
  return x + y;
}
console.log(add(10, 20));

// arrow function
const dif = (a, b) => {
  return a - b;
};
console.log(dif(10, 20));
