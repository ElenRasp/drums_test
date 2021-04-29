/*function clickEvent (){
    alert("clicked!");
}

document.querySelector("button").addEventListener("click", clickEvent);*/

/*document.querySelectorAll("button")[0].addEventListener("click", function(){ alert("clicked!")});

/*function clickEvent(){
  alert("clicked!");
  }
  var n =-1;
  while (n<6){
      n++;
document.querySelectorAll("button")[n].addEventListener("click", clickEvent);}*/

/*function clickEvent(){
audio = new Audio("sounds/crash.mp3");
audio.play();
}*/


/*Detect button press*/
for (var i = 0; i < document.getElementsByClassName("drum").length; i++) {

  document.getElementsByClassName("drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickBass = new Audio("sounds/kickBass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom4.mp3");
      tom4.play();
      break;
  }
}
function buttonAnimation (currentKey){
  var activeButton =document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function(){document.querySelector("." + currentKey).classList.remove("pressed");}, 100);

  }
