//Global Variables
const gamePattern = [];
const userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];

const redSound = new Audio("./sounds/red.mp3");
const blueSound = new Audio("./sounds/blue.mp3");
const greenSound = new Audio("./sounds/green.mp3");
const yellowSound = new Audio("./sounds/yellow.mp3");
const wrongSound = new Audio("./sounds/wrong.mp3");

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  console.log(randomChosenColour);
  playSound(randomChosenColour);
}

$("div.btn").click(function(){
let userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);
new Audio(`./sounds/${userClickedPattern}.mp3`).play();
console.log(userClickedPattern);
playSound(userChosenColour);
animatePress(userChosenColour)
});

function playSound(name) {
  if (name === "red") {
    $("#red").fadeOut(100).fadeIn(100);
    redSound.play();
  } else if (name === "blue") {
    $("#blue").fadeOut(100).fadeIn(100); 
    blueSound.play();
  } else if (name === "green") {
    $("#green").fadeOut(100).fadeIn(100); 
    greenSound.play();
  } else {
    $("#yellow").fadeOut(100).fadeIn(100);
    yellowSound.play();
  }  
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(function() {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);
}
