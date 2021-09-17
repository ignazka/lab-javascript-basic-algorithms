// Iteration 1: Names and Input
const driver = "Karla";
const navigator = "Philipp";

console.log(`the driver's name is ${driver}.`);
console.log(`the navigator's name is ${navigator}.`);


// Iteration 2: Conditionals

if (driver.length > navigator.length) {
  console.log(
    `The driver has the longest name, it has ${driver.length} characters`
  );
} else if (driver.length < navigator.length) {
  console.log(
    `The navigator has the longest name, it has ${navigator.length} characters`
  );
} else {
  console.log(`The both are equally long names, ${driver.length} characters`);
}

// Iteration 3: Loops
