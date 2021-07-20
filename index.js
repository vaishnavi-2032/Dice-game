var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}








//.........................Another Solution......................................




/* var imgarray = new Array();

imgarray[0] = new Image();
imgarray[0].src='images/dice1.png';

imgarray[1] = new Image();
imgarray[1].src='images/dice2.png';

imgarray[2] = new Image();
imgarray[2].src='images/dice3.png';

imgarray[3] = new Image();
imgarray[3].src='images/dice4.png';

imgarray[4] = new Image();
imgarray[4].src='images/dice5.png';

imgarray[5] = new Image();
imgarray[5].src='images/dice6.png';


var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

document.getElementById("img1").src=imgarray[randomNumber1].src;
document.getElementById("img2").src=imgarray[randomNumber2].src;


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
} */