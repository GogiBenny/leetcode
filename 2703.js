// Write a function argumentsLength that returns the count of arguments passed to it.

const argumentsLength = (...args) => console.log(args.length);

argumentsLength(5); // Expected: 1
argumentsLength({},null,"3"); // Expected: 3
