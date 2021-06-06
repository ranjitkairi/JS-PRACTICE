// //   Function

// function greet() {
//   let name = prompt("What is your name?");
//   console.log("Welcome to our website!" + name);
// }

// console.log("rest of the code");
// //
// ///
// ///
// greet();

function max(nr1, nr2) {
  if (nr1 > nr2) {
    return nr1 * 10;
  } else {
    return nr2 * 10;
  }
}

let inbox = max(3, 30);
console.log(inbox);
