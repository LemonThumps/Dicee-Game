var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function randomDice1() {
  var diceImage1 = getElementsByClassName("img1")[1]
  if (randomDice1() === 1) {
    diceImage1.setAttribute(src="images/dice1.png")
  }
  else if (randomDice1() === 2) {
    diceImage1.setAttribute(src="images/dice2.png")
  }
  else if (randomDice1() === 3) {
    diceImage1.setAttribute(src="images/dice3.png")
  }
  else if (randomDice1() === 4) {
    diceImage1.setAttribute(src="images/dice4.png")
  }
  else if (randomDice1() === 5) {
    diceImage1.setAttribute(src="images/dice5.png")
  }
}

function randomDice2() {
  var diceImage2 = getElementsByClassName("img2")[1]
  if (randomDice2() === 1) {
    diceImage2.setAttribute(src="images/dice1.png")
  }
  else if (randomDice2() === 2) {
    diceImage2.setAttribute(src="images/dice2.png")
  }
  else if (randomDice2() === 3) {
    diceImage2.setAttribute(src="images/dice3.png")
  }
  else if (randomDice2() === 4) {
    diceImage2.setAttribute(src="images/dice4.png")
  }
  else if (randomDice2() === 5) {
    diceImage2.setAttribute(src="images/dice5.png")
  }
}

randomDice1()
randomDice2()
