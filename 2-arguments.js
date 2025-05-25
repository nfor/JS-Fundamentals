const avgs = process.argv.slice(2);

if (avgs.length === 0) {
  console.log('No argument');
}
else if (avgs.length = 1) {
    console.log('One argument provided:');
    }
else {
    console.log('Arguments found');
}