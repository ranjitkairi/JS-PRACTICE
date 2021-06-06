// switch

// const text = "banana";
// let fruitNr = 0;

// switch (text) {
//   case "banana":
//     console.log("i love bananas too");
//     fruitNr = 1;
//     break;
//   case "apple":
//     console.log("i don't like apple crazy");
//     fruitNr = 2;
//     break;
//   case "avocado":
//     console.log("What fruit is this?");
//     fruitNr = 3;
//     break;
// }

let userInput = prompt("Tell me a fruit?");
let convertedValue = userInput.toLowerCase();
console.log(convertedValue);

switch (userInput) {
  case "KiWi":
    alert("Kiwi is the first food invented by the ocean boys");
    break;
  case "banana":
    alert("My girlfriend bought 12 bananas for no reason");
    break;
  case "apple":
    alert("Depending on which apple you buy you can either go");
    break;
  default:
    alert("The fruit is unknown to me");
    break;
}
