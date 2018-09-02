

var dogType = ["doberman", "blue heeler", "australian shepherd", 
"dalmation", "weimaraner", "bichon frise", "komondor", "dachshund", "poodle", "great dane",
"chihuahua", "golden retreiver", "irish wolfhound", "american pit bull terrier", "rhodesian ridgeback",
"labrador retreiver", "border collie", "schnauzer", "corgi", "pug", "shiba inu"];

var wins = 0;
var guesses = 10;
var letterArray = [];


var winsCount = document.getElementById("winCount");
var guessedLetters = document.getElementById("guessedLetters");
var remainingGuesses = document.getElementById("remainingGuesses");


// document.getElementByID("remainingGuesses").addEventListener("keyup", function() {
// };


document.onkeyup = function(event) {
    
    var userGuess = event.key;
    letterArray.push(userGuess);
    guessedLetters.textContent = letterArray;

};




    // var valueToUse = dogType[Math.floor(Math.random() * dogType.length)];
    




