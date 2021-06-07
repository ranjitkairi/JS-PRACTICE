// Adventure_JS

//Generate a random number (Done)
//Give the use the abillity to guess
//If they guess and they are wrong, ask them again (hint);
//If they win - say that won

// function guessGame() {
//   let randomNr = Math.random() * 10;
//   //   console.log(randomNr);
//   let fixedNr = Math.floor(randomNr);
//   console.log(fixedNr);
// }

function guessGame() {
  let randomNr = Math.floor(Math.random() * 11);
  let guess;

  do {
    guess = prompt("Guess a number between 1-10");
    console.log(guess, randomNr);
    if (randomNr > guess) {
      console.log("You guess to low");
    } else if (randomNr < guess) {
      console.log("guess was too high");
    }
  } while (guess != randomNr);
  console.log("You won");
}

guessGame();
