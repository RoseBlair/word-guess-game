

var dogBreed = ["doberman", "blueheeler", "australianshepherd",
  "dalmation", "weimaraner", "bichonfrise", "komondor", "dachshund", "poodle", "greatdane",
  "chihuahua", "goldenretreiver", "irishwolfhound", "pitbull", "rhodesianridgeback",
  "labrador", "bordercollie", "schnauzer", "corgi", "pug", "shibainu", "beagle", "bulldog", 
  "boxer", "rottweiler", "akita", "greyhound", "pekingese"];

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
  currentWordArray[i]="_";
}

currentWord.textContent = currentWordArray.join(" ");



document.onkeyup = function (event) {


 



  var userGuess = event.key;
  var userGuessLower = userGuess.toLowerCase();
  


  //trying to find the correct character from within a string:

  if (randomBreed.indexOf(userGuessLower) === -1) {
    letterArray.push(userGuessLower.toUpperCase());
    guessedLetters.textContent = letterArray.join(" ");
    guesses--;
    remainingGuesses.textContent = guesses;
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

  //if you win or lose, the game is reset.

  if (currentWordArray.join(" ") === randomBreedArray.join (" ")) {
    wins++;
    winCount.textContent = wins;
    

  }

  if ((guesses===0) || (currentWordArray.join(" ") === randomBreedArray.join (" "))) {
    randomBreed = dogBreed[Math.floor(Math.random() * dogBreed.length)];
    randomBreedArray = randomBreed.split("");
    breedLength = randomBreed.length;
    currentWordArray = [];
    for (var i=0; i < breedLength; i++) { 
      currentWordArray[i]="_";
    };  
    guesses = 10;
    letterArray = [];

  }

};