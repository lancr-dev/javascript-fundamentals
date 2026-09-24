const students = [
  { name: 'John', grade: 85 },
  { name: 'Mark', grade: 72 },
  { name: 'Anna', grade: 91 },
  { name: 'Lisa', grade: 60 },
];

for (let student of students) {
  if (student.grade > 74) {
    console.log(`${student.name} - ${student.grade} - Passed.`);
  } else {
    console.log(`${student.name} - ${student.grade} - Failed.`);
  }
}
