var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {

    var buttonLetter = this.textContent;
    animateButton(buttonLetter);
    playSound(buttonLetter);

  });
}

document.addEventListener("keydown", function(event) {

  var buttonLetter = event.key;
  animateButton(buttonLetter);
  playSound(buttonLetter);
});

function playSound(letter) {

  var audio = new Audio();

  switch (letter) {
    case "w":
      audio = new Audio('media/sounds/tom-1.mp3').play();
      break;
    case "a":
      audio = new Audio('media/sounds/tom-2.mp3').play();
      break;
    case "s":
      audio = new Audio('media/sounds/tom-3.mp3').play();
      break;
    case "d":
      audio = new Audio('media/sounds/tom-4.mp3').play();
      break;
    case "j":
      audio = new Audio('media/sounds/crash.mp3').play();
      break;
    case "k":
      audio = new Audio('media/sounds/kick-bass.mp3').play();
      break;
    case "l":
      audio = new Audio('media/sounds/snare.mp3').play();
      break;
    default:
      console.log("Unmapped letter: " + letter);
  }
}

function animateButton(key) {

  var activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
