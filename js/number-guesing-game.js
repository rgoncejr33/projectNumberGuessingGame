function runGame() {
    const target = Math.floor(Math.random() * 101);
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    do {
        guessString = prompt('Pick a number between 1 and 100');
        guessNumber = parseInt(guessString);// Explicit. You're telling JS to turn string to number
        numTries++;
        guessNumber = +guessString; // Implicit.. JS determines whether the value should be turned into a number or not. You don't get that choice.
        correct = checkGuess(guessNumber, target);
    }
    while (!correct)
    alert("You guessed correctly. It took " + numTries + " total guesses.");
}

function checkGuess(guessNumber, target) {
    let correct = false;
    if (isNaN(guessNumber)) {
        alert('You did not enter a number.');        
    } else if((guessNumber < 1) || (guessNumber > 100)) {
        alert('You are picking a number out of the expected range.');
    } else if (guessNumber > target) {
        alert('You are picking a number larger than the target.');
    } else if (guessNumber < target) {
        alert('You are picking a number smaller than the target.')
    } else {
        correct = true;
    }   return correct;
}