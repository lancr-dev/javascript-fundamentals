// Error Handling - try, catch, finally
try {
  let x = 10;
  let y = 20;

  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Both variables must be an integer.');
  }

  let result = x + y;
  console.log(`Result: ${result}`);
} catch (error) {
  console.error(`Error in variable value: `, error.message);
} finally {
  console.log('Execution finished.');
}
