const correctUsername = 'lance10';
const correctPassword = '011007';
const attempts = 3;

for (let i = 1; i <= attempts; i++) {
  let username = prompt('Enter username: ');
  let password = prompt('Enter password: ');

  if (username === correctUsername && password === correctPassword) {
    alert('Login successful!');
    break;
  } else {
    alert('Invalid username or password.');
  }

  if (i === 3) {
    alert('Account is locked.');
  }
}
