// For Loop_JS

// for (let i = 0; i <= 100; i++) {
//   // RUN SOME CODE

//   console.log(i);
//   if (i === 20) {
//     console.log("Hey you hit 20!");
//   }
// }

// const texts = [
//   "Singing in the park",
//   "Watching myself dance",
//   "Dogo is danger",
//   "Cat is black",
//   "Cat is black",
//   "Cat is black",
//   "Cat is black",
// ];

// for (let i = 0; i < texts.length; i++) {
//   //   // RUN SOME CODE

//   console.log(texts[i]);
// }

const names = ["Dev ed", "Barbie", "Logice", "Mf Doom", "Tool"];

// for (let name in names) {
//   console.log(names.indexOf(name));
// }

// Specifically for Array
names.forEach(function (name, index) {
  console.log(name, index);
});
