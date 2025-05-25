const args = process.argv.slice(2);

// Check if exactly two arguments were provided
if (args.length !== 2) {
  console.log("Please provide exactly two arguments");
} else {
  // Print the arguments in the specified format
  console.log(`${args[0]} is ${args[1]}`);
}
