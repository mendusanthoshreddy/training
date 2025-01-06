var d = 10; // global variable
let b = 20; // block-scoped variable (script-level scope)
const c = 30; // block-scoped constant (script-level scope)

function demo() {
  var username = "Just Reference"; // function-scoped variable
  let city = "hyderabad"; // block-scoped variable
  const salary = 1000000; // block-scoped constant
  console.log(username, city, salary); // Outputs: Just Reference hyderabad 1000000
}

demo();

{
  // New block scope
  let p = 1000; // block-scoped variable
  const q = 2000; // block-scoped constant
  console.log(p, q); // Outputs: 1000 2000
}

// String examples
let str1 = "double quotes";
console.log(str1, typeof str1); // Outputs: double quotes string

let str2 = 'single quote';
console.log(str2, typeof str2); // Outputs: single quote string

let str3 = `template literals`;
console.log(str3, typeof str3); // Outputs: template literals string

// Boolean examples
let bool1 = true;
console.log(bool1, typeof bool1); // Outputs: true boolean

let bool2 = false;
console.log(bool2, typeof bool2); // Outputs: false boolean

// Number examples
let num1 = 10;
console.log(num1, typeof num1); // Outputs: 10 number

let num2 = 12.2334;
console.log(num2, typeof num2); // Outputs: 12.2334 number

let num3 = 10e3; // Scientific notation (10 × 10³)
console.log(num3, typeof num3); // Outputs: 10000 number

// Undefined example
let a;
console.log(a, typeof a); // Outputs: undefined undefined

// Null example
let x = null;
console.log(x, typeof x); // Outputs: null object (historical JS quirk)
