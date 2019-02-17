var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h4");
var body = document.getElementById("gradient");
var button = document.getElementById("rand");

css.textContent = "linear-gradient(to right, "+ color1.value +", "+ color2.value +")";


function setGradient(){
	body.style.background = "linear-gradient(to right, "+ color1.value +", "+ color2.value +")";
	css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function getRandomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandom(){
	body.style.background = "linear-gradient(to right, "+ getRandomColor() +", "+ getRandomColor() +")"
	css.textContent = body.style.background;
}

button.addEventListener("click", setRandom);


