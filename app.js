
function rollDice() {
    var diceSound = new Audio('sounds/dice.mp3');
    diceSound.play();

    var randomNum1 = Math.floor((Math.random() * 6) + 1);
    var randomDice1 = "images/dice" + randomNum1 + ".png";
    document.querySelector(".img1").src = randomDice1;

    var randomNum2 = Math.floor((Math.random() * 6) + 1);
    var randomDice2 = "images/dice" + randomNum2 + ".png";
    document.querySelector(".img2").src = randomDice2;

    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerText = "Player 1 Wins!";
    }
    else if (randomNum1 < randomNum2) {
        document.querySelector("h1").innerText = "Player 2 Wins!";
    }
    else if (randomNum1 === randomNum2) {
        document.querySelector("h1").innerText = "Draw!";
    }
}

document.querySelector("button").addEventListener("click", rollDice);



