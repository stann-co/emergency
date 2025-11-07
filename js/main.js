const eyes = document.querySelector("#eyes");
const feet = document.querySelector("#feet");
const hands = document.querySelector("#hands");

const eyes_info = document.querySelector("#info-eyes");
const feet_info = document.querySelector("#info-feet");
const hands_info = document.querySelector("#info-hands");

function clickEyes() {
	eyes_info.style.display = "block";
	hands_info.style.display = "none";
	feet_info.style.display = "none";
}
function clickHands() {
	hands_info.style.display = "block";
	eyes_info.style.display = "none";
	feet_info.style.display = "none";
}
function clickFeet() {
	feet_info.style.display = "block";
	hands_info.style.display = "none";
	eyes_info.style.display = "none";
}

function hoverEnterEyes() {
  	eyes.style.opacity = "0.5";
}
function hoverLeaveEyes() {
  	eyes.style.opacity = "0.0";
}
function hoverEnterHands() {
  	hands.style.opacity = "0.5";
}
function hoverLeaveHands() {
  	hands.style.opacity = "0.0";
}
function hoverEnterFeet() {
  	feet.style.opacity = "0.5";
}
function hoverLeaveFeet() {
  	feet.style.opacity = "0.0";
}




eyes.addEventListener("click", clickEyes);
eyes.addEventListener("mouseenter", hoverEnterEyes);
eyes.addEventListener("mouseleave", hoverLeaveEyes);
hands.addEventListener("click", clickHands);
hands.addEventListener("mouseenter", hoverEnterHands);
hands.addEventListener("mouseleave", hoverLeaveHands);
feet.addEventListener("click", clickFeet);
feet.addEventListener("mouseenter", hoverEnterFeet);
feet.addEventListener("mouseleave", hoverLeaveFeet);