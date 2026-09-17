// Switch statement
let course = 1;

switch (course) {
  case 1:
    console.log('BSCS');
    break;
  case 2:
    console.log('BSIT');
    break;
  case 3:
    console.log('BSBA');
    break;
  default:
    console.log('Not a Valid Number of course.');
}

// Multi-case Grouping
let fruit = 'dragonfruit';

switch (fruit) {
  case 'apple':
  case 'banana':
  case 'orange':
    console.log('This is a common fruit.');
    break;
  case 'dragonfruit':
    console.log('This is an exotic fruit.');
    break;
  default:
    console.log('Unknown fruit.');
}
