
// Game js.....
const hole = document.getElementById("hole");
let text = document.getElementById("text");
let game = document.getElementById("game");
let result = document.getElementById("result");

let hm = document.getElementById("hm");
let restart = document.getElementById("restart");

let jumping = 0;
let counter = 0;

// Animation -->
hole.addEventListener("animationiteration", hol);

function hol() {
  var random = - ((Math.random() * 200) + 100);
  hole.style.top = random + "px";
  counter++;
};


// Fall and game over -->
var fall = setInterval(function () {
  var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  if (jumping == 0) { bird.style.top = (birdTop + 1) + "px" };

  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  var hTop = (300 + holeTop);

  if ((birdTop > 265) || ((blockLeft < 50) && (blockLeft > -50) && ((birdTop < hTop) || (birdTop > hTop + 100)))) {
    result.style.display = "block";
    text.innerText = `Score : ${counter}`;
    game.style.display = "none";
    counter = 0;

  }

}, 10)


// Jump---
function jump() {
  jumping = 1;

  var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  if (birdTop > 6) { bird.style.top = (birdTop - 60) + "px" };

  setTimeout(function () {
    jumping = 0;
  }, 100);
}

window.addEventListener("keydown", jump);

let fly = document.getElementById("fly");
fly.addEventListener("click", jump);


// result menu--->

hm.addEventListener('click', function start() {
  console.log("Home Manu button is working");
  window.open('index.html', '_self');


});

restart.addEventListener('click', function start() {
  console.log("Restart button is working");
  window.open('game.html', '_self');


});

