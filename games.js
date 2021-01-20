//Global Variables
const gamePattern = [];
let userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
let level = 0;
let started = false; 

$(document).keypress(function() {
    if (!started) {
    $("#level-title").html(`Level ${level}`);
    nextSequence();
    started = true;
  }
});

function nextSequence() {  
  userClickedPattern = [];
  level ++;
  $("#level-title").html(`Level ${level}`);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

$("div.btn").click(function(){
let userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);
// console.log(userClickedPattern);
new Audio(`./sounds/${userClickedPattern}.mp3`).play();
// console.log(userClickedPattern);
playSound(userChosenColour);
animatePress(userChosenColour)
checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(function() {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      console.log(userClickedPattern.length);
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("fail");
  }
}
