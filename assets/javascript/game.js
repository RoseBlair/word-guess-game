

var dogBreed = ["doberman", "blue heeler", "australian shepherd",
  "dalmation", "weimaraner", "bichon frise", "komondor", "dachshund", "poodle", "great dane",
  "chihuahua", "golden retreiver", "irish wolfhound", "american pit bull terrier", "rhodesian ridgeback",
  "labrador retreiver", "border collie", "schnauzer", "corgi", "pug", "shiba inu"];

var wins = 0;
var guesses = 10;
var letterArray = [];
var randomBreedArray = [];
var updatedGuess = [];
var correctLetters = [];

var winsCount = document.getElementById("winCount");
var guessedLetters = document.getElementById("guessedLetters");
var remainingGuesses = document.getElementById("remainingGuesses");
var currentWord = document.getElementById("currentWord");


// document.getElementByID("remainingGuesses").addEventListener("keyup", function() {
// };

var randomBreed = dogBreed[Math.floor(Math.random() * dogBreed.length)];
var randomBreedArray = randomBreed.split("");
var breedLength = randomBreed.length;
var currentWordArray = [];


for (var i=0; i < breedLength; i++) { 
  currentWordArray[i]="-";
}

currentWord.textContent = currentWordArray.join(" ");



document.onkeyup = function (event) {







  var userGuess = event.key;
  var userGuessLower = userGuess.toLowerCase();
  


  //trying to find the correct character from within a string:

  if (randomBreed.indexOf(userGuessLower) === -1) {
    letterArray.push(userGuessLower);
    guessedLetters.textContent = letterArray;
  }

  

  // If it is in the array...

  else {
    // randomBreed.replace(userGuessLower);


     for (var i=0; i < randomBreedArray.length; i++) {
      //console.log(randomBreedArray.match(userGuessLower));
      if (randomBreedArray[i] === userGuessLower) {
        currentWordArray[i] = userGuessLower;
        currentWord.textContent = currentWordArray.join(" ");
      };
    };

  };

};