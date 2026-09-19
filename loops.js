// for loop
let count = 10;

// for(initialization; condition; afterthought){}
for (let i = 1; i <= 10; i++) {
  console.log(`Count: ${i}`);
}

// while loop
let num = 0;
while (num < 10) {
  num++;
  console.log(`While loop: ${num}`);
}

// do while loop
do {
  num--;
  console.log(`Do while: ${num}`);
} while (num > 0);

// controlling the loop: break and continue
for (let i = 1; i <= 5; i++) {
  if (i === 2) {
    continue;
  }

  if (i === 4) {
    break;
  }

  console.log(`Count is: ${i}`);
}

// Using array
let names = ['Lance', 'John', 'Alice'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// for loop (of) - outputs the array values
let colors = ['Green', 'Purple', 'Orange', 'Blue', 'Yellow'];
for (let color of colors) {
  console.log(color);
}

// for loop (in) - this outputs the array index number
for (let c in colors) {
  console.log(c);
}

// Nested for loops
for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 5; col++) {
    console.log(`Row ${row} | Column ${col}`);
  }
}
