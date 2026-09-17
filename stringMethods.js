let word = 'Sample Word';

word.toUpperCase();
console.log(word);

word.toLowerCase();
console.log(word);

word.trim(); // (remove whitespace from both ends of a string)
console.log(word);

word.trimStart(); // (remove the whitespace in leftside)
word.trimEnd(); // (remove the whitespace in right side)

word = word.replace('W', 's');
console.log(word);

// other methods:
word.replaceAll(from, to);
word.slice(start, end);
